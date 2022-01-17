<template>
  <div id="app" v-bind:style="{backgroundImage:'url(' + url + ')'}">
    <Home/>
  </div>
</template>

<script>
import Home from "@/components/Home";

export default {
  name: 'App',
  components: {
    Home
  },
  data() {
    return {
      baseUrl: 'https://cn.bing.com',
      url: ''
    }
  },
  mounted() {
    this.getImageUrl()
  },
  methods: {
    getImageUrl() {
      this.$axios.get('/api/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN')
          .then(response => {
            // handle success
            if (response.status === 200) {
              this.url = this.baseUrl + response.data.images[0].url
              console.log(this.url);
            }
          })
          .catch(error => {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          });
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
</style>
