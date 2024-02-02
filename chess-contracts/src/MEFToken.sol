// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract MyToken is ERC20, Ownable, ERC20Permit {
    constructor(address initialOwner)
        ERC20("MEF Chess", "MEF")
        Ownable(initialOwner)
        ERC20Permit("MEF Chess")
    {}

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function butToken() external payable {
        _mint(msg.sender, msg.value);
    }


    function bridgetTokenToCartesiPortal() external {

    }
}
