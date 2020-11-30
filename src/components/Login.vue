<template>
    <div class="container login-cont">
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

                <button v-on:click="login" type="submit" class="btn btn-primary btn-lg btn-block mt-5">
                    <div v-if="loading" class="spinner-border"></div>
                    <span v-if="!loading">Sign In</span>
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import db from '@/fb'

export default {
    name: 'login',
    data: function() {
        return {
            email: '',
            password: '',
            loading:false
        };
    },
    created() {
        db.collection('foods').onSnapshot(res => {
            let changes = res.docChanges();
            changes.forEach(change => {
                if(change.type === 'added') {
                    db.collection('foods').doc(change.doc.id).update({
                        fav: true
                    })
                }
            })
        })
    },
    methods : {
        login : function(e) {
            this.loading = true
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(user => {
                this.loading = false
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
#footer {
    display: none;
}

.login-form {
    padding: 50px;
}

.login-cont {
    margin-top: 15%;
    margin-bottom: 15%;
}

@media only screen and (max-width: 1200px) and (min-width: 992px) {
    .login-cont {
        margin-top: 17%;
        margin-bottom: 17%;
    }
}

@media only screen and (max-width: 576px) {
    .login-cont {
        margin-top: 25%;
        margin-bottom: 20%;
    }
}
</style>