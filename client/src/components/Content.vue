<template lang="html">
  <div class="content">
    <h1>ini content</h1>
      <div class="panel panel-default">
        <div class="panel-heading">
          <router-link to="/createThread" class="btn btn-primary">Create New Thread</router-link>
        </div>
        <!-- Table -->
        <table class="table">
          <thead>
            <tr>
              <th>Thread</th>
              <th>Author</th>
              <th>Vote</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="thread in data">
              <td>{{thread.title}}</td>
              <td>{{thread.username}}</td>
              <td>
                <span><i @click='upVote(thread._id)' class="fa fa-caret-up" aria-hidden="true"></i></span>
                {{thread.upvote.length - thread.downvote.length}}
                <span><i @click='downVote(thread._id)' class="fa fa-caret-down" aria-hidden="true"></i></span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: []
    }
  },
  methods: {
    getAllThread () {
      this.$http.get('http://localhost:3000/thread')
      .then(res => {
        console.log(res.data)
        this.data = res.data
      })
      .catch(err => {
        console.log(err)
      })
    },
    upVote (id) {
      console.log(this.data._id)
      this.$http.put(`http://localhost:3000/thread/${id}/upvote`, {
        user_id: localStorage.getItem('id')
      })
      .then(res => {
        this.getAllThread()
      })
    },
    downVote (id) {
      this.$http.put(`http://localhost:3000/thread/${id}/downvote`, {
        user_id: localStorage.getItem('id')
      })
      .then(res => {
        this.getAllThread()
      })
    }
  },
  created () {
    this.getAllThread()
  }
}
</script>

<style lang="css">
</style>
