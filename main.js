const textArea= document.querySelector(".writing-area")
const encryptedText= document.querySelector(".encrypted-message")
const encryptButton= document.querySelector(".encrypt-button")
const decryptButton= document.querySelector(".decrypt-button")
const notMessageYet= document.querySelector(".first-dialog-box")
const encryptedArea= document.querySelector("#encrypted-area")
const copyButton= document.querySelector("#copy-button")
let codeKeys=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
let regex = /^[a-z\s]*$/;


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
  notMessageYet.classList.add("hidden")
  encryptedArea.classList.remove("hidden")
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
  if(!notMessageYet.classList.contains("hidden"))
  notMessageYet.classList.remove("hidden")
  encryptedArea.classList.add("hidden")
 return alert(phrase)
}

//Function to encrypt the text 
function encrypt(encryptedString){
 let result = regex.test(encryptedString);
 if(result){
  for (let index = 0; index < codeKeys.length; index++) {
  if (encryptedString.includes(codeKeys[index][0])) {
   encryptedString= encryptedString.replaceAll(codeKeys[index][0],codeKeys[index][1])
   }
  }
  return encryptedString
 }else{
  emptyTextValue("Value not allowed 🙀")
 }
}

//Function to decrypt the text 
function decrypt(decryptedString){
 let result = regex.test(decryptedString);
 if(result){
  for (let index = 0; index < codeKeys.length; index++) {
   if (decryptedString.includes(codeKeys[index][1])) {
    decryptedString= decryptedString.replaceAll(codeKeys[index][1],codeKeys[index][0])
   }
  
  }
 return decryptedString
 }else{
  emptyTextValue("Value not allowed 🙀")
 }
}

function copyText(){
 let text = encryptedText.value;

  navigator.clipboard.writeText(text)
    .then(() => {
      alert("Text copied! 😉");
    })
    .catch((error) => {
      console.error("Error al copiar el texto:", error);
    });
}