<template>
  <div class="AudioPlayer">
    <div class="buttons">
      <button class="audioplayerbutton" @click="PreviousTrack()"> previous
      </button>
      <button class="audioplayerbutton" @click="play()">Play </button>
<button class="audioplayerbutton" @click="pause()"> Pause</button>


      <button class="audioplayerbutton" @click="nextTrack()"> next

      </button>
    </div>

  </div>
</template>

<script>
export default {
  name: "AudioPlayer",
  props: ["object"],
  data() {
    return {
      id: null,
    };
  },
  computed: {},

  methods: {

    

    play(){
            this.id = this.$store.state.currentTrack;
              window.player.loadVideoById(this.id);
              console.log(this.id , "is playing")


    },
    pause(){
            this.id = this.$store.state.currentTrack;
              window.player.pauseVideo(this.id);
              console.log (this.id , "is paused")

    },

    PreviousTrack() {
      let playlist = this.$store.state.callTracks;
      let index = playlist.findIndex(
        (object) => object === this.$store.state.currentTrack
      );
      let previousTrack = playlist[index - 1];
      window.player.loadVideoById(previousTrack);
      window.player.playVideo(previousTrack);
      this.$store.commit("setCurrentTrack", previousTrack);
    },

    nextTrack() {
      let playlist = this.$store.state.callTracks;
      let index = playlist.findIndex(
        (object) => object == this.$store.state.currentTrack
      );
      let nextTrack = playlist[index + 1];
      window.player.loadVideoById(nextTrack);
      window.player.playVideo(nextTrack);
      this.$store.commit("setCurrentTrack", nextTrack);
    },
  },
};
</script>


<style>
.audioplayerbutton {
 margin: 2px;
  font-size: 15px;
  height: 30px;
  width: 100px;
  cursor: pointer;
  outline: none;
  color: #4575be;
  background-color: #02212b;
  border: none;
  border-radius: 100px;
  box-shadow: 1px 10px 20px black, 1px 3px 10px #96b8df;
}.audioplayerbutton:active {
  background-color: #0c811c;
  color: #02212b;
  font-weight: bold;
  transform: translateY(5px);

}


  


.AudioPlayer {
  height: 10vh;
  width: 100%;
  position: relative;
  border-radius: 10px;
  align-items: center;
}
.buttons{
  display:flex;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}



</style>
