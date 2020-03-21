module.exports = {
    configureWebpack (config) {
        config.module.rules.push({
            resourceQuery: /blockType=slot/,
            loader: '../index.js'
        })
    }
}