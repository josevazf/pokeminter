# <div align="center"> PokéMinter</div>
<p align="center">A responsive Pokedex dApp that allows users to search for and mint each detailed Pokemon Card as an NFT</p>
<p align="center">https://pokeminter.vercel.app</p>

![image](https://github.com/josevazf/pokeminter/assets/19204122/94395343-11d1-44c0-972e-949bdcd9e957)

## 👁️ Overview
This project was built using React (create-react-app with typescript), Axios to fetch data from the PokeApi, MUI components to ease up on the UI creation, RainbowKit to provide the “Connect Pokédex” button (aka wallet), Wagmi to glue the frontend with the EVM, and some scripts to automatically generate the Pokemon SVG’s and metadata JSON files to be used in the NFT creation.

The number of Pokémons rendered is limited to 151 (considering these the OG's) and also because all of them are rendered on each load of the page, this is something to work on and updgrade later on.
There is also a search bar that filters the Pokémons showed based on the input name.
When a Pokémon card is clicked a modal opens with a detailed Pokémon Card and a button to mint it as an NFT, here we can also change the Card to the previous and next Pokémon based on it's number.

The Pokémon Cards design was picked up from an AMAZING template created and published by [@ricardohs](https://www.figma.com/@ricardohs) on Figma. This was then translated into HTML code, so it could be rendered on the page with each Pokemon's updated information. To create the NFTs, this template was also converted to SVG (with no text outlines) which allowed the inclusion of input variables to later be updated with the Pokémon information, and batch create all desired Pokémon cards with a script. To complement, this script also creates the metadata.json files that will compose each NFT card, also populating it with the Pokémon details.

The NFT contracts where developed according to the ERC721URIStorage standard implementation with a little twist to limit the Pokémon NFT minting to 1 of each per wallet. The metadata was stored on IPFS using Pinata, and all under a single CID, this way we can embed this link in the contract and only attach it the receive input number of the NFT to create. This prevents having to use the deployer account to mint the NFTs while also ensuring that no other info can be injected. The contracts were deployed on Sepolia and Sepolia Base testnets using RemixIDE.

Deployed contracts:
- Sepolia Testnet: https://sepolia.etherscan.io/address/0x35c6D97EaAcA055480e3471C1045e4659F9371e7
- Base Sepolia Testnet: https://sepolia.basescan.org/address/0x4e7a8e08f86f1653669ea9e26388268b1210eb3f

OpenSea collections:
- Sepolia Testnet: https://testnets.opensea.io/collection/pokeminter-sepolia
- Base Sepolia Testnet: https://testnets.opensea.io/collection/pokeminter-base-sepolia

![image](https://github.com/josevazf/pokeminter/assets/19204122/46236e98-a2b9-4c06-853c-760e86076cb6)

## 🛠️ Technologies

<ul>
  <li><a href="https://reactjs.org/">React TS</a></li>
  <li><a href="https://pokeapi.co/">Poke Api</a></li>
  <li><a href="https://axios-http.com">Axios</a></li>
  <li><a href="https://mui.com">MUI</a></li>
  <li><a href="https://www.rainbowkit.com">RainbowKit</a></li>
  <li><a href="https://wagmi.sh">Wagmi</a></li>
  <li><a href="https://www.pinata.cloud">Pinata</a></li>
  <li><a href="https://www.figma.com">Figma</a></li>
</ul>

## ⚙️ Requirements

To run the app:
<ul>
  <li><a href="https://git-scm.com/">Git</a></li>
  <li><a href="https://nodejs.org/en/">Node.js</a></li>
  <li><a href="https://www.npmjs.com/">NPM</a></li>
</ul>

To run the scripts (installed globally):
<ul>
  <li><a href="https://www.typescriptlang.org">Typescript</a></li>
  <li><a href="https://www.npmjs.com/package/tsx">TSX</a></li>
</ul>

## 🚀 Installation

```SH
$ git clone https://github.com/josevazf/pokeminter.git
$ cd react-app
$ npm install
$ npm start
```

The application will open in the browser on http://localhost:3000

To run the scripts 
```SH
$ cd react-app/scripts
$ tsx 
$ npm start
```

## Future updates
- Render a fixed number of Pokémons at a time, allowing to integrate the full Pokédex
- Option to filter Pokémons by defined attributes
- Show NFTs that have been minted by the user
