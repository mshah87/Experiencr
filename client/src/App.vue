<template>
  <div id="app">
    <Header />
    <Companies />
    <Footer />
  </div>
</template>

<script>
import Companies from './components/Companies.vue' 
import Header from './components/layout/Header' 
import Footer from './components/layout/Footer' 

export default {
  name: 'app',
  components: {
    Header,
    Companies,
    Footer
  }
}

</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body{
}
</style>
