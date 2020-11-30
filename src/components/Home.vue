<template>
    <section class="container-fluid">
        <article>
            <header class="tabs">
                <ul>
                    <li>
                        <a class="nav-item" @click="Chinese" :class="{'is-active': chinActive}">Chinese</a>
                    </li>
                    <li>
                        <a class="nav-item" @click="Continental" :class="{'is-active': conActive}">Continental</a>
                    </li>
                    <li>
                        <a class="nav-item" @click="Indian" :class="{'is-active': indActive}">Indian</a>
                    </li>
                    <li>
                        <a class="nav-item" @click="Thai" :class="{'is-active': thaiActive}">Thai</a>
                    </li>
                </ul>
            </header>
        </article>

        <div class="container food-container mb-5" v-show="chinActive">
            <div class="card bg-light">
                <div class="row p-5 flex-wrap justify-content-center">
                    <div class="col-sm-10 col-md-6 col-lg- col-xl-4 mb-5" v-for="(fd,index) in foodChin" :key="index">
                        <div class="card">
                            <img
                                class="card-img-top p-3 card-image"
                                height="250px"
                                :src="fd.image"
                            >
                            <div class="card-body">
                                <h4 class="card-title text-center fd-name">{{ fd.name }}</h4>
                            </div>
                            <div class="card-footer text-muted">
                                <a href="#" v-show="fd.fav" v-on:click="addFav(fd,fd.id)" class="btn card-fav" :id="'book'+fd.id"><i class="far fa-bookmark"></i></a>
                                <a href="#" v-show="!fd.fav" v-on:click="removeFav(fd,fd.id)" class="btn card-fav" :id="'bookmarked'+fd.id"><i class="fas fa-bookmark"></i></a>
                                <a href="#" class="btn read-more" data-toggle="modal" :data-target="'#foodModal'+fd.id">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <button v-if="moreChin" @click="viewMoreChin('Chinese')" class="btn btn-primary">View More</button>
            </div>
        </div>

            <div class="container food-container mb-5" v-show="conActive">
                <div class="card bg-light">
                    <div class="row p-5 flex-wrap justify-content-center">
                        <div class="col-sm-10 col-md-6 col-lg- col-xl-4 mb-5" v-for="(fd,index) in foodCon" :key="index">
                            <div class="card">
                                <img
                                    class="card-img-top p-3"
                                    height="250px"
                                    :src="fd.image"
                                >
                                <div class="card-body">
                                    <h4 class="card-title text-center fd-name">{{ fd.name }}</h4>
                                </div>
                                <div class="card-footer text-muted">
                                    <a href="#" v-show="fd.fav" v-on:click="addFav(fd,fd.id)" class="btn card-fav" :id="'book'+fd.id"><i class="far fa-bookmark"></i></a>
                                    <a href="#" v-show="!fd.fav" v-on:click="removeFav(fd,fd.id)" class="btn card-fav" :id="'bookmarked'+fd.id"><i class="fas fa-bookmark"></i></a>
                                    <a href="#" class="btn read-more" data-toggle="modal" :data-target="'#foodModal'+fd.id">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button v-if="moreCon" @click="viewMoreCont('Continental')" class="btn btn-primary">View More</button>
                </div>
            </div>

            <div class="container food-container mb-5" v-show="indActive">
                <div class="card bg-light">
                    <div class="row p-5 flex-wrap justify-content-center">
                        <div class="col-sm-10 col-md-6 col-lg- col-xl-4 mb-5" v-for="(fd,index) in foodInd" :key="index">
                            <div class="card">
                                <img
                                    class="card-img-top p-3"
                                    height="250px"
                                    :src="fd.image"
                                >
                                <div class="card-body">
                                    <h4 class="card-title text-center fd-name">{{ fd.name }}</h4>
                                </div>
                                <div class="card-footer text-muted">
                                    <a href="#" v-show="fd.fav" v-on:click="addFav(fd,fd.id)" class="btn card-fav" :id="'book'+fd.id"><i class="far fa-bookmark"></i></a>
                                    <a href="#" v-show="!fd.fav" v-on:click="removeFav(fd,fd.id)" class="btn card-fav" :id="'bookmarked'+fd.id"><i class="fas fa-bookmark"></i></a>
                                    <a href="#" class="btn read-more" data-toggle="modal" :data-target="'#foodModal'+fd.id">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button v-if="moreInd" @click="viewMoreInd('Indian')" class="btn btn-primary">View More</button>
                </div>
            </div>   

            <div class="container food-container mb-5" v-show="thaiActive">
                <div class="card bg-light">
                    <div class="row p-5 flex-wrap justify-content-center">
                        <div class="col-sm-10 col-md-6 col-lg- col-xl-4 mb-5" v-for="(fd,index) in foodThai" :key="index">
                            <div class="card">
                                <img
                                    class="card-img-top p-3"
                                    height="250px"
                                    :src="fd.image"
                                >
                                <div class="card-body">
                                    <h4 class="card-title text-center fd-name">{{ fd.name }}</h4>
                                </div>
                                <div class="card-footer text-muted">
                                    <a href="#" v-show="fd.fav" v-on:click="addFav(fd,fd.id)" class="btn card-fav" tooltip="Add to fav" :id="'book'+fd.id"><i class="far fa-bookmark"></i></a>
                                    <a href="#" v-show="!fd.fav" v-on:click="removeFav(fd,fd.id)" class="btn card-fav" :id="'bookmarked'+fd.id"><i class="fas fa-bookmark"></i></a>
                                    <a href="#" class="btn read-more" data-toggle="modal" :data-target="'#foodModal'+fd.id">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button v-if="moreThai" @click="viewMoreThai('Thai')" class="btn btn-primary">View More</button>
                </div>
            </div>    

        <div
        v-for="(food, index) in foods"
        :key="index"
        class="food-modal"
        >
            <div :id="'foodModal'+food.id" ref="vueModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close closeModal" data-dismiss="modal" aria-hidden="true">X</button>
                        </div>
                        <div class="modal-body">
                            <div :id="'foodCarousel'+food.id" class="carousel slide" data-ride="carousel" data-interval="1000">

                                <!-- Carousel items -->
                                <div class="carousel-inner">
                                    <div
                                        v-for="(item, index) in food.imgCar"
                                        :key="index"
                                        :class="[index == 0 ? 'active' : '', 'carousel-item']"
                                    >  
                                        <img :src="item" class="responsive">
                                    </div>              
                                </div>

                                <a class="carousel-control-prev" :href="'#foodCarousel'+food.id" data-slide="prev">
                                    <span class="carousel-control-prev-icon"></span>                               
                                </a>                              
                                <a class="carousel-control-next" :href="'#foodCarousel'+food.id" data-slide="next">
                                    <span class="carousel-control-next-icon"></span>
                                </a>
                            </div>
                            
                            <h3 class="price"><i class="fas fa-rupee-sign"></i> {{ food.price }} </h3>

                            <h3 class="text-center pt-2 food-name">
                                {{ food.name }}
                            </h3>
                            <div class="pt-3 food-description intro"><span style="color:green;">Intro : </span>{{ food.description }}</div>
                            <div class="food-description ing"><span style="color:red;">Ingred : </span> {{ food.ingredients }} </div>
                            <div class="food-description"><span style="color: blue" class="review-head">Reviews:</span></div>
                            <div v-for="(review,index) in food.reviews" :key="index" class="food-description review">{{ index+1 }} : {{ review }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import db from '@/fb';
import firebase from 'firebase'

export default {
    data() {
        return {
            foods: [],
            foodChin: [],
            foodCon: [],
            foodInd: [],
            foodThai: [],
            foodArr: [],
            i: 1,
            j:1,
            l:1,
            k:1,
            moreChin: false,
            moreCon: false,
            moreInd: false,
            moreThai: false,
            chinActive: true,
            indActive: false,
            conActive: false,
            thaiActive: false,
            fav: true
        }
    },
    created() {
        this.chinActive = true
        this.indActive = this.conActive = this.thaiActive = false
        let i=0;

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

        db.collection('foods').onSnapshot(res => {
            let changes = res.docChanges();
            changes.forEach(change => {
                if(change.type === 'added') {
                    this.foods.push({
                        ...change.doc.data(),
                        id:change.doc.id
                    })
                    db.collection('users').doc(firebase.auth().currentUser.uid).get().then(doc => {
                        doc.data().favFood.forEach(food => {
                            if(food.id === change.doc.id) {
                                db.collection('foods').doc(food.id).update({
                                    fav:false
                                })
                                return ;
                            } 
                        })
                        db.collection('foods').where("title","==","Chinese").get().then(querySnapshot => {
                            querySnapshot.forEach(doc => {
                                if(i==3) {
                                    this.moreChin = true;
                                    return;
                                } else {
                                    this.foodChin.push({
                                        ...doc.data(),
                                        id:doc.id
                                    })
                                    i=i+1;
                                }
                            })
                        })
                    })
                }
            })
        })
    },
    methods: {
        addFav(food,id) {
            var id1 = "book" + id;
            var id2 = "bookmarked" + id;
            document.getElementById(id1).style.display = "none"
            document.getElementById(id2).style.display = "inline-block"
            alert(`${food.name} added to favourites`)
            let fav = {
                food: food,
                id: id
            }

            db.collection('users').doc(firebase.auth().currentUser.uid).get().then(doc => {
                this.foodArr = doc.data().favFood;
                this.foodArr.push(fav);
                db.collection('users').doc(firebase.auth().currentUser.uid).update({                
                    favFood: this.foodArr
                });
                db.collection('foods').doc(id).update({
                    fav: false
                })
            });       
        },
        removeFav(food,id) {
            let ind;
            var id1 = "book" + id;
            var id2 = "bookmarked" + id;
            document.getElementById(id1).style.display = "inline-block"
            document.getElementById(id2).style.display = "none"
            db.collection('users').doc(firebase.auth().currentUser.uid).get().then(doc => {
                this.foodArr = doc.data().favFood;
                for(let i=0; i < this.foodArr.length; i++) {
                    if(id === this.foodArr[i].id) {
                        ind=i;
                        break;
                    }
                }
                this.foodArr.splice(ind, 1)
                db.collection('users').doc(firebase.auth().currentUser.uid).update({                
                    favFood: this.foodArr
                });
                db.collection('foods').doc(id).update({
                    fav: true
                })
                alert(`${food.name} removed from the favourites`) 
            });
        },
        viewMoreChin(name) {
            this.j = this.k = this.l = 1
            var j=0;
            this.i+=1;
            var temp=this.i
            db.collection('foods').where("title","==",name).get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    if(j==3*this.i) {
                        this.moreChin = true
                        return;
                    } else if(j>=3*(temp-1) && j<3*temp){
                        this.moreChin = false
                        this.foodChin.push({
                        ...doc.data(),
                        id:doc.id
                    })
                    }
                    j=j+1;
                })
            })
        },
        viewMoreCont(name) {
            this.i = this.k = this.l =1
            var j=0;
            this.j+=1;
            var temp=this.j
            db.collection('foods').where("title","==",name).get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    if(j==3*this.j) {
                        this.moreCon = true
                        return;
                    } else if(j>=3*(temp-1) && j<3*temp){
                        this.moreCon = false
                        this.foodCon.push({
                        ...doc.data(),
                        id:doc.id
                    })
                    }
                    j=j+1;
                })
            })
        },
        viewMoreInd(name) {
            this.i = this.j = this.l = 1
            var j=0;
            this.k+=1;
            var temp=this.k
            db.collection('foods').where("title","==",name).get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    if(j==3*this.k) {
                        this.moreInd = true
                        return;
                    } else if(j>=3*(temp-1) && j<3*temp){
                        this.moreInd = false
                        this.foodInd.push({
                        ...doc.data(),
                        id:doc.id
                    })
                    }
                    j=j+1;
                })
            })
        },
        viewMoreThai(name) {
            this.j = this.i = this.k = 1
            var j=0;
            this.l+=1;
            var temp=this.l
            db.collection('foods').where("title","==",name).get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    if(j==3*this.l) {
                        this.moreThai = true
                        return;
                    } else if(j>=3*(temp-1) && j<3*temp){
                        this.moreThai = false
                        this.foodThai.push({
                        ...doc.data(),
                        id:doc.id
                    })
                    }
                    j=j+1;
                })
            })
        },
        Chinese() {
            this.j = this.k = this.l = 1
            this.chinActive = true
            this.indActive = this.conActive = this.thaiActive = this.moreChin = false
            this.foodChin.length = 0
            let i=0;
            db.collection('foods').where("title","==","Chinese").get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    if(i==3) {
                        this.moreChin = true;
                        return;
                    } else {
                        this.foodChin.push({
                            ...doc.data(),
                            id:doc.id
                        })
                        i=i+1;
                    }
                })
            })
        },
        Continental() {
            this.i = this.k = this.l =1
            this.conActive = true
            this.indActive = this.chinActive = this.thaiActive = this.moreCon = false
            this.foodCon.length = 0            
            let j=0;
            db.collection('foods').where("title","==","Continental").get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    if(j==3) {
                        this.moreCon = true
                        return;
                    } else {
                        this.foodCon.push({
                            ...doc.data(),
                            id:doc.id
                        })
                        j=j+1;
                    }
                })
            })
        },
        Indian() {
            this.i = this.j = this.l = 1
            this.indActive = true
            this.conActive = this.chinActive = this.thaiActive = this.moreInd = false
            this.foodInd.length = 0
            let k=0;
            db.collection('foods').where("title","==","Indian").get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    if(k==3) {
                        this.moreInd = true
                        return;
                    } else {
                        this.foodInd.push({
                            ...doc.data(),
                            id:doc.id
                        })
                        k=k+1;
                    }
                })
            })
        },
        Thai() {
            this.j = this.i = this.k = 1
            this.thaiActive = true
            this.conActive = this.chinActive = this.indActive = this.moreThai = false
            this.foodThai.length = 0
            let l=0;
            db.collection('foods').where("title","==","Thai").get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    if(l==3) {
                        this.moreThai = true
                        return;
                    } else {
                        this.foodThai.push({
                            ...doc.data(),
                            id:doc.id
                        })
                        l=l+1;
                    }
                })
            })
        },
        favAdded(id) {
            db.collection('users').doc(firebase.auth().currentUser.uid).get().then(doc => {
                doc.data().favFood.forEach(food => {
                    if(food.id === id)
                    return true
                })
            })
        }

    }
    
}
</script>

