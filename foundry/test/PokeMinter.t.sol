// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {PokeMinter} from "../src/PokeMinter.sol";

contract PokeMinterTest is Test {
    PokeMinter public pokeMinter;

    function setUp() public {
        pokeMinter = new PokeMinter();
    }

}
