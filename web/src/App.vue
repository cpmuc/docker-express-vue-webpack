<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <ul>
    <li v-for="post in posts" :key="post.id">
      {{ post.title }} by {{ post.user.name }}
    </li>
  </ul>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import gql from 'graphql-tag'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
 apollo: {
   posts: gql`query posts {
    posts {
      id
      title
      user {
        name
      }
    }
  }`,
 }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
