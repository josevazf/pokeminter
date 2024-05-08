import fs from 'fs';

var pokemonLimit = 151;
var ipfs_svg_CID = "QmXBi35D6XBvZPvugHjnvCLTobkEtDLSvChHB8Fs2HZvZE";

function updateNFTMetadata(filePath: string, imageUrl: string) {
  var jsonFile = fs.readFileSync(filePath, 'utf-8');
  jsonFile = jsonFile.replace('{link}', imageUrl);
  fs.writeFileSync(filePath, jsonFile);
}

async function main() {
  try {
    for (let i = 1; i <= pokemonLimit; i++) {
      const imageName = `${String(i)}.svg`;

      // Update NFT url metadata
      const imageUrl = `https://ipfs.io/ipfs/${ipfs_svg_CID}/${imageName}`;
      const metadataFile = `${String(i)}.json`;
      const metadataPath = `./out/json/${metadataFile}`;
      updateNFTMetadata(metadataPath, imageUrl);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

main();