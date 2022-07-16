<template>
  <section class="home py-3 text-center">
    <h2>Welcome to my companyApp</h2>
    <div class="my-1">
      <button @click="$router.push('/company')" class="btn btn-secondary" to="/company">Go to my companies</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>
