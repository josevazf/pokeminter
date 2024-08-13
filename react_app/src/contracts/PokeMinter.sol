// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract PokeMinter is ERC721URIStorage {
    uint256 private s_tokenCounter;
    mapping(address => mapping(uint256 => bool)) public hasMintedPokemon;
    
    constructor()
        ERC721("PokemonMinter", "PKMN")
    {
        s_tokenCounter = 0;
    }

    // Read-only function to check whether a user has minted an NFT
    function hasPokemon(address _user, uint256 _id) public view returns (bool) {
        return hasMintedPokemon[_user][_id];
    }

    // Function to mint NFT according to Pokémon index number
    function mintNFT(address recipient, uint256 _id) public {
        require(!hasMintedPokemon[recipient][_id], "You already have that Pokemon! Go catch another one...");
        uint256 tokenId = s_tokenCounter;

        _safeMint(recipient, tokenId);
        _setTokenURI(tokenId, string(abi.encodePacked("https://ipfs.io/ipfs/QmU3D6GFni3MxZVHJxkGUmuWHz5UhT5UeyPhQXTTF38zgv/", Strings.toString(_id), ".json")));

        s_tokenCounter += 1;
        hasMintedPokemon[recipient][_id] = true;
    }
}
