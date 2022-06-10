
<template>
    <div id = "SearchPage">
        <input id="Search" 
          v-on:keyup.enter="setSearchInputAndCallTracks(phrase)"
          type="text"
          placeholder="Search...."
          v-model="phrase"  /> 
          <button id= "SearchButton" @click="setSearchInputAndCallTracks(phrase)">Search</button>
           <div id="flex-container">
        <div id="TrackList"><Tracklist /></div> 
        <div id= "AudioPlayer">   <Audioplayer/> </div>
   </div>
 </div>
</template>

<script>
import Tracklist from '../components/Tracklist.vue';
import Audioplayer from '../components/AudioPlayer.vue';


export default{
name : "Search",
data(){
  return {
    id : null,
  }
},
components:{
  Tracklist, Audioplayer
},

mounted(){
 if(this.$route.params.id){
 this.id = this.$route.params.id;
 console.log("this.id =>>> ",this.id);
 this.$store.commit("setCurrentTrack", this.id);
 console.log("state.currrenttrack =>>>", this.$store.state.currentTrack);
}
},

methods: {
  
     setSearchInputAndCallTracks(phrase){   
      this.$store.commit("setTracksSearchInput", phrase);
      this.$store.dispatch("callTracksBySearchInput");

    }

}

}
</script>

<style >


</style>