import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


const appSettings = {
    databaseURL: "https://shoppinglist-19916-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const itemsInDB = ref(database, "items")

const inputField = document.getElementById("input-field");
const addButton = document.getElementById("add-button");
const shoppinglistEl = document.getElementById("shopping-list");

onValue(itemsInDB, function(snapshot){

    if(snapshot.exists()){
        
        let itemsArray = Object.entries(snapshot.val())

        clearShoppingListEl();

        for(let i = 0; i <itemsArray.length; i++){
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]
            addToShoppingList(currentItem)
    }
    }
    else{
        shoppinglistEl.innerHTML = "Your shopping list is empty!"
    }
    
})

addButton.addEventListener("click", function(){
    let inputValue = inputField.value;
    push(itemsInDB, inputValue)
    clearInput();
})

//functions

function clearInput(){
    inputField.value = "";
}

function clearShoppingListEl(){
    shoppinglistEl.innerHTML = "";
}

function addToShoppingList(item){
    let itemID = item[0];
    let itemValue = item[1];
    let newEl = document.createElement("li")
    newEl.textContent = itemValue;
    shoppinglistEl.append(newEl)

    newEl.addEventListener("click", function(){
        let exactLocationOfItemInDB = ref(database, `items/${itemID}`)
        remove(exactLocationOfItemInDB)
    })
}

