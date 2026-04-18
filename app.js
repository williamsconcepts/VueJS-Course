const vm = Vue.createApp({
  data() {
    return {
      firstName: "Ebube",
      middleName: "",
      lastName: "Ezeh",
      url: "https://google.com",
      age: 20,
    };
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`;
    },
    increment() {
      this.age++;
    },
    updateLastName(msg, event) {
      console.log(msg);

      this.lastName = event.target.value;
    },
    updateMiddleName(event) {
      this.middleName = event.target.value;
    },
  },
}).mount("#app");

// setTimeout(() => {
//   vm.firstName = "Dike";
// }, 2000);

// Vue.createApp({
//   data() {
//     return {
//       firstName: "dike",
//       lastName: "Ezeh",
//     };
//   },
// }).mount("#app2");
