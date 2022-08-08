const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true
})
module.export = {
    configureWebpack: { //配置起别名
        resolve: {
            alias: {
                'assets': './src/assets',
                'common': './src/common',
                'components': './src/components',
                'network': './src/component/network',
                'views': './src/views'
            }
        }
    }
}