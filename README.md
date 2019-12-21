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
grunt.loadNpmTasks('grunt-nr-locales-htmllint');
```

## The "nr_locales_htmllint" task

### Overview

In your project's Gruntfile, add a section named `nr_locales_htmllint` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  nr_locales_htmllint: {
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

### Options

#### options.force

Type: `Boolean`
Default value: `false`

A boolean value that determines whether or not to fail the build on any lint error. If the value is true, lint errors will not fail the build.

#### options.plugins

Type: `Array`
Default value: `[]`

An array of strings, each of which should be the name of an htmllint plugin to require and use.

#### options.htmllintrc

Type: `Boolean` or `String`
Default value: `false`

If set to true, a `.htmllintrc` file will be loaded (relative to your `Gruntfile.js`) and
will override the options argument (options.force will no be overriden).
If set to a string, the file path contained in the string will be loaded.

#### options (excluding previous options)

Type: `Object`
Default value: `{}`

### Usage Examples

#### Custom Options

In this example, some custom options are passed. If any lint errors occur, they will not
fail the task, but will still be printed. Also, no more than 5 lint errors will be
reported. After hitting the maximum number of errors, no more files will be processed.

```js
grunt.initConfig({
  nr_locales_htmllint: {
    options: {
      force: true,
      maxerr: 5
    },
    src: [
      './locales/**/*.html'
    ],
  },
});
```

#### For Node-RED(Recommend)

Recommended settings for Node-RED.

```js
grunt.initConfig({
  nr_locales_htmllint: {
    options: {
      force: true,
      "indent-width": false,
      "tag-bans": [],
      "attr-bans": [],
      "link-req-noopener": false,
      "spec-char-escape": false,
      "line-no-trailing-whitespace": false
    },
    src: [
      './locales/**/*.html'
    ],
  },
});
```
