const fs = require('fs')
const path = require('path')
const less = require('less')
const chalk = require('chalk')

exports.start = (input, output) => {

  const home = process.cwd()

  const srcDir = path.join(home, input.dir)
  const cssDir = path.join(home, output)

  console.log('Watching ' + input.dir)

  let isCompiling = false

  if (!input.isFile) {
    fs.watch(srcDir, {
      recursive: true
    },
      (event, file) => {
        if (path.extname(file) == '.less')
          renderCss(path.join(srcDir, file))
      })
  }
  else {

    fs.watchFile(srcDir, (curr, prev) => {
      if (curr.size == 0) {
        console.log(srcDir + ' does not exist. Try making it first.')
        return
      }
      renderCss(srcDir)
    })
  }

  function renderCss(file) {
    if (isCompiling) return

    console.log((chalk.yellow('Detected change in \'' + file + '\'')))

    let start = Date.now()
    isCompiling = true

    setTimeout(() => {
      isCompiling = false
    }, 100);

    console.log(chalk.yellow('Attemping to compile ' + input.dir))
    fs.statSync(file)
    fs.readFile(file, 'utf-8', (err, content) => {
      less.render(content, { sourceMap: {} }).then(
        output => {
          const cssFilename = path.basename(file, '.less') + '.css'
          fs.writeFileSync(path.join(cssDir, cssFilename), output.css)

          if (input.map) {
            fs.writeFileSync(path.join(cssDir, cssFilename + '.map'), output.map)
            console.log(chalk.yellow('Sourcemap \''+ input.dir + '.map' +'\' created'))
          }
          console.log(chalk.green('Succesfully compiled in ') + chalk.yellow((Date.now() - start) + 'ms'))
        },
        error => {
          console.log('Unsuccesful. Failed to render.\n' + error)
        })
    })
  }
}