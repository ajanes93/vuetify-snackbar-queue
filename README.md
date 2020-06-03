# vuetify-snackbar-queue
>Simple plugin for queueing v-snackbars in Vuetify
* Extends VSnackbar component and adds items[] prop
* Queues Snackbars displaying one at a time 

## Docs

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
