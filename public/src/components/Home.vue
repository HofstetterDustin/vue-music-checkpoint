<template>
  <div class="home container-fluid">
    <div class="row topRow">
      <form class="col-sm-12" @submit.prevent='musicSearch'>
        <input type="text" v-model="title" placeholder="Music Title">
        <button type="submit">search MusicDB</button>
      </form>
    </div>
    <div class="row">
      <div class="col-sm-6" id="itunes">Hack-Tunes</div>
      <div class="col-sm-6" id="my-tunes">My-Hack-Tunes</div>
    </div>
  </div>
</template>

<script>
import Itunes from './Itunes.vue'
import MyTunes from './MyTunes.vue'
export default {
  name: 'home',
  data () {
    return {
      title: ''
    }
  },
  methods: {
    musicSearch(){
      this.$store.dispatch('getMusic', this.title)
    }
  },
  components: {
    Itunes,
    MyTunes
  }
}
</script>


<style>
.topRow{
  background: rgb(3, 3, 3);
  min-height: 55px;
  padding-top: 10px;
  padding-left: 10px
}  
#my-tunes{
  display: inline-block;
  min-height: 500px;
  min-width: 50%;
  background: yellow;
}

#itunes{
  display: inline-block;
  background: rgb(31, 30, 30);
  min-height: 500px;
  min-width: 45%;
  color: white;
}

</style>
