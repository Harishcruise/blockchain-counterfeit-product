//Initialize Firebase
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
document.getElementById('manufacturerform').addEventListener('submit', submitForm);

//Submit Form
function submitForm(e){
    e.preventDefault();

//Get Values
var fname = getInputVal('fname');
var lname = getInputVal('lname');
var emailid = getInputVal('emailid');
var cname = getInputVal('cname');
var caddress = getInputVal('caddress');
var postalcode = getInputVal('postalcode');
var medno = getInputVal('medno');
var phno = getInputVal('phno');
var govlic = getInputVal('govlic');    

//Save Message 
saveMessage(fname, lname,emailid, cname, caddress, postalcode, medno, phno, govlic); 

//Alert Message
window.alert('Your messages has been sent!');
window.location.href="ManufacturerMail.html";

// Clear form
document.getElementById('manufacturerform').reset();
}

// Function to get get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(fname, lname, emailid, cname, caddress, postalcode, medno, phno, govlic){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      fname: fname ,
      lname: lname,
      emailid: emailid,
      cname: cname, 
      caddress: caddress,
      postalcode: postalcode,
      medno: medno,
      phno: phno,
      govlic: govlic
    });
  }




















