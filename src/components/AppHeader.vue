<template>
  <header class="flex justify-between items-center">
    <div class="logo">
      <h1 class="fw-800">Bre<span class="clr-teal">w</span></h1>
    </div>
    <nav class="flex gap-2 fw-600">
      <RouterLink class="link" to="/">Home</RouterLink>
      <RouterLink class="link" to="/company">company</RouterLink>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'app-header',
}
</script>
