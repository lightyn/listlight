# listlight
A recipe-oriented grocery list creation and management app.

## Prerequisite software
Node.js and MongoDB both need to be installed.

## Setup guide:
Run ```npm install``` command in the root project directory.

## Buildscript (grunt) commands:
### Build
`grunt buildClientBrowser` will build the client browser app from source.
`grunt buildServer` will build the *Node* server.

###Linting
`grunt lintjs` will lint all *.js* files in the source directory

###SCSS Preprocessing
`sass scss/main.scss style.css` to precompile css from sass. Implemented HTML
only references this one master stylesheet to reduce resource calls,
with main.scss acting as an import table to every required stylesheet. If you
add any css, give it the extension .scss and @import "`yourStyleSheetPathHere`"
to the main.scss stylesheet in whatever import order you want it to be hit in
the cascade.
