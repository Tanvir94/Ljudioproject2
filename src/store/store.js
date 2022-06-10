import { createStore } from "vuex";
import axios from 'axios';


export default createStore({
  state: {
    searchInput:'',
    callTracks:[],
    callArtists:[],
    browseId: '',
    artistProfile:[],
    currentTrack:'',
    tuneShift: true,
    

  },

  mutations: {
    setSearchInput(state, payload){
      state.searchInput = payload;
    },
    setTracksBySearchInput(state, payload){
      state.callTracks = payload;
    },
    
    setArtistsBySearchInput(state, payload){
      state.callArtists = payload;
    },
    
    setBrowseId(state, payload){
      state.browseId = payload;
    },
    setArtistProfile(state, payload){
      state.artistProfile = payload;
    },
    setCurrentTrack(state, payload){
      state.currentTrack = payload;
    },
    settuneShift(state,payload){
      state.tuneShift = payload;
     },
     



  },
  getters: {
    getcallTracks(state){
      return state.callTracks;
    },
    getcallArtists(state){
      return state.callArtists;
    },
    
    getArtistProfile(state){
      return state.artistProfile;
    },
    getCurrentTrack(state){
      return state.currentTrack
   },
   
            

  },


  actions: {
    async callTracksBySearchInput() {
      await axios.get("http://localhost:4000/api/yt/songs/"
       + this.state.searchInput)
        .then(response => {
          this.commit("setTracksBySearchInput", response.data.content)
          console.log(response.data.content);
        })
    },

   

    async callArtistsBySearchInput() {
      await axios.get("http://localhost:4000/api/yt/artists/"
       + this.state.searchInput)
        .then(response => {
          this.commit("setArtistsBySearchInput", response.data.content)
          console.log(response.data.content);
        })
    },

   

    async callArtistProfile() {
      await axios.get("http://localhost:4000/api/yt/artist/" 
      + this.state.browseId)
        .then(response => {
          this.commit("setArtistProfile", response.data)
          console.log(response.data);
        })
    },
  },
  
});
