<template lang="html">
  <div class="detail">
    <div class="panel panel-primary"> 
      <div class="panel-heading"> 
        <h3 class="panel-title">{{title}}</h3> 
      </div> 
      <div class="panel-body">
        <p>{{content}}</p>
        <div class="row">
          <div class="col-md-4">
            Author : {{username}}
          </div>
          <div class="col-md-8"></div>
        </div>
      </div> 
      <div class="panel-footer">
       <div class="row">
         <div class="col-md-4">
          <comment :threadid="id" @create-new-comment="getCommentList()"></comment>
         </div>
       </div>
      </div>
    </div>
    <commentlist :data="dataComment"></commentlist>
  </div>
</template>

<script>
import comment from '@/components/CommentThread'
import commentlist from '@/components/CommentList'
export default {
  data () {
    return {
      title: '',
      content: '',
      username: '',
      created_at: '',
      dataComment: []
    }
  },
  components: {
    comment,
    commentlist
  },
  props: ['id'],
  methods: {
    getOneThread () {
      this.$http.get(`http://localhost:3000/thread/${this.id}`)
      .then(res => {
        this.title = res.data.title
        this.content = res.data.content
        this.username = res.data.username
        this.created_at = res.data.created_at
      })
      .catch(err => {
        console.log(err)
      })
    },
    getCommentList () {
      this.$http.get(`http://localhost:3000/comment`)
      .then(res => {
        console.log(res.data)
        this.dataComment = res.data
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  created () {
    this.getOneThread()
    this.getCommentList()
  }
}
</script>

<style lang="css">
</style>
