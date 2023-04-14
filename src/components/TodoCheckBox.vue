<script setup lang="ts">
defineProps<{
  modelValue: boolean
}>()
const emit = defineEmits<{
  (event: 'update:modelValue', value: boolean): void
}>()

function onChange(evt: Event) {
  evt.preventDefault()
  console.log((evt.target as HTMLInputElement).checked)
  emit('update:modelValue', (evt.target as HTMLInputElement).checked)
}
</script>
<template>
  <div class="w-fit">
    <label
      class="border border-solid border-d-gray-blue bg-vl-gray block p-1 rounded-full hover:bg-vl-gray-blue hover:cursor-pointer"
      :class="{ checked: modelValue }"
    >
      <div>
        <img
          src="src/assets/static/icon-check.svg"
          class="h-4 m-auto"
          :class="{ invisible: !modelValue }"
        />
        <input
          type="checkbox"
          name="checkbox"
          class="hidden"
          @change="($event) => onChange($event)"
          :checked="modelValue"
        />
      </div>
    </label>
  </div>
</template>
<style scoped>
.checked {
  @apply from-check-bg-grad-start bg-gradient-to-br to-check-bg-grad-end;
}

img {
  object-fit: cover;
  width: 100%;
}
</style>
