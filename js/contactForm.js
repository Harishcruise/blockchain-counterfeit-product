//Initialize firebase 
const firebaseConfig = {
  apiKey: "AIzaSyCFj774b6LD47BYoGNU2guKGN6KBiW3y08",
  authDomain: "blockchain-54e96.firebaseapp.com",
  projectId: "blockchain-54e96",
  storageBucket: "blockchain-54e96.appspot.com",
  messagingSenderId: "542432666695",
  appId: "1:542432666695:web:e9d2bf9ffabcd1f87dfd62",
  measurementId: "G-GGP49ZRF1C"
};
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//Reference Message Collection 
var messagesRef = firebase.database().ref('messages');

//Listen for form Submit 
document.getElementById('contactForm').addEventListener('submit', submitForm);

//Submit Form
function submitForm(e){
    e.preventDefault();

//Get Values
var name = getInputVal('name');
var email = getInputVal('email');
var contactno = getInputVal('contactno');
var message = getInputVal('message');    

//Save Message 
saveMessage(name, email, contactno, message); 

//Alert Message
window.alert('Your messages has been sent!');

// Clear form
document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, contactno, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email: email,
      contactno: contactno,
      message: message
    });
  }

