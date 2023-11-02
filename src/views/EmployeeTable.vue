<script setup>
import {TrashIcon, PencilIcon, EyeIcon} from "@heroicons/vue/20/solid";
import TheHeader from "@/components/TheHeader.vue";
</script>

<template>

<TheHeader/>
    <div class="group block mx-auto shadow-lg border m-4 mt-5 p-5 rounded-2xl ">

    <div  class="flex bg-blue-900 p-3 justify-between" >
        <div class="p-2 ">
          <h1 class=" text-xl text-white font-bold">Employees </h1>
        </div>
         <div>
           <router-link to="/addemployee">
          <button class="addButton text-white border border-l-gray-400 rounded-xl p-2 px-3 ">Add</button>
          </router-link>
         </div>
      </div>


    <table class="table-auto w-full">
      <thead class="bg-blue-100 p-4">
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Company Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Action</th>
       </tr>


        <tr>
          <td class="py-2">001</td>
          <td class="py-2">emp1</td>
          <td class="py-2">emp1</td>
          <td class="py-2">tylextech</td>
          <td class="py-2">emp1@gmail.com</td>
          <td class="py-2">0300xxxxx</td>
          <td class="actionIcons flex py-2 ">
            <EyeIcon class="mx-3 h-7 w-5"></EyeIcon>
            <PencilIcon class="mx-3 h-7 w-5"></PencilIcon>
            <TrashIcon class="mx-3 h-7 w-5"></TrashIcon>
          </td>
        </tr>
      </thead>

    </table>
  </div>
</template>

<style scoped>
.actionIcons{
  margin-left: 4rem;
}


</style>
