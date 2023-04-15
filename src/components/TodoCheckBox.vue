<script setup lang="ts">
withDefaults(
  defineProps<{
    modelValue: boolean,
    disabled? :boolean
  }>(),
  {
    disabled: false
  }
)
const emit = defineEmits<{
  (event: 'update:modelValue', value: boolean): void
}>()

function onChange(evt: Event) {
  evt.preventDefault()
  emit('update:modelValue', (evt.target as HTMLInputElement).checked)
}
</script>
<template>
  <div class="w-fit">
    <label
      class="block w-5 h-5 p-1 border border-solid rounded-full border-d-gray-blue dark:border-d-grayish-blue bg-vl-gray dark:bg-vd-destat-blue"
      :class="{ checked: modelValue, 'cursor-pointer' : !disabled }"
    >
      <div>
        <img
          src="/src/assets/static/icon-check.svg"
          class="m-auto"
          :class="{ invisible: !modelValue }"
        />
        <input
        :disabled="disabled"
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
