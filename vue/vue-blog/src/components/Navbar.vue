<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">Navbar</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
           <router-link to="/list" class="nav-link">List</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>