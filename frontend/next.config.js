/* eslint-disable @typescript-eslint/no-var-requires */
const withExportImages = require('next-export-optimize-images')

module.exports = withExportImages({
  output: 'export',
  images: {
    loader: 'custom',
    images: {
      imageSizes: [384],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    },
  },
  trailingSlash: true,
})
