Today we're going to build on a [previous tutorial](https://github.com/cleechtech/cleechtech.github.io/blob/master/posts/use%20express%2C%20angular%20and%20jwt%20to%20make%20a%20secure%20app.md) that secured a MEAN stack app with Json Web Tokens. For the uninitiated, JWT are like web browser cookies but better. We will use the same code but swap in React.js for Angular.js.

Clone the [MEAN example](https://github.com/cleechtech/node-jwt-intro) and delete angular or clone directly from this commit.


Install server side dependencies:

```
npm i
```

Add these scripts to the bottom of `public/index.html`:

```
<script src="https://fb.me/react-0.14.0.min.js"></script>
<script src="https://fb.me/react-dom-0.14.0.min.js"></script>
```
A popular tool for React.js apps is [webpack](https://webpack.github.io/) it is similar to a combination of gulp.js and browserify. It packages everything up and lets you use commonJS syntax ie `require()` in the browser. It is cool but we are not going to use it for this tutorial.

We are going to use [babel.js](https://babeljs.io/) for ES6 goodness and does not require configuration from us.

Add script tag:

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
```
