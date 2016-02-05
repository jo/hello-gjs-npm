# Hello NPM!
Example application demonstrating the use of Babel and Rollup to create an NPM
installable and -runnable Gjs executable from ES2015 project source.

## Installation
Install hello-gjs-npm for the current user:
```sh
npm install -g hello-gjs-npm
```

## Execution
Run the example app:
```
hello-gjs-npm
```

## Source
Checkout the project and install npm dependencies:
```sh
git clone git@github.com:jo/hello-gjs-npm.git
cd hello-gjs-npm
npm install
```

## Building
The compiled single file executable `hello-gjs-npm` gets created with:
```sh
npm run build
```

## Starting
To start either the local build application or the globally installed package:
```sh
npm start
```

## Building and Starting in one go
There is a handy task to build the release and starts the application:
```sh
npm restart
```

## Testing
Run the tests with
```sh
npm test
```

(c) 2014 Johannes J. Schmidt, TF  
Apache 2.0 License
