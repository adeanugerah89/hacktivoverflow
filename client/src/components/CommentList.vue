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
         <div class="col-md-4">
          <!-- <comment :threadid="id"></comment> -->
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
