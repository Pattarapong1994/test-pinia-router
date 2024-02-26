<script setup>
import{useUserStore} from '../stores/users'

const userStore =useUserStore()

</script>

<template>

  <div>
    <div>Firstname: {{ userStore.firstname }}</div>
    <div>lastname: {{ userStore.lastname }}</div>
  </div>
  <div>
    Hello Home
  </div>
</template>
