const { join } = require('path')

const paths = {
  root: join(__dirname, '..'),
  src: join( __dirname, 'public', 'app'),
  dist: join( __dirname, 'public', 'dist')
}


module.exports = {
	devtool: 'source-map',
	entry: join(paths.src, 'index.js'),
	output: {
		path: paths.dist,
    filename: 'bundle.js'
	},
	module: {
		rules: [
      { // Standard Linter
        enforce: 'pre',
        test: /\.js$/,
        include: paths.src,
        exclude: [/node_modules/],
        use: 'standard-loader'
      },
			{ // Babel Transpile ES6 for ES5
				test: /\.js$/,
				include: paths.src,
        exclude: [/node_modules/],
				use: 'babel-loader'
			}
		]
	}
}
