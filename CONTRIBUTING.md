# Contributing

## Step 1 (Downloading)

Clone the repository,
<br> `$ git clone https://github.com/jordanbrauer/filly-text.git`

## Step 2 (Installing)

Next, install project dependencies,
<br> `$ npm install`

_**Note:** If you don't already have gulp installed globally, do so with,_ `$ npm install -g gulp`


### Linter Installation

This project uses a JavaScript linter to ensure consistent and readable code from all contributors!

_**Note:** Skip this step if you already have the `linter` and `linter-eslint` installed on your editor._

Install linter and linter-eslint via Atom Package Manager (apm),
<br> `$ apm install linter linter-eslint`

__- OR -__

Install them through the atom interface (`ctrl` + `,` / `cmd` + `,`)!

## Step 3 (Code)

Use these commands to help you while contributing,

__Build Task:__
<br>`$ gulp build`,

Run this command to transpile all files in `./js` with babel into ES2015 script for the browser.

The `build` script also calls `clean` before it runs to ensure no conflicts.

__Watch Task:__
<br> `$ gulp watch`,

Run this command to make gulp monitor `./js` for changes and run `build` each time it detects a change. This is useful for long coding sessions. Cancel it like you would any other batch process, (`ctrl` + `c`)

__Clean Task:__
<br> `$ gulp clean`

Run this command to delete all transpiled files within `./dist`.
