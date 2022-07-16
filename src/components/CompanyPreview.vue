<template>
  <article class="company-preview flex space-between gap-2">
    <h3>{{ company.name }}</h3>
    <div class="flex gap-2">
      <button @click.stop="$router.push(`/company/${company.id}`)" class="btn btn-primary">Details</button>
      <button @click.stop="onDeletecompany" class="btn btn-danger">Delete</button>
    </div>
  </article>
</template>

<script>
export default {
  name: 'company-preview',
  emits:["onDeletecompany"],
  props: {
    company: Object,
  },
  methods: {
    onDeletecompany() {
      this.$emit('onDeletecompany', this.company.id)
    },
  },
}
</script>
