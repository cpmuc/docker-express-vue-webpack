<template>
  <div class="home">
    Posts:
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="{ name: 'userPostById', params: { id: post.id } }">{{ post.title }}</router-link>
      </li>
    </ul>
    Tribes
    <ul>
      <li v-for="tribe in tribes" :key="tribe.id">
        {{ tribe.name }}</li>
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
