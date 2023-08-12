<template>
  <Form @submit="onSubmit">
    <Field name="name" label="Name" rules="required" v-slot="{ errors }">
      <input v-model="name" />
      <ErrorMessage :errors="errors" name="name" />
    </Field>
    
    <Field name="email" label="Email" rules="required|email" v-slot="{ errors }">
      <input v-model="email" />
      <ErrorMessage :errors="errors" name="email" />
    </Field>

    <button type="submit">Submit</button>
  </Form>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate';

export default {
  components: {
    Form,
    Field,
    ErrorMessage
  },
  data() {
    return {
      name: '',
      email: ''
    };
  },
  methods: {
    onSubmit() {
      // Handle form submission
    }
  }
};
</script>
