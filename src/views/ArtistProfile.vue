<template>
  
    <div class="main-view"  >

    <span id="title">{{ ArtistProfile.name }}</span> <br />
    <span class ="description">{{ ArtistProfile.description }}</span> <br />
    <span class ="description">Total views: {{ArtistProfile.views}}</span> <br />
    <div class="button-Wrapper"> 
   
    <button class="fetch" @click ="callTracks(ArtistProfile.name)">Get random tracks</button>
   </div>
    </div>
</template>


<script>
export default {
  name: "ArtistProfile",
  props: ["object"],
  data() {
    return { 
      browseId : null,
      };
  },
    computed: {
    ArtistProfile() {
      return this.$store.getters.getArtistProfile;
    },
  },
  
  mounted() {
   
  },
  methods:{
    callTracks(name){
      console.log("button clicked");
      this.$store.commit("setSearchInput", name);
     this.$store.dispatch("callTracksBySearchInput");
      this.$router.push ({
      name: "Tracks",
      }) 
},
 
  }
};
</script>

<style scoped>
#title{
  font-weight: bold;
  font-size:40px;
  color:aliceblue;
}
.description{
  color:aliceblue;
}
.button-Wrapper{
  margin-top:5px;
}
.fetch{
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
.fetch:hover{
  background-color: rgba(161, 210, 214, 0.973);
  color: #02212b;
  font-weight: bold;
}
</style>