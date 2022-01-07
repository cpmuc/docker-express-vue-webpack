<template>
  <div v-if="$apollo.loading">Loading...</div>
  <div v-else>
    <p>{{ posts[0].title}}</p>
    <p>view only:</p>
    <p v-html="JSON.parse(posts[0].content)"></p>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: 'userPost',
  apollo: {
    posts: {
      query: gql`query Post($postId: Int) {
        posts(where: {id: {_eq: $postId}}) {
          title
          content
        }
      }
      `,
      variables() {
        return {
          postId: this.$route.params.postId,
        }
      }
    }
  }
}
</script>
