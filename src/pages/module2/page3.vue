<template>
  <div>
    welcome my loser friend, 欢迎来到page3
    <button @click="goto">go to page1 - 通过hreh跨应用跳转</button>
  </div>
</template>
<script>
export default {
  name: "page3",
  data() {
    return {};
  },
  methods: {
    goto() {
      location.href = "/module1.html";
    }
  }
};
</script>