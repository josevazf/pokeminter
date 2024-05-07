import fs from 'fs';
import { create } from 'kubo-rpc-client';

var pokemonLimit = 5;

// connect to ipfs daemon API server
const ipfs = create('http://127.0.0.1:5001');

async function uploadToIPFS(filePath: string) {
  try {
    const response = await ipfs.add(fs.createReadStream(filePath));

    return response;
  } catch (error) {
    console.error('Error uploading to IPFS:', error);
    throw error;
  }
}

function updateNFTMetadata(filePath: string, imageUrl: string) {
  var jsonFile = fs.readFileSync(filePath, 'utf-8');
  jsonFile = jsonFile.replace('{link}', imageUrl);
  fs.writeFileSync(filePath, jsonFile);
}

async function main() {
  try {
    for (let i = 1; i <= pokemonLimit; i++) {
      const imageName = `${String(i).padStart(3, '0')}.svg`;
      const imagePath = `./out/svg/${imageName}`;

      // Upload image
      const imageUploadResponse = await uploadToIPFS(imagePath);
      console.log(`Image ${String(i).padStart(3, '0')}`, imageUploadResponse);

      // Update NFT url metadata
      const imageUrl = `https://ipfs.io/ipfs/${imageUploadResponse.cid}`;
      const metadataFile = `${String(i).padStart(3, '0')}.json`;
      const metadataPath = `./out/json/${metadataFile}`;
      updateNFTMetadata(metadataPath, imageUrl);

      // Upload metadata
      const metadataUploadResponse = await uploadToIPFS(metadataPath);
      console.log(`Metadata ${String(i).padStart(3, '0')}:`, metadataUploadResponse);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
