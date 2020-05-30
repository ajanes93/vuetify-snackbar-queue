<template>
    <div>
        <v-snackbar
            v-for="(item, i) in items"
            :key="item.id"
            :value="i === 0"
            :timeout="timeout"
            :color="item.color"
            :top="top"
            :right="right"
            :absolute="absolute"
            :auto-height="autoHeight"
            :bottom="bottom"
            :left="left"
            :multi-line="multiLine"
            :vertical="vertical"
        >
            {{ item.message }}
            <v-btn
                v-if="items.length > 1"
                :color="nextButtonColor"
                flat
                @click="removeItem(item.id)"
            >
                {{nextButtonText}} ({{items.length - 1}} more)
            </v-btn>
            <v-btn
                icon
                v-else
                :color="closeButtonColor"
                flat
                @click="removeItem(item.id)"
            >
                <v-icon>{{closeButtonIcon}}</v-icon>
            </v-btn>
        </v-snackbar>
    </div>
</template>

<script>
    /**
     * A wrapper component for VSnackbar which supports queueing functionality
     */
    export default {
        name: 'VSnackbarQueue',
        data: () => ({
            processing: false,
            timeoutId: false
        }),
        props: {
            /**
             * Position snackbar absolute
             */
            absolute: {
                type: Boolean,
                default: false
            },
            /**
             * Auto height prop for snackbar
             */
            autoHeight: {
                type: Boolean,
                default: false
            },
            /**
             * Position snackbar bottom
             */
            bottom: {
                type: Boolean,
                default: false
            },
            /**
             * The color of the close button
             */
            closeButtonColor: {
                type: String,
                default: 'white'
            },
            /**
             * The icon of the close button
             */
            closeButtonIcon: {
                type: String,
                default: 'close'
            },
            /**
             * Array for items to display [{id: '', color: '', message: ''}]
             */
            items: {
                type: Array,
                required: true
            },
            /**
             * Position snackbar left
             */
            left: {
                type: Boolean,
                default: false
            },
            /**
             * Position snackbar multiline
             */
            multiLine: {
                type: Boolean,
                default: false
            },
            /**
             * The color of the next button
             */
            nextButtonColor: {
                type: String,
                default: 'white'
            },
            /**
             * The text to display in the next button
             */
            nextButtonText: {
                type: String,
                default: 'Next'
            },
            /**
             * Position snackbar right
             */
            right: {
                type: Boolean,
                default: false
            },
            /**
             * Number of milliseconds to display each snackbar for
             */
            timeout: {
                type: Number,
                default: 6000
            },
            /**
             * Position snackbar top
             */
            top: {
                type: Boolean,
                default: false
            },
            /**
             * Position snackbar vertical
             */
            vertical: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            processItems () {
                const vm = this
                vm.processing = true

                if (vm.items && Array.isArray(vm.items) && vm.items.length > 0) {
                    const item = vm.items[0]
                    return vm.timeoutId = setTimeout(() => {
                        vm.removeItem(item.id)
                    }, vm.timeout)
                }

                vm.processing = false
            },
            removeItem (id) {
                const vm = this
                clearTimeout(vm.timeoutId)
                /**
                 * @event {Number}
                 */
                vm.$emit('remove', id)

                if (vm.items.length > 0) {
                    return vm.processItems()
                }
            }
        },
        watch: {
            items () {
                this.processItems()
            }
        }
    }
</script>
