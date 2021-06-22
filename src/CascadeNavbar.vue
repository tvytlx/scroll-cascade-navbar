<template>
  <div class="example">
    {{ msg }}
    <span class="inner">123</span>
  </div>
</template>

<script>
export default {
  name: "CascadeNavbar",
  data() {
    return {
      msg: "Hello world!",
    };
  },
  methods: {},
};
</script>

<style scoped>
.example {
  color: red;
}
</style>
