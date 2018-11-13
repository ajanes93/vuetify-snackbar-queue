# vuetify-snackbar-queue
>Simple plugin for queueing v-snackbars in Vuetify
* Extends VSnackbar component and adds items[] prop
* Queues Snackbars displaying one at a time 

##Use as Plugin
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
    <v-container grid-list-lg fluid>
        <v-layout wrap>
            <v-flex xs2>
               <v-btn color="primary" @click="addItem">Add to Queue</v-btn>
            </v-flex>
        </v-layout>
        <v-snackbar-queue
            :items="items"
            @remove="removeItem"
        ></v-snackbar-queue>
    </v-container>
</template>
<script>
	export default {
		data: () => ({
		    id: 0,
		    items: [],
		    colors: ['warning', 'error', 'info']
		}),
		methods: {
		    addItem () {
		        const vm = this
		        const index = vm.randomInt(0, 2)
		        vm.id++
		        vm.items.push({
		            id: vm.id,
		            color: vm.colors[index],
		            message: 'This is an example alert'
		        })  
		    },
		    removeItem (id) {
		        const vm = this
		        const index = _.findIndex(vm.items, {id})
		        
		        if (index !== -1) {
		            vm.items.splice(index, 1)
		        }   
		    },
		    randomInt(min, max) {
                return Math.floor(Math.random() * (max - min + 1) ) + min;
            }
 		}
	}
</script>
```


##Development Setup

### Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```
