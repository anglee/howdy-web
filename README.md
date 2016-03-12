This is a minimal frontend setup for quick JS experiments.

## scripts
### Install
```
npm install
```

### Develop
To experiment with JS(ES2015), update `howdy.js` and run

```
npm run dev
```

then open browser and point to `http://localhost:8000`

It uses webpack-dev-server and hot-reloads the page whenever source changes.

Bonus,

Set Chrome DevTools workspace to edit `howdy.js` in Chrome DevTools:

1. Go to the Source tab, 'Add Folder to Workspace', choose `howdy-web` root.
2. Locate `howdy.js` in the Workspace navigation tree.
3. Right click and 'Map to Network Resource...', choose `webpack:///./howdy.js`


### Test
Run mocha tests with:

```
npm test
```

add tests in `howdy.spec.js`

Bonus:

If using Webstorm, you might also want to consider to 'Run > Edit Configurations...' and add a mocha configuration with `--compilers js:babel-register` for `*.spec.js` files.  


### Build
```
npm run build
```
It will run webpack to generate the bundle in `./public`. 

### Start
```
npm start
```

It will start a simple http server at `http://localhost:3000` and serve from `./public`.
