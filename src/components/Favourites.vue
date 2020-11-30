<template>
    <section class="container-fluid mb-5">
        <h1 class="text-center">Favourites</h1>
        <div class="container mb-5">
            <div class="row pt-4 pb-4 flex-wrap justify-content-ceter">
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 mb-5" v-for="(fd,index) in foodArr" :key="index">
                    <div class="card">
                        <img
                            class="card-img-top p-3 card-image"
                            height="250px"
                            :src="fd.food.image"
                        >
                        <div class="card-body">
                            <h4 class="card-title text-center fd-name">{{ fd.food.name }}</h4>
                        </div>
                        <div class="card-footer text-muted">
                            <a href="#" v-on:click="removeFav(fd.food,fd.id)" class="btn card-trash"><i class="fas fa-trash-alt"></i></a>
                            <a href="#" class="btn read-more" data-toggle="modal" :data-target="'#foodModal'+fd.id">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div
        v-for="(food, index) in foodArr"
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
                                    v-for="(item, index) in food.food.imgCar"
                                    :key="index"
                                    :data-target="'#foodCarousel'+food.id"
                                    :data-slide-to="index"
                                    :class="[index == 0 ? 'active' : '']"
                                    />
                                </ol>

                                <!-- Carousel items -->
                                <div class="carousel-inner">
                                    <div
                                        v-for="(item, index) in food.food.imgCar"
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
                                :src="food.food.image"
                                class="modal-image responsive"
                            > -->
                            
                            <h3 class="price"><i class="fas fa-rupee-sign"></i> {{ food.food.price }} </h3>

                            <h3 class="text-center pt-2 food-name">
                                {{ food.food.name }}
                            </h3>
                            <div class="pt-3 food-description">{{ food.food.description }}</div>
                        </div>
                        <div class="modal-footer">
                            <a href="#" v-on:click="removeFav(fd.food,fd.id)" class="btn modal-trash"><i class="fas fa-trash-alt"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import db from '@/fb'
import firebase from 'firebase'

export default {
    data() {
        return {
            foodArr: [],
        }   
    },
    created() {
        db.collection('users').doc(firebase.auth().currentUser.uid).get().then(doc => {
            this.foodArr = doc.data().favFood;
        });
    },
    methods: {
        removeFav(food,id) {
            let ind;
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
        }
    }
}
</script>

<style scoped>
#footer {
    display: none;
}

.fd-name {
    font-family: 'Goldman', cursive;
    font-size: 3vh;
}

.read-more {
    float: right;
    font-size: 2.2vh;
}

.read-more:hover {
    font-size: 25px;
    color: green;
    transition: ease 0.3s;
}

.read-more:focus {
    box-shadow: none !important;
}

.fa-trash-alt {
    font-size: 3vh;
}

.fa-trash-alt:hover {
    font-size: 3.5vh;
    color:red;
    transition: ease 0.3s;
}

.card-trash:focus {
    box-shadow: none !important;
}

.modal {
    z-index: 20000;
    padding-top: 2%;
    height: 100vh;
}

.modal-trash {
    box-shadow: none !important;
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
}

.food-description {
    font-size: 2.2vh;
    font-family: 'Syne Mono', monospace;
    color: blueviolet;
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

@media only screen and (min-width: 992px) and (max-width: 1200px) {
    .card-image {
        height: 300px !important;
    }
}

@media only screen and (min-width: 576px) and (max-width: 776px) {
    .card-image {
        height: 350px !important;
    }
}

@media only screen and (max-width: 576px) {
    .card-image {
        height: 300px !important;
    }
}
</style>