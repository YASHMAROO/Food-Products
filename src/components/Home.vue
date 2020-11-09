<template>
    <section class="container-fluid">
        <Tabs>
            <div v-for="(food,index) in foodChin" :key="index">
                <Tab :name="food.name" selected="true">
                    <div class="container food-container mb-5">
                        <div class="card bg-light">
                            <div class="row p-5 flex-wrap justify-content-center">
                                <div class="col-sm-10 col-md-6 col-lg- col-xl-4 mb-5" v-for="(fd,index) in food.foodArr" :key="index">
                                    <div class="card">
                                        <img
                                            class="card-img-top p-3 card-image"
                                            height="250px"
                                            :src="fd.food.image"
                                        >
                                        <div class="card-body">
                                            <h4 class="card-title text-center fd-name">{{ fd.food.name }}</h4>
                                        </div>
                                        <div v-if="currentUser" class="card-footer text-muted">
                                            <a href="#" v-on:click="addFav(fd.food,fd.id)" class="btn card-fav" tooltip="Add to fav"><i class="far fa-bookmark"></i></a>
                                            <a href="#" class="btn read-more" data-toggle="modal" :data-target="'#foodModal'+fd.id">Read More</a>
                                        </div>
                                        <div v-if="!currentUser" class="card-footer text-muted text-center">
                                            <a href="#" class="btn read-more1" data-toggle="modal" :data-target="'#foodModal'+fd.id">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tab>
            </div>

            <div v-for="(food,index) in foodsCat" :key="index">
                <Tab :name="food.name">
                    <div class="container food-container mb-5">
                        <div class="card bg-light">
                            <div class="row p-5 flex-wrap justify-content-center">
                                <div class="col-sm-10 col-md-6 col-lg- col-xl-4 mb-5" v-for="(fd,index) in food.foodArr" :key="index">
                                    <div class="card">
                                        <img
                                            class="card-img-top p-3"
                                            height="250px"
                                            :src="fd.food.image"
                                        >
                                        <div class="card-body">
                                            <h4 class="card-title text-center fd-name">{{ fd.food.name }}</h4>
                                        </div>
                                        <div v-if="currentUser" class="card-footer text-muted">
                                            <a href="#" v-on:click="addFav(fd.food,fd.id)" class="btn card-fav" tooltip="Add to fav"><i class="far fa-bookmark"></i></a>
                                            <a href="#" class="btn read-more" data-toggle="modal" :data-target="'#foodModal'+fd.id">Read More</a>
                                        </div>
                                        <div v-if="!currentUser" class="card-footer text-muted text-center">
                                            <a href="#" class="btn read-more1" data-toggle="modal" :data-target="'#foodModal'+fd.id">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tab>
            </div>
        </Tabs>

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

                                <!-- Indicators -->
                                <ol class="carousel-indicators">
                                    <li
                                    v-for="(item, index) in food.imgCar"
                                    :key="index"
                                    :data-target="'#foodCarousel'+food.id"
                                    :data-slide-to="index"
                                    :class="[index == 0 ? 'active' : '']"
                                    />
                                </ol>

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
                            <!-- <img
                                :src="food.image"
                                class="modal-image responsive"
                            > -->
                            
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
import Tab from './Tab'
import Tabs from './Tabs'

export default {
    data() {
        return {
            foods: [],
            foodChin: [{name: "Chinese" , foodArr: []}],
            foodsCat: [{name: "Continental" , foodArr: []},
                {name: "Indian" , foodArr: []},
                {name: "Thai" , foodArr: []}],
            currentUser:false,
            foodArr: [],
            selected: true
        }
    },
    components: {
        Tab,
        Tabs
    },
    created() {
        this.currentUser = firebase.auth().currentUser
        db.collection('foods').onSnapshot(res => {
            let changes = res.docChanges();
            changes.forEach(change => {
                if(change.type === 'added') {
                    this.categorise(change.doc.data(),change.doc.id)
                    this.foods.push({
                        ...change.doc.data(),
                        id:change.doc.id
                    })
                }
            })
        })
    },
    methods: {
        categorise (food,id) {
            if(food.title === "Chinese") {
                this.foodChin[0].foodArr.push({food,id})
            } else if(food.title === "Continental") {
                this.foodsCat[0].foodArr.push({food,id})
                // this.selected = false
            } else if(food.title === "Indian") {
                this.foodsCat[1].foodArr.push({food,id})
                // this.selected = false
            } else if(food.title === "Thai") {
                this.foodsCat[2].foodArr.push({food,id})
                // this.selected = false
            }
        },
        addFav(food,id) {
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
            });       
        }
    }
    
}
</script>

<style scoped>
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