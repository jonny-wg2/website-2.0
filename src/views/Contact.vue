<template>
    <c-signup-form class="illustration-section-02" />
</template>

<script>
// import layout
import CLayout from '@/layouts/LayoutContact.vue'
// import sections
import CSignupForm from '@/components/sections/ContactForm.vue'

export default {
  name: 'Contact',
  components: {
    CSignupForm
  },
  created() {
    this.$emit('update:layout', CLayout)
  }
}
</script>
