<template>
  <div id="app">
    <div class="container-fluid">
      <Header/>
      <Banner/>
    </div>
    <div class="container">
        <div class="row">
          <div class="contents-section">
            <div class="col-md-12">
              <Catagories />
              <Gallery />
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Banner from './components/Banner.vue'
import Catagories from './components/catagory/Catagories.vue'
import Gallery from './components/gallery/Gallery.vue'
export default {
  name: 'App',
  components: {
    Header,Banner,Catagories,Gallery
  }
}
</script>

<style>
</style>
