React boilerplate code
======================

This is a very simple app demonstrating a few skills which include:

- setting up a simple express js webserver
- using configuring and using nunjucks templates
- setting up a webpack build pipeline
- building and rendering a react component, built using es2015 syntax
- general node app setup

The project is broken down into the following files which perform the belwo described roles

package.json
------------
This is the confinguration file for this node app. In here you will find a number of useful insights to the project, as well as some extras to do a little bit of the heavy lifting while working on your node app. The most important parts of this file at this point are the sections:

- `main`, 
- `scripts`, 
- `dependencies`
- `devDependencies`

The `main` section indicates the primary file to run when launching this node app. 

The `scripts` section details a number of handy scripts you can run from the command line throught the use of npm. These are run by calling `npm run <script-name>` for example `npm run dev-build`. 

Finally the `devDependencies` and `Dependencies` sections show all of the required files that this app needs to perform its various tasks. The distinction between the two is that `devDependencies` are only required for the local building amd packaging of your app on your machine, whereas the `Dependencies` are the requirements to run the app when it is deployed and live. At this stage when you have downloaded the app you may need to install these dependancies, do so by running `npm install`.

index.js
--------
This is the entry point for the express server. This file is run to initialise the server and get it up and running. As it stands, this is a very simple server which contains only a single route that it will respond to; this being the root. To launch the server, you need only call `npm start` from the command line.  We have detailed in scripts of our `package.json` that this should call `node index.js`.

index.njk
---------
This is our nunjucks html template. Nunjucks is a templating language for Javascript which borrow from Djangos templating language and it's derivative e.g. jinja. At this point however it is simply being used as a standard piece of html... and not a very interesting one at that. At this point beyond the usual html crufts, there is only the inclusion of our app.js file which we will come onto later, and the div element with the id `app`, which our app should launch into.

webpack.config.js
-----------------
This is the webpack configuration file. Here, we supply the webpack packaging tool all the information it needs to do it's thing. And what, you may ask, is it's thing... 

Web pack is an asset bundling tool predominently, used in our case, to nicely package up raw script files. We have do some prep work on them and put them in the place we expect once built for using while deployed.

In the file, you will see the most important factors are the `APP_DIR` and `BUILD_DIR`, which are directory paths to the raw app and the build destination respectively. Within the app directory we have specified that the initial file the packager needs to hunt for is the `app.jsx` file - this is our entry/launch file. 

We have also specified that this should all be bundled into an `app.js` file in our build directory. Which again, you may have noticed, is what we reference in the `index.njk` file within the script tags. 

Running `npm run dev-build` will run and produce an un-minified version of our app while running `npm run prod-build` will produce and ugly old minified file. These be run by invoking webpack directly and is seen in the package.json file by calling `webpack -d` and `webpack -p` respectively, but for neatness and reduction of that all important commodity, brain space, putting these in the npm scripts under handy names simplifies things. You may at this stage require to run `npm run dev-build` at least if you do not have the `static/js/app.js` file in your project.

.babelrc
--------
This is a very simple config file and it simply helps with the webpack packaging pieline. Its main purpose is to inform of packages which will help demistify/transform the newer form of javascript, es-2015/es6, that we will use in our front end javascript.

src/js/app.jsx
--------------
Here is where the frontend magic happens as it where. within this file we simply create a straight foreward Hello World h1 element using react. The structure as you will see, if you are familiar with Javascript, is that of a new style Javascript declaritive class. This class inherits or extends the base React.Component. The only method you explictly need to override is render, this is so that the component knows what is needed to be output. Although at first glance it appears we are writing plain old html in ou javascript we are not in fact. This is called JSX it is a declaritive way to write react component nestings. So you cannot just use plain old attribute tags on these elements you must use the react specific notation when writing them. For example to apply a `class` attribute you would use `className`.

Once the Component is defined we simply wait for the document to load grab our target and render the component to the target element, all using reacts handy render function.