<style lang="scss" scoped>
.tabs {
  border-bottom: thick double black;
  margin: 0 10px;
}

.tab-details {
  padding: 10px;
}

ul {
  display: flex;
  padding: 0;
  list-style: none;
  text-align: center;

  li {
    margin-right: 40px;
    font-size: 25px;
    font-family: 'Syne Mono', monospace;
  }

  .nav-item {
    cursor: pointer;

    &:hover {
      color: red;
    }

    &.is-active {
      color: blue;
    }
  }
}

@media only screen and (max-width: 576px) {
    ul {
        li {
          margin-right: 20px;
          font-size: 14px;
        }
    }
}

.food-container {
    margin-top: 10vh;
}

.fd-name {
    font-family: 'Goldman', cursive;
    font-size: 3vh;
}

.read-more {
    float: right;
    outline: none;
    border: none;
    font-size: 2.2vh;
}

.read-more1 {
    font-size: 2.2vh;
    outline: none;
    border: 0 !important;
}

.read-more1:focus,.read-more:focus {
    box-shadow: none !important;
}

.read-more:hover {
    font-size: 25px;
    color: coral;
    transition: ease 0.3s;
}

.read-more1:hover {
    font-size: 25px;
    color: coral;
    transition: ease 0.3s;
}

.fa-bookmark {
    font-size: 3vh;
    outline: none;
    border: 0 !important;
}

