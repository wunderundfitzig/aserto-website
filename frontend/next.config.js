/* eslint-disable @typescript-eslint/no-var-requires */
const withExportImages = require('next-export-optimize-images')

module.exports = withExportImages({
  output: 'export',
  images: {
    loader: 'custom',
  },
  trailingSlash: true,
})
