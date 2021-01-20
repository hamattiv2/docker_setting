<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-side-icon
        @click="actionToggleSideMenu()"
      ></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        マイアドレス帳
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <SideNav />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import SideNav from "./components/SideNav";

export default {
  name: "App",
  components: {
    SideNav,
  },
  data() {
    return {
      //
    };
  },
  methods: {
    // openSideMenu: function() {
    //   // this.$store.dispatchでvuexのactionにアクセスする
    //   this.$store.dispatch("actionToggleSideMenu")
    // },
    ...mapActions(["actionToggleSideMenu"]),
  },
};
</script>
