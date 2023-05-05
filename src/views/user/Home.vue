<template>
  <Navbar />
  <div class="container my-3">
    <div class="d-flex justify-content-center"><Iklan /></div>
    <div class="row">
      <div
        class="col-lg-3 my-1"
        v-for="(data, index) in Produk"
        v-bind="index"
        :key="data.id"
      >
        <div class="card rounded shadow-sm">
          <div class="card-body">
            <img
              src="../../assets/logo.png"
              class="rounded mx-auto d-block"
              alt="..."
            />
            <hr />
            <h5
              class="card-title text-center text-uppercase text-body font-weight-bold"
            >
              {{ data.barang }}
            </h5>
            <hr />
            <p class="card-text">Rp. {{ data.harga }},-</p>

            <router-link
              v-bind:to="{
                name: 'detail',
                params: { barang_id: data.barang_id },
              }"
              class="btn btn-outline-info"
              >Detail <i class="fa fa-eye"></i
            ></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../../config/Firebase";
import Navbar from "../../components/Navbar.vue";
import Iklan from "../../components/Iklan.vue";

export default {
  components: {
    Navbar,
    Iklan,
  },
  data() {
    return {
      Produk: [],
      loading: true,
      Pesan: {},
    };
  },
  created() {
    firebase
      .collection("produk")
      .get()
      .then((snapshot) => {
        this.loading = true;
        snapshot.forEach((doc) => {
          console.log(doc.id);
          const data = {
            id: doc.id,
            barang_id: doc.data().barang_id,
            barang: doc.data().barang,
            harga: doc.data().harga,
          };
          this.Produk.push(data);
        });
      });
  },
};
</script>

<style>
</style>