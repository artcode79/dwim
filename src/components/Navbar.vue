<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark navcustom">
    <div class="container">
      <a class="navbar-brand" href="#">Dwims</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item"></li>
          <router-link class="nav-link" :to="{ name: 'home' }"
            >Home</router-link
          >
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'keranjang' }"
              ><i class="fas fa-shopping-cart"></i
              ><span class="badge badge-light">9</span></router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
.navcustom {
  text-transform: capitalize;
  font-size: 18px;
  color: aqua;
}
</style>
