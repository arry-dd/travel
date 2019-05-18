const path = require('path');
const webpack = require('webpack');




module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                style: path.resolve(__dirname,'./src/assets/style')
            }
        }
    }

}
