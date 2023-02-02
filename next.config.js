
const withMDX = require('@next/mdx')({
    extension: /\.mdx$/
})
module.exports = withMDX({
    pageExtensions: ['js', 'jsx', 'mdx']
})

module.exports = {
    images: {
        domains: ['www-league.nhlstatic.com', 'nhl.bamcontent.com', 'cms.nhl.bamgrid.com']
    },
    target: 'serverless'
}