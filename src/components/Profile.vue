<template>
  <section id="profile mb-5" class="flex-wrap justify-content-center">
    <div class="container bg-light profile-container">
        <img :src="imageUrl" class="center pt-5">
        <br>
        <h3 class="text-uppercase user-name text-center"><i class="fa fa-user" aria-hidden="true"></i> {{ username }}</h3>
        <br>
        <h3 class="text-center user-mail"><i class="fa fa-envelope" aria-hidden="true"></i>  {{ email }}</h3>
        <br>
        <h4 class="text-center" id="favNo"></h4>
        <br>
        <h4 class="text-center pb-5">
            <a href="/fav" class="fav">Go to Fav Page</a>
        </h4>    
    </div>
    
    </section>
</template>

<script>
import firebase from "firebase";
import db from "@/fb";

export default {
  data() {
    return {
      imageUrl: "",
      username: "",
      email: "",
      favFoodsNo: Number
    };
  },
  created() {
    db.collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then(doc => {
        this.username = doc.data().userName;
        this.favFoodsNo = doc.data().favFood.length
        if(this.favFoodsNo !=0) {
            document.getElementById('favNo').innerHTML = "No. of Fav Dishes: " +  this.favFoodsNo
        } else {
            document.getElementById('favNo').innerHTML = "No fav dishes added "
        }
      });

    this.email = firebase.auth().currentUser.email;

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        firebase
          .storage()
          .ref("users/" + user.uid + "/profile.jpg")
          .getDownloadURL()
          .then(imgUrl => {
            this.imageUrl = imgUrl
          });
      }
    });
  }
};
</script>

<style scoped>
#footer {
    display: none;
}

.profile-container {
    margin-top: 15vh !important; 
    border: thick double #321ace;
    margin-bottom: 15vh;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 35%;
}

a:hover {
    text-decoration: none;
    color: orange;
}

.user-name {
    color: green;
}

.user-mail {
    color: rebeccapurple;
}

</style>
