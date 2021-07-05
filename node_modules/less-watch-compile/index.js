const watcher = require('./watch')
const config = require('yargs')
    .option('watch-directory', {
        alias: 'w',
        type: 'string',
        default: './',
        describe: 'Directory to watch. Defaults to current directory if none is specified'
    })
    .option('output-directory', {
        alias: 'o',
        demandOption: true,
        type: 'string',
        describe: 'Directory to output compiled LESS to'
    })
    .option('file', {
        alias: 'f',
        type: 'string',
        describe: 'Single file to watch'
    })
    .option('sourcemap', {
        alias: 'm',
        type: 'boolean',
        describe: 'Enable generating of sourcemap'
    })
    .argv

let input = {
    dir: (!config.f ? config.w : config.f).trim(),
    isFile: !!config.f,
    map: config.m
    }

watcher.start(input, config.o.trim())
// if (!config.file)
//     watcher.start(config.watchDir.trim(), config.outputDir.trim())
// else
//     watcher.start(config.file.trim(), config.outputDir.trim(), true)