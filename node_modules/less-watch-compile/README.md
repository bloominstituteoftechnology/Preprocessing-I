# less-watch-compile
Watch specified directory or file for changes to LESS files, and save the generated CSS where specified

### Installation
Install from [npm](https://www.npmjs.com/)
```sh
npm i less-watch-compile
```

## Usage 
```sh
node node_modules/less-watch-compile -w <dir> -o <dir> -f <path> -m
```
  --watch-directory, -w   Directory to watch. Defaults to current directory if none is specified [string] [default: "./"]  
  --output-directory, -o  Directory to output compiled LESS to [string] [required]  
  --file, -f              Single file to watch [string]  
  --sourcemap, -m         Enable generating of sourcemap [boolean]  

*Note, if both ---watch-directory and --file are used, --watch-directory will be ignored*

#### Example Usage
Parent  
|----src  
|--------main.less  
|----public  
|--------styles  
|------------main.css  
|------------main.css.map  
In the example directory above, the contents *src/* can be compiled to *public/styles/* using
```sh
node node_modules/less-watch-compile -w src -o public/styles
```
To only watch for *main.less*, use
```sh
node node_modules/less-watch-compile -f src/main.less -o public/styles
```
To include a sourcemap with *main.css*, use
```sh
node node_modules/less-watch-compile -f src/main.less -o public/styles -m
```
### Todos
* Reduce delay in changes detection

# Bugs
If you find any bugs, please submit an issue. This project is still in a early stage, and any feedback would greatly help! :)

### Version
2.1.0

License
----

MIT
