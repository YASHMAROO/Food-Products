<template lang="html">
  <div class="container-fluid navbar-sec">
    <nav class="navbar fixed-top navbar-inverse navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">
        <span class="part1"><span class="highlighted">FOOD-</span>PROD<br></span>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-links" aria-controls="navbar-links" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" />
      </button>
      <div id="navbar-links" class="collapse navbar-collapse">
        <ul class="navbar-nav  ml-md-auto d-md-flex">
          <router-link v-if="isLoggedIn" tag="li" class="nav-item" data-toggle="collapse" data-target="#navbar-links" to="/profile">
            <a class="nav-link">Signed in as {{ userName }}</a>
          </router-link>
          <router-link v-if="isLoggedIn" tag="li" class="nav-item" data-toggle="collapse" data-target="#navbar-links" to="/">
            <a class="nav-link">Home</a>
          </router-link>
          <router-link v-if="isLoggedIn" tag="li" class="nav-item" data-toggle="collapse" data-target="#navbar-links" to="/fav">
            <a class="nav-link">Favourites</a>
          </router-link>
          <router-link v-if="!isLoggedIn" tag="li" class="nav-item" data-toggle="collapse" data-target="#navbar-links" to="/login">
            <a class="nav-link">Login</a>
          </router-link>
          <router-link v-if="!isLoggedIn" tag="li" class="nav-item" data-toggle="collapse" data-target="#navbar-links" to="/register">
            <a class="nav-link">Register</a>
          </router-link>
          <li v-if="isLoggedIn">
            <a class="nav-link" v-on:click="logout">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import db from "@/fb";
import firebase from "firebase";

export default {
  name: "NavBar",
  data() {
    return {
      isLoggedIn: false,
      currentUser: false,
      userName: ""
    };
  },
  created() {
    db.collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then(doc => {
        this.foodArr = doc.data().favFood;
        this.userName = doc.data().userName;
        if (firebase.auth().currentUser) {
          this.isLoggedIn = true;
          this.currentUser = firebase.auth().currentUser.user.email;
        }
      });
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.go({ path: this.$router.path });
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar-sec {
  padding: 0;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 9999;

  .navbar-brand {
    line-height: 1rem;
    padding: 10px 0px 10px 20px;

    .part1 {
      font-weight: 900;
      font-size: 2rem;
    }
    .part2 {
      font-size: 0.8rem;
      font-weight: 700;
      color: #9c9c9c;
      letter-spacing: 0.4rem;
    }

    .highlighted {
      color: red;
    }
  }

  #navbar-links .nav-link {
    color: #333;
    font-weight: 700;
    font-size: 1rem;
    text-transform: uppercase;
    padding: 10px 20px;
    cursor: pointer;

    &:hover {
      color: red;
    }
  }
}
</style>
