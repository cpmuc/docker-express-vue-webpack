<template>
  <div v-if="$apollo.loading">Loading...</div>
  <div v-else>
    <p>{{ posts[0].title}}</p>
    <h2>content</h2>
    <tiptap v-model="content" />
    <button @click="saveChanges">{{ dirty ? 'Save' : 'up to date'}}</button>
    <hr>
    <p>shared to:</p>
    <ul>
      <li v-for="{ tribe } in posts[0].post_tribes" :key="tribe.id">
        {{ tribe.name }}
      </li>
    </ul>
  </div>
</template>

<script>
// import { postById } from '@/queries/postById'
import gql from "graphql-tag";
import Tiptap from "@/components/Tiptap";

export default {
  name: 'userPost',
  components: {Tiptap},
  data() {
    return {
      dirty: false,
      posts: [],
      contentDirty: ''
    }
  },
  computed: {
    content: {
      get() {
        return JSON.parse(this.posts[0].content)
      },
      set(val) {
        this.dirty = true
        this.contentDirty = val
      }
    }
  },
  apollo: {
    posts: {
      query: gql`query Post($postId: Int) {
        posts(where: {id: {_eq: $postId}}) {
          title
          content
          post_tribes {
            tribe {
              name
              id
            }
          }
        }
      }
      `,
      variables() {
        return {
          postId: this.$route.params.id,
        }
      }
    }
  },
  methods: {
    async saveChanges() {
      await this.$apollo.mutate({
        mutation: gql`mutation UpdatePost($content: jsonb) {
          update_posts(_set: {content: $content}, where: {id: {_eq: 1}}) {
            returning {
              content
            }
          }
        }`,
        variables: {
          content: JSON.stringify(this.contentDirty)
        }
        /*update: (store, { data: saveChanges }) => {
          const { posts } = store.readQuery({ query: POSTS })
          store.writeQuery({ query: POSTS, { posts }})
        }*/
      })

      this.dirty = false
    }
  }
}
</script>
