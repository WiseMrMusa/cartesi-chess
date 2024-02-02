// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BettingContract is Ownable {
    using SafeMath for uint256;

    // Enum to represent the possible outcomes of the bet
    enum BetOutcome {
        NotSet,
        PlayerA,
        PlayerB,
        Draw
    }

    // Struct to store bet information
    struct Bet {
        uint256 amount;
        BetOutcome outcome;
        bool isSettled;
    }

    // Address of the ERC-20 token used for betting
    IERC20 public token;

    // Mapping from better's address to their bet
    mapping(address => Bet) public bets;

    // Events
    event BetPlaced(address indexed bettor, uint256 amount, BetOutcome outcome);
    event BetSettled(address indexed bettor, uint256 amountWon);

    // Constructor
    constructor(address _tokenAddress) {
        token = IERC20(_tokenAddress);
    }

    // Function to place a bet
    function placeBet(uint256 amount, BetOutcome outcome) external {
        require(amount > 0, "Amount must be greater than 0");
        require(
            outcome == BetOutcome.PlayerA ||
                outcome == BetOutcome.PlayerB ||
                outcome == BetOutcome.Draw,
            "Invalid outcome"
        );

        // Transfer tokens from the bettor to the contract
        require(
            token.transferFrom(msg.sender, address(this), amount),
            "Token transfer failed"
        );

        // Record the bet
        bets[msg.sender] = Bet(amount, outcome, false);

        emit BetPlaced(msg.sender, amount, outcome);
    }

    // Function to settle the bet
    function settleBet(BetOutcome winningOutcome) external onlyOwner {
        require(
            winningOutcome == BetOutcome.PlayerA ||
                winningOutcome == BetOutcome.PlayerB ||
                winningOutcome == BetOutcome.Draw,
            "Invalid outcome"
        );

        // Ensure the bet is not settled already
        require(!bets[msg.sender].isSettled, "Bet already settled");

        // Mark the bet as settled
        bets[msg.sender].isSettled = true;

        // Calculate the amount won and transfer it to the bettor
        uint256 amountWon = calculateAmountWon(msg.sender, winningOutcome);
        require(amountWon > 0, "No winnings");

        require(token.transfer(msg.sender, amountWon), "Token transfer failed");

        emit BetSettled(msg.sender, amountWon);
    }

    // Internal function to calculate the amount won by a bettor
    function calculateAmountWon(
        address bettor,
        BetOutcome winningOutcome
    ) internal view returns (uint256) {
        Bet storage bet = bets[bettor];
        require(bet.isSettled == false, "Bet already settled");

        if (bet.outcome == winningOutcome) {
            // Bettor wins, return double the amount
            return bet.amount.mul(2);
        } else {
            // Bettor loses, return 0
            return 0;
        }
    }

    // Function to withdraw remaining tokens from the contract
    function withdrawTokens() external onlyOwner {
        uint256 contractBalance = token.balanceOf(address(this));
        require(
            token.transfer(owner(), contractBalance),
            "Token transfer failed"
        );
    }
}
