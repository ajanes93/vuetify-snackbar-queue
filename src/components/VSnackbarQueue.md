VSnackbarQueue example:

```vue
<template>
      <v-container grid-list-lg fluid>
        <v-layout wrap>
          <v-flex xs2>
            <v-btn color="primary" @click="addItem">Add to Queue</v-btn>
          </v-flex>
        </v-layout>
        <VSnackbarQueue :items="items" top right @remove="removeItem"></VSnackbarQueue>
      </v-container>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    items: [],
    colors: ["warning", "error", "info", "success"]
  }),
  methods: {
    addItem() {
      const vm = this;
      const index = vm.randomInt(0, vm.colors.length - 1);
      vm.items.push({
        id: vm.uniqueId("item_"),
        color: vm.colors[index],
        message: "This is an example"
      });
    },
    removeItem(id) {
      const vm = this;
      const index = vm.items.findIndex(item => item.id === id);

      if (index !== -1) {
        vm.items.splice(index, 1);
      }
    },
    randomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    uniqueId: prefix =>
      `${prefix}_` +
      Math.random()
        .toString(36)
        .substr(2, 9)
  }
};
</script>
```
