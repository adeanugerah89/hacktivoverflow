<template lang="html">
  <div class="comment">
    <button type="button" class="btn btn-info" data-toggle="modal" data-target="#myModal">Comment Thread</button>
    <div id="myModal" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">input your comment below</h4>
          </div>
          <div class="modal-body">
            <textarea v-model="comment" name="name" rows="8" cols="60"></textarea>
          </div>
          <div class="modal-footer">
            <button @click="createComment()" type="button" class="btn btn-default" data-dismiss="modal">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      comment: '',
      thread_id: '',
      user_id: '',
      username: ''
    }
  },
  props: [
    'threadid'
  ],
  methods: {
    createComment () {
      this.thread_id = this.threadid
      this.$http.post(`http://localhost:3000/comment`, {
        comment: this.comment,
        thread_id: this.thread_id,
        user_id: localStorage.getItem('id'),
        username: localStorage.getItem('username')
        // upvote:
        // downvote:
      })
      .then(res => {
        console.log(res)
        this.$emit('create-new-comment')
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="css">
</style>
