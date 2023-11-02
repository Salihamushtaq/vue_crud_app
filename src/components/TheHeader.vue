<script setup>

</script>

<template>
<div class="header bg-blue-200">
  <nav>
    <ul class="font-bold nav-list flex text-blue-950">
      <li>
        <router-link to="/employee">Employees</router-link>
      </li>

      <li>
        <router-link to="/companies">Companies</router-link>
      </li>
    </ul>
  </nav>

</div>

</template>

<style scoped>
  .nav-list{
    justify-content: right;
    color: darkblue;
  }
  .nav-list li{
    margin: 1rem;
  }
</style>