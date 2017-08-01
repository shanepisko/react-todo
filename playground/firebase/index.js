import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyC3pg0tfoeeTkzgTfIYrq0TgEuih_2bGrY",
    authDomain: "pisko-todo-app.firebaseapp.com",
    databaseURL: "https://pisko-todo-app.firebaseio.com",
    projectId: "pisko-todo-app",
    storageBucket: "pisko-todo-app.appspot.com",
    messagingSenderId: "372425032855"
  };
  firebase.initializeApp(config);

  firebase.database().ref().set({
    appName: 'TodoApp'
  });
