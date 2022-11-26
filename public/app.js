
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
  import { getDatabase, ref, set, push, onChildAdded } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBpStdTwz6euEnZxr-h8DUO9pn6mBHbkyQ",
    authDomain: "database-12dcf.firebaseapp.com",
    projectId: "database-12dcf",
    storageBucket: "database-12dcf.appspot.com",
    messagingSenderId: "512995448299",
    appId: "1:512995448299:web:17dc3b58675bafc53fb5ae",
    measurementId: "G-KZR42M7GCT"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = getDatabase();


  var task = document.getElementById('tasks')
  var sikan = document.getElementById('sikadar');
window.sendData = function () {
    var obj = {
        task: task.value,
        date : JSON.stringify(new Date()),
    };
    
    const sikandarkey = ref(database, 'sikandar/');
    obj.id = push(sikandarkey).key;
    console.log(obj.id);
    console.log(obj);

    const sikandardb = ref(database, `sikandar/${obj.id}/`);
    set(sikandardb, obj);
}

window.getData = function(){
    const keyrefere = ref(database, 'sikandar/');
    onChildAdded(keyrefere, function(sikandar){
        sikan.innerHTML += `<li>${sikandar.val()}</li>`
    });
}


