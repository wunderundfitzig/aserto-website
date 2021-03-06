const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const extensions = ['.jpg', '.png']
const imageResizeTargets = [
  16,
  32,
  48,
  64,
  96,
  128,
  256,
  384,
  640,
  750,
  828,
  1080,
  1200,
  1920,
  2048,
  3840,
]

/**
 * The following code is taken from https://gist.github.com/adamwdraper/4212319
 * In short, we're looping over files in the walkpath and run them all through
 * Sharp to resize them. This code is unoptimized and serves as a starting point to
 * get resized images in our static builds.
 *
 */

const walkPath = 'public/images'

function walk(dir, done) {
  fs.readdir(dir, function (error, list) {
    if (error) {
      return done(error)
    }

    var i = 0

    ;(function next() {
      var file = list[i++]

      if (!file) {
        return done(null)
      }

      file = dir + '/' + file

      fs.stat(file, function (error, stat) {
        if (stat && stat.isDirectory()) {
          walk(file, function (error) {
            next()
          })
        } else {
          const ext = path.extname(file)
          if (!extensions.includes(ext)) {
            next()
            return
          }
          const filename = path.basename(file).split('.').slice(0, -1).join('.')
          const dirname = path.dirname(file).replace(/\//g, '-')
          console.log(`Now resizing: ${dirname}/${filename}${ext}`)

          imageResizeTargets.forEach((size) => {
            const output = `public/resized-images/${dirname}-${filename}-${size}${ext}`
            sharp(file)
              .resize({ width: size, withoutEnlargement: true })
              .toFile(output)
          })

          next()
        }
      })
    })()
  })
}

console.log('-------------------------------------------------------------')
console.log(`We're going to resize images in ${walkPath}...`)
console.log('-------------------------------------------------------------')

// Walk through the sanity image directory and report
// that we're done or throw an error
walk(walkPath, function (error) {
  if (error) {
    throw error
  } else {
    console.log('-------------------------------------------------------------')
    console.log('All done!')
    console.log('-------------------------------------------------------------')
  }
})
