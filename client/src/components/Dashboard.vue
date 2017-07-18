<template lang="html">
  <div>
    <navbar></navbar>
    <div class="container" style="margin-top:60px">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <h1>ini side bar</h1>
          </div>
          <div class="col-md-8">
            <router-view></router-view>
          </div>
          <div class="col-md-1"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/Navbar'
import Content from '@/components/Content'
export default {
  components: {
    navbar,
    Content
  }
}
</script>

<style lang="css">

</style>
