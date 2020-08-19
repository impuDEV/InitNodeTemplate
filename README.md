# InitNodeTemplate
Fast template of NodeJS project initial configuration based on Webpack

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

>npm i -D eslint-config-google webpack-bundle-analyzer @babel/plugin-proposal-class-properties

>npm i --save @babel/polyfill normalize.css

## Third step
Jet Brains WEB Storm:

> Settings => Languages & Frameworks => JavaScript => Code Quality Tools => ESLint
 
## Fourth step
git initialisation in terminal:
>git init
> 
>git add .
>
>git commit -m "initialization project"
>
>git remote add origin https://github.com/AUTHOR_NAME/PROJECT_NAME.git
>
>git push -u origin master (if push rejected try: *git push -f origin master*)
>

__! GOOD LUCK !__