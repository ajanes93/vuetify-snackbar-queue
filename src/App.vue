<template>
    <v-app>
        <v-content>
            <v-container grid-list-lg fluid>
                <v-layout wrap>
                    <v-flex xs2>
                        <v-btn color="primary" @click="addItem">Add to Queue</v-btn>
                    </v-flex>
                </v-layout>
                <snackbar-queue
                    :items="items"
                    top
                    right
                    @remove="removeItem"
                ></snackbar-queue>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import {uniqueId, findIndex} from 'underscore'
    import SnackbarQueue from '@/components/SnackbarQueue'

    export default {
        name: 'App',
        components: {
            SnackbarQueue
        },
        data: () => ({
            items: [],
            colors: ['warning', 'error', 'info', 'success']
        }),
        methods: {
            addItem () {
                const vm = this
                const index = vm.randomInt(0, vm.colors.length -1)
                vm.items.push({
                    id: uniqueId('item_'),
                    color: vm.colors[index],
                    message: 'This is an example'
                })
            },
            removeItem (id) {
                const vm = this
                const index = findIndex(vm.items, {id: id})

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
