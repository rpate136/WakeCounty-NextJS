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
    FLASK_APP_BACKEND_URI: 'http://localhost:5000'
  }
}

module.exports = nextConfig
