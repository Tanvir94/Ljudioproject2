<template>
<div class="main-view">
  <div class="songs">
    <div class="input">
      
    
  <input id="Search" 
          v-on:keyup.enter="setSearchInputAndCallTracks(phrase)"
          type="text"
          placeholder="Search for tracks"
          v-model="phrase"  /> 
          <button id= "SearchButton" @click="setSearchInputAndCallTracks(phrase)">Search</button>
          </div>
          <Tracklist />
          </div>

          <div class = "audioplayer" >
          <AudioPlayer />
          </div>
  </div>
</template>

<script>
import Tracklist from '../components/Tracklist.vue'
import AudioPlayer from '../components/AudioPlayer.vue'

export default {
  name:"Tracks",
  data(){
    return {
    id : null,
  }
  },
  components:{
    Tracklist, AudioPlayer
  },
  mounted(){
    if(this.$route.params.id){
 this.id = this.$route.params.id;
 console.log("this.id =>>> ",this.id);
  this.$store.commit("setCurrentTrack", this.id);
 console.log("state.currrenttrack =>>>", this.$store.state.currentTrack);
  


}
  },

  computed: {},

  methods:{

    clickme(){
      console.log("hello");
    },

    setSearchInputAndCallTracks(phrase){
      this.$store.commit("setSearchInput", phrase);
      this.$store.dispatch("callTracksBySearchInput");

    },
    
  }
}
</script>

<style scoped>
.input{
  display:flex;
  margin: 0;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
}
.main-view{
  display: flex;

  position: fixed;
  padding-left:20px;
  padding-top: 20px;

  height: 90%;
  width: 87%;
  color: rgb(196, 196, 204);

}


.songs{
  height: 50%;
}
.audioplayer{
 position: fixed;
  left:0;
  bottom: 20px;
  width:100%; 
}
#Search{
   border: 1px solid rgb(255, 255, 255);
      border-radius: 5px;
      background-color: #96b8df;
      font-size: 16px;
      opacity:50%;
      padding: 0 10px;
      transition: 0.25s ease;
}

::placeholder {
  font-weight: bold;
  color: #96b8df;
}

#SearchButton{
   text-decoration: none;
      margin-left:5px;
      font-size: 100%;
      cursor: pointer;
      font-weight: bold;
      border: 1px solid #96b8df;
      border-radius: 10px;
      height: 35px;
      background-color: #000000;
      color: #96b8df;
      box-shadow: #000000;
}
#SearchButton:hover{
   background-color: #96b8df;
  color: #02212b;
  font-weight: bold;
}

</style>