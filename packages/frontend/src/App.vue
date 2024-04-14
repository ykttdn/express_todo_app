<script setup lang="ts">
import { ref, watchEffect } from "vue";

const toDos = ref(null);

watchEffect(async () => {
  const res = await fetch("http://localhost:3000/api/todos");
  toDos.value = await res.json();
});
</script>

<template>
  <main>
    {{ toDos }}
  </main>
</template>