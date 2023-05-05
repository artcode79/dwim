<template>
  <Navbar />
  <div class="container my-3">
    <div class="row">
      <div class="col-sm-8"></div>
      <div class="col-sm-4">col-sm-4</div>
    </div>
    <div class="row">
      <div class="col-sm">col-sm</div>
      <div class="col-sm">col-sm</div>
      <div class="col-sm">col-sm</div>
    </div>
  </div>
</template>

<script>
import Navbar from "../../components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      Produk: {},
      Pesan: {},
    };
  },
};
</script>

<style></style>
