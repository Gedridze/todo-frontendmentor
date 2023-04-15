<script setup lang="ts"></script>
<template>
  <div class="flex w-full text-center rounded-lg bg-vl-gray">
    <div class="pt-3 pb-3 pl-3">
      <slot name="header"></slot>
    </div>
    <div class="w-full pt-3 pb-3">
      <slot name="content"></slot>
    </div>
    <div class="pt-3 pb-3 pr-3">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
