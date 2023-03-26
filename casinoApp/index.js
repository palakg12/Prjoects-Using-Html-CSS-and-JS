let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("body")
let cardsEl = document.getElementById("cards-el")

function startGame(){
   cardsEl.textContent="Cards:"+firstCard+secondCard
   sumEl.textContent="Sum: "+ sum
   
   if (sum<=20){
       message="Do you want to draw a new card"
    }
   else if (sum === 21){
       message=" You win...."
       hasBlackJack = true
    }
   else {
       message="You are out of the game"
       isAlive=false
   }
   messageEl.textContent= message
}  
function newCard(){
    console.log("Drawing a new card from the deck!")
    let card = 7
    sum+=card
    startGame()
    


}