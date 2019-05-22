const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: true,
    //设置别名
    chainWebpack: (config)=>{
        config.resolve.alias
            .set('home', resolve('src/components/home'))
            .set('style', resolve('src/assets/styles'))
            .set('src', resolve('src'))
            .set('city', resolve('src/components/city'))
            .set('detail', resolve('src/components/detail'))
            .set('common', resolve('src/components/common'))
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/data'
                }
            }
        }
    }
}
