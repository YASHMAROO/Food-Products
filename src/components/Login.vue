<template>
    <div class="container mb-5">
        <div class="card bg-light">
            <form class="login-form">
                <h3 class="text-center">Sign In</h3>

                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control form-control-lg" id="email" v-model="email"/>
                </div>

                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control form-control-lg" id="password" v-model="password"/>
                </div>

                <button v-on:click="login" type="submit" class="btn btn-dark btn-lg btn-block mt-5">Sign In</button>
            </form>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'login',
    data: function() {
        return {
            email: '',
            password: ''
        };
    },
    methods : {
        login : function(e) {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(user => {
                alert(`You are logged in as ${user.user.email}`);
                console.log(user);
                this.$router.go({path: this.$router.path});
            },err => {
                alert(err.message);
            });
            e.preventDefault(); 
        }
    }
}
</script>

<style scoped>
.login-form {
    padding: 50px;
}
</style>