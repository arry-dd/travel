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
    }

}
