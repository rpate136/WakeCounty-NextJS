/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // publicRuntimeConfig: {
  //   name: process.env.NAME,
  //   description: process.env.DESCRIPTION,
  // },
  env: {
    FLASK_APP_BACKEND_URI:  process.env.NEXT_PUBLIC_API_URI
  }
}

module.exports = nextConfig
