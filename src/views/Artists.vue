<template>
<div class="main-view">
  <input id="Search" 
          v-on:keyup.enter="setSearchInputAndCallArtists(phrase)"
          type="text"
          placeholder="Search for artists"
          v-model="phrase"  /> 
          <button id= "SearchButton" @click="setSearchInputAndCallArtists(phrase)">Search</button>
          <ArtistIndex />
  </div>
</template>

<script>
import ArtistIndex from '../components/ArtistIndex.vue'

export default {
  name:"Artists",
    props: ["object"],

  data(){},
  components:{
    ArtistIndex
  },
  mounted(){},
  computed: { },
  methods:{

    setSearchInputAndCallArtists(phrase){
      this.$store.commit("setSearchInput", phrase);
      this.$store.dispatch("callArtistsBySearchInput");

    }
  }
}
</script>

<style >

.main-view{

  position:fixed;
  padding-left:20px;
  padding-top: 20px;

  height: 80%;
  width: 87%;
  color: rgb(196, 196, 204);

}
#Search{
      border: 1px solid rgb(20, 30, 34);
      border-radius: 5px;
      background-color: rgb(255, 255, 255);
      color: rgb(0, 0, 0);
      font-size: 16px;
      opacity:50%;
      box-shadow: 2px 2px 2px rgba(0,0,0,0.20), 4px 4px 4px rgba(0,0,0,0.10); 
      padding: 0 10px;
      transition: 0.25s ease;
}
#SearchButton{
      text-decoration: none;
      margin-left:5px;
      font-size: 100%;
      cursor: pointer;
      font-weight: bold;
      border: 1px solid rgb(255, 255, 255);
      border-radius: 10px;
      height: 35px;
      background-color: #02212b;
      color: rgba(161, 210, 214, 0.973);
      box-shadow: #000000;
}
#SearchButton:hover{
  background-color: rgba(161, 210, 214, 0.973);
  color: #02212b;
  font-weight: bold;
}

</style>