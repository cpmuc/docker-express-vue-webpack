<template>
  <div v-if="$apollo.loading">Loading...</div>
  <div v-else class="home">
    <h2>Posts:</h2>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="{ name: 'userPostById', params: { id: post.id } }">{{ post.title }}</router-link>
      </li>
    </ul>
    <h2>Tribes</h2>
    <ul>
      <li v-for="tribe in tribes" :key="tribe.id">
        <router-link :to="{ name: 'tribeById', params: { tribeId: tribe.id } }">{{ tribe.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import { tribesByUserId } from '@/queries/tribesByUserId'
import { postsByUserId } from '@/queries/postsByUserId'

export default {
  name: 'Home',
  apollo: {
    posts: postsByUserId(1),
    tribes: tribesByUserId(1)
  }
}
</script>