.fa-bookmark:hover {
    font-size: 3.5vh;
    color:chartreuse;
    transition: ease 0.3s;
}

.card-fav:focus {
    box-shadow: none !important;
}

.modal {
    z-index: 20000;
    height: 100vh !important;
}

.price {
    float: right;
    font-family: 'Syne Mono', monospace;
    color: red;
}

.food-name {
    font-family: 'Dancing Script', cursive;
    font-weight: 900;
    font-size: 4vh;
    text-decoration: underline;
}

.food-description {
    text-align: center;
    font-size: 2vh;
    font-family: 'Syne Mono', monospace;
    color: royalblue;
}

.responsive {
  padding: 25px !important;
  width:100%;
  height: 40vh;
  object-fit: cover;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: center;
}

.modal-fav:focus {
    box-shadow: none !important;
}

.intro {
    border-bottom: 2px solid black;
}

.ing {
    border-bottom: 2px solid black;
}

.review-head {
    font-size: 2.5vh;
    text-decoration: underline;
}

.review {
    font-size: 2.2vh;
    border-bottom: 2px dashed black;
}

@media only screen and (max-width: 776px) {
    .modal {
        padding-top: 0;
        height: 100vh;
    }
}

@media only screen and (max-width: 576px) {
    .card-image {
        height: 200px !important;
    }
    .price {
        font-size: 3vh;
    }
    .modal {
        height: 99vh !important;
        padding-top: 2%;
    }

    .modal-body {
        height: 87vh;
        overflow-y: auto;
    }
}
</style>