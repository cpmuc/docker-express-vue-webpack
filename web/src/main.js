import { createApp } from 'vue'
import App from './App.vue'
import {createApolloProvider} from "@vue/apollo-option";
import {ApolloClient, InMemoryCache} from "@apollo/client/core";
import './assets/tailwind.css'
import router from './router'

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  cache,
  uri: 'http://localhost:8080/v1/graphql'
})

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient
})

createApp(App).use(router).use(apolloProvider).mount('#app')
