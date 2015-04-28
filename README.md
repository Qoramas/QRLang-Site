# QRLang-Site

This Contains the full source code of the QRLang website located at http://www.samuelhaycock.com/qrlang
THe core of the site is writen in plain html. The emulator is the key purpose of the site.


## What is QRLang
QRLang is a Game Development language and platform built upon the use of QR codes. A QR Code is a 2 dimensional barcode with an extremely limited amount of space available for storing data. The QRLang language is a very high level, highly compressible scripting language designed to fit an entire game onto a single QR code. There are two forms of users for the app, the development user who writes the games and the end user who plays them.

## Using the Emulator
The emulator is very simple to use. Once a game has been created using both the examples and the documentation available on the site then the user simply uses the QRLang compressor gui (https://github.com/Qoramas/QRLang-GUI) to compress the game into QRLang compressed code. The code can then be copied into the emulator for testing.

The layout and use of the emulator is as follows: 

![Alt text](http://i.imgur.com/x2sxQ34.png)

1. This canvas is the game display of the App. It is what would be the entire screen of the android app.
2. This is the code input area. The compressed code gets pasted here to be run
3. The debug area. Each of the compressed variables is displayed here to the developer to   debug their game.
4. The run button executes decompressing the game and running it
