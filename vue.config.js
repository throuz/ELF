module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "一路發集運網";
                return args;
            })
    },
    publicPath: process.env.NODE_ENV === 'production' ? '/ELF/' : '/'
}