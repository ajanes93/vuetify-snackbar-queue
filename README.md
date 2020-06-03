# vuetify-snackbar-queue
>Simple plugin for queueing v-snackbars in Vuetify
* Extends VSnackbar component, allowing an array of snackbar items to be passed in.
* Queues Snackbars displaying one at a time 

## Install for use with Vuetify 2.*
```npm install vuetify-snackbar-queue```

[See Code Sandbox Example](https://codesandbox.io/s/vuetify-snackbar-queue-s6pt2)

please note that the `auto-height` prop for the `VSnackbar` component was deprecated in Vuetify 2 and is no longer available.

## Install for use with Vuetify 1.5.*
```npm install vuetify-snackbar-queue@1.0.0```

[See Code Sandbox Example](https://codesandbox.io/s/sweet-haze-z2v919669m)

## Latest component docs

See the docs at [Vuetify Snackbar Queue Docs](https://ajanes93.github.io/vuetify-snackbar-queue/)

## Use as Plugin
>Import as plugin in your main.js file

```js
//main.js
import Vue from 'vue'
import VuetifySnackbarQueue from 'vuetify-snackbar-queue'

Vue.use(VuetifySnackbarQueue)
```

>Use in templates
```vue
<template>
    <v-snackbar-queue
        :items="items"
        @remove="() => {}"
    ></v-snackbar-queue>
</template>
```

## Development Setup

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
