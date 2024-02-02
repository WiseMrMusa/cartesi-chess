// Copyright 2021 Cartesi Pte. Ltd.

// SPDX-License-Identifier: Apache-2.0
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use
// this file except in compliance with the License. You may obtain a copy of the
// License at http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software distributed
// under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
// CONDITIONS OF ANY KIND, either express or implied. See the License for the
// specific language governing permissions and limitations under the License.

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/// @title This is a swap contract for the NFT Market
/// @author team MEF


contract Swap {

    // Declaration of variables
    IERC20 token;
    uint public rate = 1000;

    event swapped(address indexed addr, uint indexed amount);
    event Rate(uint rate);


    /// @param _token: this is the token's contract address
    constructor (IERC20 _token){
        token = _token;
    }


    /// @dev this function allows  users to swap their native tokens for ours to be able to perform transaction on our platform
    function swap() public payable {
        require(msg.value > 0, "Not enough balance");
        require(msg.sender != address(0), "Cannot transfer to address zero");

        uint transferrable = msg.value * rate;
        token.transfer(msg.sender, transferrable);

        emit swapped(msg.sender, transferrable);
    }

    /// @dev this function allows it to be possible to change the exchange rate
    /// @param _rate: this is the swap's exchange rate
    function editRate(uint _rate) public {
        rate = _rate;

        emit Rate(_rate);
    }

    receive() external payable{}
}