// https://github.com/michael-ciniawsky/postcss-load-config
const config = require('./config/index.js')

module.exports = ({
    file,
    options,
    env
}) => ({
    parser: file.extname === '.css' ? 'sugarss' : false,
    plugins: {
        'autoprefixer': env == 'production' ? {} : false,
        'postcss-pxtorem': config.commonn.convertPxToRem ? config.commonn.convertPxToRem.options : {},
    }
})
