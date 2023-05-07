const textArea= document.querySelector(".writing-area")
const encryptedText= document.querySelector(".encrypted-message")
const encryptButton= document.querySelector(".encrypt-button")
const decryptButton= document.querySelector(".decrypt-button")
const notMessageYet= document.querySelector(".first-dialog-box")
const encryptedArea= document.querySelector("#encrypted-area")
const copyButton= document.querySelector("#copy-button")
let codeKeys=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
let regex = /^[a-z]+$/;


encryptButton.addEventListener("click",encryptOption)
decryptButton.addEventListener("click",decryptOption)
copyButton.addEventListener("click",copyText)

//pressing encript button active the next function
function encryptOption (){
 let catchedText= textArea.value
 if(catchedText){
  const encryptedMessage= encrypt(catchedText)
  changeBoxResult(encryptedMessage)
 }else{
  emptyTextValue("Please insert the text! 😐")
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
   emptyTextValue("Please insert the text! 😐")
 }
}

//send an alert if the textValue is empty
function emptyTextValue(phrase){
  notMessageYet.classList.remove("hidden")
  encryptedArea.classList.add("hidden")
 return alert(phrase)
}

//Function to encrypt the text 
function encrypt(encryptedString){
 let phrase= encryptedString.toLowerCase()
 let result = regex.test(phrase);
 if(result){
  for (let index = 0; index < codeKeys.length; index++) {
  if (phrase.includes(codeKeys[index][0])) {
   phrase= phrase.replaceAll(codeKeys[index][0],codeKeys[index][1])
   }
  }
  return phrase
 }else{
  emptyTextValue("Not value allowed 🙀")
 }
}

//Function to decrypt the text 
function decrypt(decryptedString){
 let phrase= decryptedString.toLowerCase()
 let result = regex.test(phrase);
 if(result){
  for (let index = 0; index < codeKeys.length; index++) {
   if (phrase.includes(codeKeys[index][1])) {
    phrase= phrase.replaceAll(codeKeys[index][1],codeKeys[index][0])
   }
  
  }
 return phrase
 }else{
  emptyTextValue("Not value allowed 🙀")
 }
}