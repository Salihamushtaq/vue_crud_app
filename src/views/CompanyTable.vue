<script setup>
import TheHeader from "@/components/TheHeader.vue";
</script>


<template>
  <TheHeader/>
    <div class="group block mx-auto  shadow-lg border m-4 mt-5 p-5 rounded-2xl ">

    <div>
    <div  class="bg-blue-900 p-4">
      <div class=" p-2">
        <h1 class=" text-xl text-white font-bold">Company</h1>
      </div>
    </div>
    <table class="table-auto w-full">
      <thead class="bg-blue-100 p-4">
        <tr>
          <th>Id</th>
          <th>Company Name</th>
          <th>Email</th>
          <th>logo</th>
          <th>Company Site</th>
       </tr>


        <tr>
          <td class="py-2">001</td>
          <td class="py-2">company1</td>
          <td class="py-2">comapny1@gmail.com</td>
          <td class="py-2"><img class="h-100 w-100" alt="logo" src=""></td>
          <td class="py-2" alt="URL"> https://vuejs.org/guide/introduction.html </td>


        </tr>
      </thead>


    </table>
  </div>
    </div>
</template>
