import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDEreXFsyCCDntYhSLAbXukWpgsJ1bdVhM",
  authDomain: "flock-2.firebaseapp.com",
  databaseURL: "https://flock-2.firebaseio.com",
  projectId: "flock-2",
  storageBucket: "flock-2.appspot.com",
  messagingSenderId: "875703219301"
};

firebase.initializeApp(config)

export default firebase
