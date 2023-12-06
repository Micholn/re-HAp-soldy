const { i18n } = require("./next-i18next.config");

/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
    poweredByHeader: false,
    trailingSlash: true,
    basePath: "",
})

// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig
