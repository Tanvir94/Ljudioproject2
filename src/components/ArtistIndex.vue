<template>
  <div class="list">
<div v-for="object in callSearchedArtists"
      :key="object.browseId">
   
      <div class="items"
        @click ="callArtistProfile(object.browseId)">
        <span>{{ object.name }}</span> <br>

      </div>
    </div>
</div>
</template>

<script>
export default {
  name:"ArtistIndex",
    props: ["object"],

  data(){},
  components:{},
  mounted(){},

  computed: {
    callSearchedArtists(){
      return this.$store.getters.getcallArtists;
    }
  },

  methods:{
    callArtistProfile(browseId){
      
      this.$router.push ({
      name: "ArtistProfile",
      params: { id:browseId}}) 
      this.$store.commit("setBrowseId", browseId)
      console.log( "state.browseId" , this.$store.state.browseId);
      this.$store.dispatch("callArtistProfile");

   
    }
  }
}
</script>

<style>

</style>