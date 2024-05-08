# <div align="center"> PokeMinter</div>
<p align="center">A responsive Pokedex dApp that allows users to search for and mint each detailed Pokemon Card as an NFT</p>

## 👁️ Overview
This project was built using React (create-react-app with typescript), Axios to fetch data from the PokeApi, MUI components to ease up on the UI creation, RainbowKit to provide the “Connect Pokédex” button (aka wallet), Wagmi to glue the frontend with the EVM, and some scripts to automatically generate the Pokemon SVG’s and metadata JSON files.
The NFT contracts where developed according to the ERC721URIStorage standard implementation with a little twist to limit the Pokémon NFT minting to 1 of each per wallet. They were deployed on Sepolia and Sepolia Base testnets.

The number of Pokémons rendered is limited to 151 (considering these the OG's) and also because all of them are rendered on each load of the page, this is something to work on and updgrade later on.
There is a search bar that filters the Pokémons showed based on the input text.

Main UI was developed using MUI components and RainbowKit to provide the Connect button.

The Pokémon Detailed Cards design was picked up from an AMAZING template created and published by [@ricardohs](https://www.figma.com/@ricardohs) on Figma. This was then translated into HTML code, so it could be rendered on the page with each Pokemon's updated information. To create the NFTS, this template was also converted to SVG (with no text outlines) which allowed the inclusion of input variables to later be updated with the Pokémon information, and batch create all desired Pokémon cards with a script. To complement, this script also creates the metadata.json files that will compose each NFT card, also populating it with the Pokémon information.

## 🛠️ Technologies

<ul>
  <li><a href="https://reactjs.org/">React TS</a></li>
  <li><a href="https://pokeapi.co/">Poke Api</a></li>
  <li><a href="https://axios-http.com">Axios</a></li>
  <li><a href="https://mui.com">MUI</a></li>
  <li><a href="https://www.rainbowkit.com">RainbowKit</a></li>
  <li><a href="https://wagmi.sh">Wagmi</a></li>
  <li><a href="https://www.pinata.cloud">Pinata</a></li>
  <li><a [href="https://www.pinata.cloud](https://www.figma.com/@ricardohs)">Pinata</a></li>
  
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
