<template lang="html">
  <div class="commentList">
    <div v-for="comment in data" class="panel panel-info"> 
      <div class="panel-body">
        <p>{{comment.comment}}</p>
        <div class="row">
          <div class="col-md-4">
            User : {{comment.username}}
          </div>
          <div class="col-md-8"></div>
        </div>
      </div> 
      <div class="panel-footer">
       <div class="row">
         <div class="col-md-8"></div>
         <div class="col-md-4">
           Vote 
           <span><i @click='upVote()' class="fa fa-caret-up" aria-hidden="true"></i></span>
           <!-- {{thread.upvote.length - thread.downvote.length}} -->0
           <span><i @click='downVote()' class="fa fa-caret-down" aria-hidden="true"></i></span>
         </div>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style lang="css">
</style>
