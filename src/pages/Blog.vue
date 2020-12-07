<template>
  <Layout>
    <div v-for="edge in $page.posts.edges" :key="edge.node.id">
      {{ edge.node.title }}
      {{ edge.node.outline }}
      {{ edge.node.body }}
    </div>
  </Layout>
</template>

<page-query>
  query {
    posts: allBlog {
      edges {
        node {
          title
          outline
          body
        }
      }
    }
  }
</page-query>