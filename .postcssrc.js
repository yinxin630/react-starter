// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = ({
    file,
    options,
    env
}) => ({
    parser: file.extname === '.css' ? 'sugarss' : false,
    plugins: {
        'autoprefixer': env == 'production' ? {} : false,
    }
})
