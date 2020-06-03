<template>
    <v-app>
        <v-content>
            <v-container fluid>
                <v-row>
                    <v-col cols="2">
                        <v-btn @click="addItem" color="primary">Add to Queue</v-btn>
                    </v-col>
                </v-row>
                <v-snackbar-queue
                    :items="items"
                    @remove="removeItem"
                    right
                    top
                ></v-snackbar-queue>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import VSnackbarQueue from './components/VSnackbarQueue'

    export default {
        name: 'App',
        components: {
            VSnackbarQueue
        },
        data: () => ({
            items: [],
            colors: ['warning', 'error', 'info', 'success']
        }),
        methods: {
            addItem () {
                const vm = this
                const index = vm.randomInt(0, vm.colors.length - 1)
                vm.items.push({
                    id: vm.uniqueId('item_'),
                    color: vm.colors[index],
                    message: 'This is an example'
                })
            },
            removeItem (id) {
                const vm = this
                const index = vm.items.findIndex((item) => item.id === id)

                if (index !== -1) {
                    vm.items.splice(index, 1)
                }
            },
            randomInt (min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min
            },
            uniqueId: (prefix) => `${prefix}_` + Math.random().toString(36).substr(2, 9)
        }
    }
</script>
