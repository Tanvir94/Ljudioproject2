<template>
  <div class="list">
    <div v-for="object in callSearchedTracks" 
    :key="object.videoId">

      <div class="items" @click ="passParams(object.videoId),setCurrentTrack(object.videoId), 
      play(object.videoId)">
      
      <img class="image" v-bind:src="object.thumbnails[0].url" alt="" />  
      <div class ="Data">
      <span>  title: {{ object.name }}</span> <br>
      <span> By: {{ object.artist.name }}</span> <br> 
      <span> Album title: {{ object.album.name }}</span> <br> 
      </div>


         </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "Tracklist",
  props: ["object"],
  data(){
 return{
    videoId : null,
 };
},

  computed: {
    callSearchedTracks() {
      return this.$store.getters.getcallTracks;
    },
  },

  methods: {
   play(videoId) {
      window.player.loadVideoById(videoId);
    },

    passParams(videoId){
      this.$router.push ({
      name: "Tracks",
      params: { id:videoId}}) 
    },

     setCurrentTrack(videoId){
      this.$store.commit("setCurrentTrack", videoId);
      console.log("store.state.currentTrack",this.$store.state.currentTrack)
    }
   
  },
};
</script>

<style>

.list {
   overflow-y: scroll;
  display: grid;
  grid-template-columns: auto auto auto;
  height: 60%;
  bottom:15%;
  position:fixed;
  width: 85%;
  border-bottom: 2px solid #96b8df;
}
.list::-webkit-scrollbar {
    display: none;
}

.items {
   display:flex;
  background-color:#152238;
  height:120px;
  cursor: pointer;
  color: #96b8df;
  border-radius: 10px;
  box-shadow: 5px 5px 5px #96b8df;
  border-left: 20px solid #4575be;
  padding: 5px;
  margin:5px;
  
}

.Data{
  display: flex;
  flex-direction: column;
  font-weight: bold;
}
</style>
