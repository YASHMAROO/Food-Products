<template>
    <div class="container mb-5">
        <div class="card">
            <form class="login-form">
                <h3 class="text-center">Register</h3>

                <div class="form-group">
                    <label for="username">User Name</label>
                    <input type="text" class="form-control form-control-lg" id="username" v-model="userName"/>
                </div>

                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control form-control-lg" id="email" v-model="email"/>
                </div>

                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control form-control-lg" id="password" v-model="password"/>
                </div>

                <div class="form-group">
                    <label for="image">Choose Image File</label>
                    <input type="file" class="form-control form-control-lg" id="image" accept="image/*" @change="onFilePicked"/>
                </div>
                <button v-on:click="register" type="submit" class="btn btn-success btn-lg btn-block mt-5">
                    <div v-if="loading" class="spinner-border"></div>
                    <span v-if="!loading">Regsiter</span>
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import db from '@/fb'

export default {
    data: function() {
        return {
            email: '',
            password: '',
            userName: '',
            imgUrl: '',
            image: null,
            loading: false
        };
    },
    methods : {
        register : function(e) {
            this.loading = true
            let imageUrl1;
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(user => {
                this.loading = false
                alert(`Account created for ${user.user.email}`);
                firebase.storage().ref('users/' + user.user.uid + '/profile.jpg').put(this.image).then(() => {
                    console.log('successfully uploaded');
                }) 
                db.collection('users').doc(user.user.uid).set({
                    favFood: [],
                    userName: this.userName,
                }).then(() => {
                    let filename = this.image.name;
                    let ext = filename.slice(filename.lastIndexOf('.'))
                    firebase.storage().ref('user/' + user.user.uid + '.' + ext).put(this.image).then(fileData => {
                        imageUrl1 = fileData.metaData.downloadURLs[0]
                        db.collection('users').doc(user.user.uid).set({
                            imageUrl: imageUrl1
                        }).then(() => {
                            alert('Update')
                        })
                    })
                    this.$router.go({path: this.$router.path});
                })
            },err => {
                alert(err.message);
            });
            e.preventDefault(); 
        },
        onFilePicked(event) {
            let files = event.target.files;
            let filename = files[0].name;
            if(filename.lastIndexOf('.') <= 0) {
                return alert('Please add a valid file!')
            }
            let fileReader = new FileReader()
            fileReader.addEventListener('load',() => {
                this.imgUrl = fileReader.result
            })
            fileReader.readAsDataURL(files[0])
            this.image = files[0]
        }
    }
}
</script>

<style scoped>
#footer {
    display: none;
}

.card {
    background-color: aquamarine;
}

.login-form {
    padding: 50px;
}
</style>
