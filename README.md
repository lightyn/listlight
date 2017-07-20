# CartBlender
A recipe-oriented list creation and management app. <br /> [Trello board](https://trello.com/b/6ezFxdMK/grocery-app)

## Run guide
Latest stable client release is available in build/clientBrowser folder. Just clone or download the folder then launch index.html to view. (Backend will use Java with Spark instead of Node to mitigate
  dependency and server platform configuration issues [fleeing back to Maven/gradle])

## Code Louisville Reqs
* Responsive with media queries found in media.scss and flexbox. <br />
* All CSS aside from jquery-ui.min.scss and normalize.scss is custom-made. <br />
* Scripts.js event handlers and accordion.js jqueryui initializer are custom-made. <br />
* Every list item contains an input field, lists are drag/droppable, and mobile-view
 nav buttons toggle between recipe and shop list views. <br />
* HTML, JavaScript, and most CSS contains code comments. <br />
* typeOf(this) == README.MD <br />
* Implements Jquery, JqueryUI, npm, and Grunt. <br />
* Fun was had.

<!-- SERVER COMMANDS OUTDATED, BUILDING BACKEND WITH SPARK INSTEAD
## Prerequisite server software
Node.js, npm, and MongoDB all need to be installed.

## Setup guide:
Run ```npm install``` command in the root project directory. <br />
Build the client and server using the buildscript commands noted below. <br />
Run ```node build/server/server.js``` in the root project directory.
-->

## Buildscript (grunt) commands:
### Building
`grunt buildClientBrowser` will build the client browser app from source. <br />
<!--* `grunt buildServer` will build the **Node** server. -->

### Linting
`grunt lintjs` will lint all **.js** files in the source directory

### SCSS Preprocessing
`sass scss/main.scss style.css` command in the root source directory to precompile css from scss. Implemented HTML
only references this one master stylesheet to reduce resource calls,
with main.scss acting as an import table to every required stylesheet. If you
add a css file, give it the extension **.scss** and `@import "yourStyleSheetPathHere"`
to the main.scss stylesheet in whatever import order you want it in
the cascade.
