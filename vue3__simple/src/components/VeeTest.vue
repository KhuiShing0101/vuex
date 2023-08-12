<template>
  <div id="app">
    <VeeForm @submit="onSubmit">
      <VeeField name="email" type="email" :rules="emailRules">
        <input type="email" v-model="email" />
      </VeeField>
      <ErrorMessage name="email" />
      <button type="submit">Submit</button>
    </VeeForm>
  </div>
</template>

<script>

import { defineComponent } from 'vue';
import { Field, Form, ErrorMessage, extend, configure } from 'vee-validate';
import { required, email } from '@vee-validate/rules';

// Register the rules
extend('required', required);
extend('email', email);

configure({
  generateMessage: context => `The field ${context.field} is invalid.`,
});

export default defineComponent({
  components: {
    VeeField: Field,
    VeeForm: Form,
    ErrorMessage: ErrorMessage,
  },
  data() {
    return {
      email: '',
    };
  },
  computed: {
    emailRules() {
      return 'required|email';
    },
  },
  methods: {
    onSubmit() {
      // Handle form submission
    },
  },
});
</script>
