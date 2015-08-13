# HouseIt

Material Design Refactor of HouseIt.

HouseIt was originally created during the Auckland Hackfest run by Summer of Tech in 2015.

To get up and running you will need to do the following:

```
$ npm install
```


You'll find all of the HTML in index.html
What used to be inline JS now resides in assets/javascript
CSS and images also live in the assets folder.

If you're not familliar with SCSS - it's time to learn. In this project we modify styles.scss within assets/scss - NOT stylesheets/styles.css

Some useful tools that are in this package that you should learn about are:

1. Gulp
2. SCSS
3. Jekyll
4. BrowserSync

To start a dev server and add a watcher on the page, type in 

```
$ gulp
```

This will load all your business and open a tab with the page in it, it will auto-reload whenever any change is made to a file that is being watched.

If you want to deploy to prod, let someone know via Slack.

you can also
```
$ gulp jslint
```
if you want to know what bad shape our JS is in at the moment. It needs cleaning.

The yo generator used to scaffold the project is https://www.npmjs.com/package/generator-jekyllized
Check that link out for more detail.

That's it, any questions? Hit me up.

Alex
