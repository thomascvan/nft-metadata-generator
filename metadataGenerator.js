// Convert the date to a Unix timestamp
const date = new Date("August 17, 2023");
const unixTimestamp = Math.floor(date.getTime() / 1000);

// Use the unixTimestamp as the value in your metadata
const metadata = {
  name: `Crypto Noire #${tokenId}`,
  description: `NFT Collection for Crypto Noire's inaugural retreat of Black crypto Leaders.`,
  image: `ipfs://QmdbGsym85gUMXW3MtKhSCZKt1HyUkxpAypqehgh3RLYFD`,
  attributes: [
    {
      display_type: "date",
      trait_type: "Inaugural Retreat",
      value: unixTimestamp,
    },
  ],
};