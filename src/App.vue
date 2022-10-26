<template>
  <div v-if="textData">{{ textData }}</div>
  <div v-if="storageData">{{ storageData }}</div>
  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">батон</a>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

const textData = ref('')
const storageData = ref('')
onMounted(async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const text = await res.json()
    textData.value = text
  } catch (err) {
    console.log('Error: ', err)
  }

  if (localStorage.getItem('test-data'))
    storageData.value = localStorage.getItem('test-data')
  else 
    storageData.value = 'no data found'
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
