# InitNodeTemplate
Fast template of NodeJS project initial configuration

## First Step
* Rename file

__dist.package.json => package.json__

* Change in _package.json_

__PROJECT_NAME | AUTHOR_NAME | MAIL.COM__ 

to relevant data (name: name_of_root_dir)


## Second step
__For proper working need to install list of plugins, loaders, ...:__

>npm i -D webpack webpack-cli html-webpack-plugin copy-webpack-plugin clean-webpack-plugin mini-css-extract-plugin

>npm i -D cross-env sass sass-loader css-loader babel-loader @babel/core @babel/preset-env webpack-dev-server

>npm i -D terser-webpack-plugin optimize-css-assets-webpack-plugin eslint eslint-loader babel-eslint

>npm i -D eslint-config-google webpack-bundle-analyzer

>npm i --save @babel/polyfill

## Third step
Jet Brains WEB Storm:

> Settings => Languages & Frameworks => JavaScript => Code Quality Tools => ESLint
 
## Firth step
git init and first commit

__! GOOD LUCK !__