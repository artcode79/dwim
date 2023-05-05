<template>
  <form @submit.prevent="onFormSubmit">
    <div class="mb-3">
      <label class="form-label">ID Barang</label>
      <input
        type="text"
        class="form-control"
        v-model="produk.barang_id"
        placeholder="ID barang"
      />
    </div>
    <div class="mb-3">
      <label class="form-label">Nama Barang</label>
      <input
        type="text"
        class="form-control"
        v-model="produk.barang"
        placeholder="nama barang"
      />
    </div>
    <div class="mb-3">
      <label class="form-label">Harga</label>
      <input
        type="text"
        class="form-control"
        v-model="produk.harga"
        placeholder="Rp. xxx.xxx.xxx"
      />
    </div>
    <div class="form-group">
      <button class="btn btn-primary btn-block">Barang</button>
    </div>
  </form>
</template>

<script>
import firebase from "../config/Firebase";
export default {
  name: "AddBarang",
  data() {
    return {
      produk: {
        'barang_id':'',
        'barang':'',
        'harga':null
      },
    };
  },
  methods: {
    onFormSubmit(event) {
      event.preventDefault();
      firebase
        .collection("produk")
        .add(this.produk)
        .then(() => {
          alert("produk successfully created!");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>