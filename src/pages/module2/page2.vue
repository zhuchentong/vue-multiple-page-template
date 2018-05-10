<template>
  <div>
    this is page2
    <button @click="goto">go to page3 - 通过vue-router应用内跳转</button>
  </div>
</template>
<script>
export default {
  name: "page2",
  data() {
    return {};
  },
  methods: {
    goto() {
      this.$router.push("page3");
    }
  }
};
</script>