const textArea= document.querySelector(".writing-area")
const encryptedText= document.querySelector(".encrypted-message")
const encryptButton= document.querySelector(".encrypt-button")
const decryptButton= document.querySelector(".decrypt-button")
const notMessageYet= document.querySelector(".first-dialog-box")
const encryptedArea= document.querySelector("#encrypted-area")
let codeKeys=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]


encryptButton.addEventListener("click",encryptOption)
decryptButton.addEventListener("click",decryptOption)

//pressing encript button active the next function
function encryptOption (){
 let catchedText= textArea.value
 if(catchedText){
  const encryptedMessage= encrypt(catchedText)
  changeBoxResult(encryptedMessage)
 }else{
  emptyTextValue()
 }
}

function changeBoxResult(encryptedMessage){
 if(encryptedArea.classList.contains("hidden")){
  notMessageYet.classList.toggle("hidden")
  encryptedArea.classList.toggle("hidden")
  return encryptedText.innerHTML=encryptedMessage
  }else{
  return encryptedText.innerHTML=encryptedMessage
  }
}

//pressing decrypt button active the next function
function decryptOption(){
 let catchedText= textArea.value
  if(catchedText){
   const decryptedMessage= decrypt(catchedText)
   changeBoxResult(decryptedMessage)
  }else{
   emptyTextValue()
 }
}

//send an alert if the textValue is empty
function emptyTextValue(){
  notMessageYet.classList.remove("hidden")
  encryptedArea.classList.add("hidden")
 return alert("Please insert the text! 😐")
}

//Function to encrypt the text 
function encrypt(encryptedString){
 let phrase= encryptedString.toLowerCase()
 for (let index = 0; index < codeKeys.length; index++) {
  if (phrase.includes(codeKeys[index][0])) {
   phrase= phrase.replaceAll(codeKeys[index][0],codeKeys[index][1])
  }
  
 }
 return phrase
}

//Function to decrypt the text 
function decrypt(decryptedString){
 let phrase= decryptedString.toLowerCase()
 for (let index = 0; index < codeKeys.length; index++) {
  if (phrase.includes(codeKeys[index][1])) {
   phrase= phrase.replaceAll(codeKeys[index][1],codeKeys[index][0])
  }
  
 }
 return phrase
}