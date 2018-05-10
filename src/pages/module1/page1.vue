<template>
  <div>
    this is page1
    <button @click="goto">go to page2 - 通过href跨应用</button>
  </div>
</template>
<script>
export default {
  name: "page1",
  data() {
    return {};
  },
  methods: {
    goto() {
      location.href = "/module2.html";
    }
  }
};
</script>