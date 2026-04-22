vm = Vue.createApp({
  data() {
    return {
      isPurple: false,
      selectedColor: "",
    };
  },
  computed: {
    circles_classes() {
      return { purple: this.isPurple };
    },
  },
}).mount("#app");
