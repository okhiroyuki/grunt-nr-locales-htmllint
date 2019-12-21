# grunt-nr-locales-htmllint

> Unofficial html5 linter and validator for node-red locales.

## Getting Started

### install
```shell
npm install grunt-nr-loceles-htmllint --save-dev
```

### edit Gruntfile
Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-nr-htmllint');
```

## The "nr_htmllint" task

### Overview
In your project's Gruntfile, add a section named `nr_htmllint` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  nr_htmllint: {
    your_target: {
	    options: {
	      force: false
	    },
	    src: [
        './locales/**/*.html'
      ]
    }
  },
});
```
