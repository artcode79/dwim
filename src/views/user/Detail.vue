<template>
  <Navbar />
  <div class="container my-3">
    <div class="row">
      <div class="col">
        <div class="card rounded shadow-sm">
          <div class="card-body">
            <img
              src="../../assets/images/3s.png"
              class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
              alt="....."
            />
            <div class="col">
              <img src="" alt="" />
            </div>
            <div class="col">
              <h2 class="text-uppercase text-body font-weight-bold">
                {{ barang }}
              </h2>
              <p>Rp.{{ harga }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h1>Deskripsi</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              neque repellendus incidunt? Maiores nisi dicta cupiditate
              repudiandae, atque, non molestiae inventore ad et velit illo
              possimus esse eveniet vitae beatae?
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container my-3">
      <button
        class="btn btn-primary"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        Mulai Pesan
      </button>
      <div class="collapse" id="collapseExample">
        <div class="card rounded" style="border: none">
          <div class="col my-lg-1">
            <form class="mt-1" v-on:submit.prevent>
              <div class="form-group">
                <label for="jumlah_pemesanan">Jumlah Pesan</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="Pesan.jumlah_pemesanan"
                />
              </div>
              <div class="form-group">
                <label for="keterangan">Keterangan</label>
                <textarea
                  v-model="Pesan.keterangan"
                  class="form-control"
                  placeholder="Keterangan spt : Pedes, Nasi Setengah .."
                ></textarea>
              </div>
              <button
                type="submit"
                class="btn btn-outline-success mx-1"
                @click="pemesanan"
              >
                Pesan <i class="fa fa-cart-plus"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <router-link :to="{ name: 'home' }" class="btn btn-facebook mt-3">
      back</router-link
    >
  </div>
</template>

<script>
import firebase from "../../config/Firebase";
import Navbar from "../../components/Navbar.vue";

export default {
  name: "Detail",
  components: {
    Navbar,
  },
  data() {
    return {
      barang_id: null,
      barang: null,
      harga: null,
      Pesan: {},
    };
  },
  beforeRouteEnter(to, from, next) {
    firebase
      .collection("produk")
      .where("barang_id", "==", to.params.barang_id)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          next((vm) => {
            vm.barang_id = doc.data().barang_id;
            vm.barang = doc.data().barang;
            vm.harga = doc.data().harga;
          });
        });
      });
  },
  methods: {
    setProduct(data) {
      this.Produk = data;
    },
    pemesanan() {
      if (this.Pesan.jumlah_pemesanan) {
        firebase
          .collection("keranjang")
          .add(this.Pesan)
          .then(() => {
            this.$router.push({ name: "keranjang" });
            alert("Sukses Masuk Keranjang");
          })
          .catch((err) => console.log(err));
      } else {
        alert("Jumlah Pesanan Harus diisi");
      }
    },
    mounted() {
      firebase
        .collection("produk")
        .where("barang_id", "==", to.params.barang_id)
        .get()
        .then((response) => this.setProduk(response.data))
        .catch((error) => console.log(error));
    },
  },
  fetchData() {
    firebase
      .collection("produk")
      .where("barang_id", "==", true)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  },
};
</script>

<style></style>
