<script setup lang="ts"></script>
<template>
  <div class="flex w-full text-center rounded-lg card-container bg-vl-gray">
      <slot name="header"></slot>
      <slot name="content"></slot>
      <slot name="footer"></slot>
  </div>
</template>
<style>
.card-container > *{
  @apply pt-3 pb-3
}

.card-container > :first-child {
  @apply pl-3
}

.card-container > :last-child{
  @apply pr-3 
}

</style>
