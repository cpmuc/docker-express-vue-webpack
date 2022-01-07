<template>
  <div v-if="$apollo.loading">Loading...</div>
  <div v-else>
    <p>{{ tribes[0].name}}</p>
    <h2>Posts</h2>
    <ul>
      <li v-for="{ post } in tribes[0].post_tribes" :key="post.id">
        <router-link :to="{ name: 'postInTribe', params: { tribeId: $route.params.tribeId, postId: post.id }}">
          {{ post.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: 'tribeIndex',
  apollo: {
    tribes: {
      query: gql`query Tribe($tribeId: Int) {
        tribes(where: {id: {_eq: $tribeId}}) {
          name
          post_tribes {
            post {
              id
              title
            }
          }
        }
      }
      `,
      variables() {
        return {
          tribeId: this.$route.params.tribeId,
        }
      }
    }
  }
}
</script>