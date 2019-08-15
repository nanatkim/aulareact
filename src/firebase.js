import firebase from "firebase";

var firebaseConfig = {
	apiKey: "AIzaSyCp9rzRJK92NJgzksX1dcG7v1TROOX0Cls",
	authDomain: "projeto-7a6a0.firebaseapp.com",
	databaseURL: "https://projeto-7a6a0.firebaseio.com",
	projectId: "projeto-7a6a0",
	storageBucket: "projeto-7a6a0.appspot.com",
	messagingSenderId: "1033595743692",
	appId: "1:1033595743692:web:ea5b53a1220833ed"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
