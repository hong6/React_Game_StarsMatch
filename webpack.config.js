// module.exports = {
//     module: {
//       rules: [
//         {
//           test: /\.js$/,
//           exclude: /node_modules/,
//           use: {
//             loader: 'babel-loader',
//           },
//         },
//       ],
//     },
//   };

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = { 
  plugins: [   
    new MiniCssExtractPlugin({
      filename: 'main.scss',
      chunkFilename: '[id].scss',
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        loader: [
          true ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ],
  },  
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  }
};
