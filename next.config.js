/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');


module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['s3.us-west-2.amazonaws.com'],
    unoptimized: true,
  },
  i18n,
}

