<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-side-icon v-if="$store.state.login_user"
        @click="actionToggleSideMenu()"
      ></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        マイアドレス帳
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="$store.state.login_user">
        <v-btn @click="logout">ログアウト</v-btn>
      </v-toolbar-items>
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
import firebase from "firebase"

export default {
  name: "App",

  components: {
    SideNav,
  },
  created () {
    // var u = firebase.auth().currentUser;
    // console.log(u)
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setLoginUser(user)
        this.fetchAddresses()
        if(this.$router.currentRoute.name === "home") this.$router.push({'name': "addresses"})
      } else {
        this.deleteLoginUser()
        this.$router.push({'name': "home"})
      }
    })
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
    ...mapActions(["actionToggleSideMenu", "setLoginUser", "logout", "deleteLoginUser", "fetchAddresses"]),
  },
};
</script>
