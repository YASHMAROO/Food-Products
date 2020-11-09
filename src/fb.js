import firebase from 'firebase/app';
import 'firebase/storage'
import 'firebase/database'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDYtDYls5ULhnztWdcpW7U7JYo8RIv0Ays",
    authDomain: "food-store-3d145.firebaseapp.com",
    databaseURL: "https://food-store-3d145.firebaseio.com",
    projectId: "food-store-3d145",
    storageBucket: "food-store-3d145.appspot.com",
    messagingSenderId: "1020549379231",
    appId: "1:1020549379231:web:b910390a257d44c9a71eaa",
    measurementId: "G-J9XSQZKE6F"
};

firebase.initializeApp(firebaseConfig);

const db=firebase.firestore();

export default db;