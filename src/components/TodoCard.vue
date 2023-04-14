<script setup lang="ts">
import { ref } from 'vue';
import TodoCheckBox from './TodoCheckBox.vue'
const isComplete = ref(false)
</script>
<template>
  <div>
    <TodoCheckBox v-model="isComplete"/>
  </div>
</template>
