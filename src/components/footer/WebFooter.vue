<template>
    <footer class="container-fluid py-5" style="background-color: #f5f5f5">
      <div class="container-md">
        <div class="row">
          <left-footer></left-footer>
          <div class="col-md-5 col-sm-1 col-12"></div>
          <right-footer></right-footer>
        </div>
      </div>
    </footer>
  </template>

  <script setup>
  import LeftFooter from './LeftFooter.vue';
  import RightFooter from './RightFooter.vue';
</script>