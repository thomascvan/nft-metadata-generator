const fs = require('fs');

for (let tokenId = 1; tokenId <= 40; tokenId++) {
  const date = new Date("August 17, 2023");
  const unixTimestamp = Math.floor(date.getTime() / 1000);

  const metadata = {
    name: `Crypto Noire #${tokenId}`,
    description: `NFT Collection for Crypto Noire's Inaugural Retreat of Black Crypto Leaders.`,
    image: `ipfs://QmdbGsym85gUMXW3MtKhSCZKt1HyUkxpAypqehgh3RLYFD`,
    attributes: [
      {
        display_type: "date",
        trait_type: "Inaugural Retreat",
        value: unixTimestamp,
      },
    ],
  };

  const fileName = `${tokenId}.json`;

  fs.writeFileSync(fileName, JSON.stringify(metadata, null, 2));

  console.log(`Created ${fileName}`);
}
