import { createRouter, createWebHashHistory } from "vue-router";







const routes = [
  {
    path: "/tracks",
    name: "Tracks",
    component: () =>
    import ("../views/Tracks")
  },
  {
    path: "/tracks/:id?",
    name: "Tracks",
    component:  () =>
    import ("../views/Tracks")
  },
  {
    path: "/artists",
    name: "Artists",
    component: () =>
    import ("../views/Artists")
  },
  {
    path: "/artistProfile",
    name: "ArtistProfile",
    component: () =>
    import ("../views/ArtistProfile")
  },
  {
    path: "/artistProfile/:id?",
    name: "ArtistProfile",
    component: () =>
    import ("../views/ArtistProfile")
  },
  
  

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
