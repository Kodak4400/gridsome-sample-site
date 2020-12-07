require('dotenv').config()
const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async actions => {
    const { data } = await axios.get(`https://kodak.microcms.io/api/v1/article`, {
      headers: { 'X-API-KEY': process.env.API_KEY }
    })

    const blog = actions.addCollection({
      typeName: 'Blog'
    })

    for (const item of data.contents) {
      blog.addNode({
        id: item.id,
        title: item.title,
        outline: item.outline,
        body: item.body
      })
    }  
  })
}
