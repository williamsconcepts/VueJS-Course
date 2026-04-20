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
    increment() {
      this.age++;
    },
    updateLastName(msg, event) {
      // console.log(msg);

      this.lastName = event.target.value;
    },
    updateMiddleName(event) {
      this.middleName = event.target.value;
    },
  },
  computed: {
    fullName() {
      console.log("Full name computed property was called");
      this.age;
      return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`;
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
