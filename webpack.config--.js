var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var TEMP_PATH = path.resolve(ROOT_PATH, 'tpl');

module.exports = {

	entry: {
		app: path.resolve(APP_PATH, 'index.js'),
		mobile: path.resolve(APP_PATH, 'mobile.js'),
		vendors: ['jquery', 'moment']
	},

	output: {
		path: BUILD_PATH,
		filename: 'js/[name].[hash].js'
	},

	module: {
		loaders: [
			/*publicPath用于在url地址前加上公共路径*/
			{ test: /\.css$/, loader: ExtractTextPlugin.extract( "style-loader", "css-loader", {publicPath: '../'} ) },
			{ test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css!sass", {publicPath: '../'} ) },
			{ test: /\.(jpg|png|gif)/, loader: 'url?limit=113000&name=img/[name].[hash:8].[ext]'},
			{ test: /\.jsx?$/, loader: 'babel', include: APP_PATH, query: { presets: ['es2015'] } },
	        { test: /\.(woff|woff2|svg|eot|ttf)/, loader: 'url?limit=1000&name=font/[name].[ext]' }
		]
	},

	plugins: [

		new webpack.optimize.UglifyJsPlugin({ minimize: true }),


		new HtmlwebpackPlugin({
			title: 'Hello World app',
			template: path.resolve(TEMP_PATH, 'index.html'),
			filename: 'index.html',
			chunks: ['app'],
			inject: 'body'
		}),

		new HtmlwebpackPlugin({
			title: 'Hello Mobile app',
			template: path.resolve(TEMP_PATH, 'mobile.html'),
			filename: './pages/mobile.html',
			chunks: ['mobile'],
			inject: 'body'
		}),

		/*打包后index.html包含app.css(bootstrap.css/main.css)+vendors.css(index.scss/variable.scss); mobile.html仅包含vendors.css。webpack会抽取公共样式并以chunk入口命名*/
		new ExtractTextPlugin("css/[name]-[hash].css"),

		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery'
		})
	],

	devServer: {
		port: 2999,
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true
	},

	devtool: 'eval-source-map'
};