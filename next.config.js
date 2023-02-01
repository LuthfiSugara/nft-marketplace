/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NETWORK_ID: process.env.NETWORK_ID,
    TARGET_CHAIN_ID: process.env.TARGET_CHAIN_ID,
  }
}

module.exports = nextConfig
