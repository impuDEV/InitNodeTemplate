const fs = require('fs')
const exec = require('child_process').exec
let child1, child2, child3, child4, child5;

fs.rename('./dist.package.json',
    './package.json',
    err => {
        if(err) {console.log('No file "dist.package.json", or renamed to "package.json" already: ')}
    })

child1 = exec('npm i -D webpack webpack-cli html-webpack-plugin copy-webpack-plugin clean-webpack-plugin mini-css-extract-plugin',
    function (error, stdout, stderr) {
        console.log('webpack webpack-cli html-webpack-plugin copy-webpack-plugin clean-webpack-plugin mini-css-extract-plugin\n' +
            'stdout:\n' + stdout);
        console.log('child 1 stderr:\n' + stderr);
        if (error !== null) {
            console.log('child 1 exec error:\n' + error);
        }
    });

child2 = exec('npm i -D cross-env sass sass-loader css-loader babel-loader @babel/core @babel/preset-env webpack-dev-server',
    function (error, stdout, stderr) {
        console.log('cross-env sass sass-loader css-loader babel-loader @babel/core @babel/preset-env webpack-dev-server\n' +
            'stdout:\n' + stdout);
        console.log('child 2 stderr:\n' + stderr);
        if (error !== null) {
            console.log('child 2 exec error:\n' + error);
        }
    });

child3 = exec('npm i -D terser-webpack-plugin optimize-css-assets-webpack-plugin eslint eslint-loader babel-eslint',
    function (error, stdout, stderr) {
        console.log('terser-webpack-plugin optimize-css-assets-webpack-plugin eslint eslint-loader babel-eslint\n' +
            'stdout:\n' + stdout);
        console.log('child 3 stderr:\n' + stderr);
        if (error !== null) {
            console.log('child 3 exec error:\n' + error);
        }
    });

child4 = exec('npm i -D eslint-config-google webpack-bundle-analyzer @babel/plugin-proposal-class-properties',
    function (error, stdout, stderr) {
        console.log('eslint-config-google webpack-bundle-analyzer @babel/plugin-proposal-class-properties\n' +
            'stdout:\n' + stdout);
        console.log('child 4 stderr:\n' + stderr);
        if (error !== null) {
            console.log('child 4 exec error:\n' + error);
        }
    });

child5 = exec('npm i --save @babel/polyfill normalize.css',
    function (error, stdout, stderr) {
        console.log('stdout:\n' + stdout);
        console.log('child 5 stderr:\n' + stderr);
        if (error !== null) {
            console.log('child 5 exec error:\n' + error);
        }
    });

fs.unlinkSync('./init.js');

console.log('!!! GOOD LUCK !!!')
