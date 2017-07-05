import { join } from 'path'
import webpack from 'webpack'
import nodeExternals from 'webpack-node-externals'
import WebpackShellPlugin from 'webpack-shell-plugin'
import LiveReloadPlugin from 'webpack-livereload-plugin'

const paths = {
  root: join(__dirname, '..'),
  publicSrc: join( __dirname, 'public', 'app'),
  publicDist: join( __dirname, 'public', 'dist'),
  serverSrc: join( __dirname, 'server', 'app'),
  serverDist: join( __dirname, 'server', 'dist'),
}

const client = {
	devtool: 'source-map',
	entry: join(paths.publicSrc, 'index.js'),
	output: {
		path: paths.publicDist,
    filename: 'bundle.js'
	},
	module: {
		rules: [
      { // Standard Linter
        enforce: 'pre',
        test: /\.js$/,
        include: paths.publicSrc,
        exclude: [/node_modules/],
        use: 'standard-loader'
      },
			{ // Babel Transpile ES6 for ES5
				test: /\.js$/,
				include: paths.publicSrc,
        exclude: [/node_modules/],
				use: 'babel-loader'
			}
		]
	},
  plugins: [
    new LiveReloadPlugin()
  ]
}

// Server Plugins
let serverPlugins = []
if (process.env.NODE_ENV !== 'production') {

  serverPlugins.push(new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    compress: {warnings: false}
  }))

  serverPlugins.push(new WebpackShellPlugin({
    onBuildStart: ['echo "Starting"'],
    onBuildEnd: ['npm run start:devserver']
  }))
}

const server = {
  target: 'node',
  node: {
    __dirname: false,
  },
  externals: [nodeExternals({
    modulesFromFile: true,
  })],
  entry: {
    js: join(paths.serverSrc, 'bin', 'www.js'),
  },
  output: {
    path: paths.serverDist,
    filename: 'www',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      { // Standard Linter
        enforce: 'pre',
        test: /\.js$/,
        include: paths.serverSrc,
        exclude: [/node_modules/],
        use: 'standard-loader'
      },
      { // Babel Transpile ES6 for ES5
        test: join(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: 'cacheDirectory=.babel_cache',
        },
      },
    ],
  },
  plugins: serverPlugins
}


export default [client, server]
