const Prismic = require('@prismicio/client');


const apiEndpoint = 'https://ontherink.cdn.prismic.io/api/v2'

export const Client = Prismic.client(apiEndpoint)
