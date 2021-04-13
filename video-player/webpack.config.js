const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV === "production";

module.exports ={
  mode:isProduction ? "production" :"development",
  devtool: 'inline-source-map',
  entry:"./script.ts",
  output:{
    filename:"app.js",
    path:path.resolve(__dirname,'build')
  },
  module:{
    rules:[
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test:/\.css/i,
        use:[
          {
            loader:MiniCssExtractPlugin.loader // style-loader를 대체 한다.
          },
          "css-loader"
        ]
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename:'[contenthash].css'
    }),
    new HTMLWebpackPlugin({
      template:path.resolve(__dirname, "index.html")
    }),
    new CleanWebpackPlugin(),
  ],
  devServer:{
    overlay:true, //에러 발생시 페이지에 나오게
    port:3005
  }


};