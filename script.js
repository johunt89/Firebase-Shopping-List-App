import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


const appSettings = {
    databaseURL: "https://shoppinglist-19916-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const itemsInDB = ref(database, "items")

const inputField = document.getElementById("input-field");
const addButton = document.getElementById("add-button");

addButton.addEventListener("click", function(){
    let inputValue = inputField.value;

    push(itemsInDB, inputValue)

    console.log(`${inputValue} added to database`)
})
