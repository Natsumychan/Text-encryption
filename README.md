# Text Encryption and Decryption Web App 😶‍🌫️
This is a simple web application that allows users to encrypt and decrypt text using a very unique cipher code with a key of their choice. The app only allows lower case letters (English alphabet) to be inserted.

## Technologies used 💻
This project is built using HTML, CSS, and Vanilla JavaScript.

## How to use the app 👀
1. Open the index.html file in a web browser. You can also check the page clicking right here 👉 [Encrypt time!](https://natsumychan.github.io/Text-encryption/)
2. Enter the text you want to encrypt or decrypt into the input field.
3. Choose whether you want to encrypt or decrypt the text using the buttons below the input field.
4. Click the button to see the encrypted or decrypted text, in the result field (white box)
5. If you want to copy the result, click the "Copy" button.
6. You can then paste the copied text into the input field to encrypt or decrypt it.

## How it works 🤔
The app uses a simple cipher code to encrypt and decrypt the text. The code works by shifting each the vowel in the text by a certain convertion. For example, if you write "a", then the web app would be encrypted as "ai", "o" would be encrypted as "ober", and so on.

To encrypt the text, the app loops through each character in the input string and select the vowels to change it by the key code. To decrypt the text, the app loops through each character in the input string and shifts the key code by the vowel.

The app also checks that the input string only contains lower case letters (English alphabet) and displays an error message if it contains any other characters.

## Author 🧙‍♀️
This web app was created by **Diana Castaño** as a personal project.