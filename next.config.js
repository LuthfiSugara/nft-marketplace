/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NETWORK_ID: process.env.NETWORK_ID,
    TARGET_CHAIN_ID: process.env.TARGET_CHAIN_ID,
    PINATA_DOMAIN: process.env.PINATA_DOMAIN,
    SECRET_COOKIE_PASSWORD: process.env.SECRET_COOKIE_PASSWORD,
    PINATA_API_KEY: process.env.PINATA_API_KEY,
    PINATA_SECRET_API_KEY: process.env.PINATA_SECRET_API_KEY,
    PINATA_JWT_KEY: process.env.PINATA_JWT_KEY,
    INFURA_ROPSTEN_URL: process.env.INFURA_ROPSTEN_URL,
  }
}

module.exports = nextConfig
