<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="counter">{{ $store.state.counter }}</div>
    <div class="button">
      <button @click="decreaseCounter">-</button>
      <button @click="increaseCounter">+</button>
    </div>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener"
          >example link</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
