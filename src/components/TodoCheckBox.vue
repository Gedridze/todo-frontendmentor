<script setup lang="ts">
defineProps<{
    modelValue: boolean
}>()
const emit = defineEmits<{
  (event: 'update:modelValue', value: boolean): void
}>()

function onChange(evt: Event) {
  console.log((evt.target as HTMLInputElement).checked)
  emit('update:modelValue', (evt.target as HTMLInputElement).checked)
}
</script>
<template>
  <div class="input-wrapper">
    <input type="checkbox" @change="($event) => onChange($event)" :checked="modelValue"/>
  </div>
</template>
