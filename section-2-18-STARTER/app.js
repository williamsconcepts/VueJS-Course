const vm = Vue.createApp({
  data() {
    return {
      isPurple: false,
      selectedColor: "",
      size: 150
    };
  },
  computed: {
    circles_classes() {
      return { purple: this.isPurple };
    },
  },
}).mount("#app");
