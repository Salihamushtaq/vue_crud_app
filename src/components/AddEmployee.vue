<script setup>

</script>
First name (required)
■ Last name (required)
■ Company (foreign key referencing the "Companies" table)
■ Email
■ Phone
<template>
  <div class="group block mx-auto w-1/2 shadow-lg border m-4 mt-5 p-5 rounded-2xl ">

   <div  class="bg-blue-900 p-4">
      <div class=" p-2">
        <h1 class=" text-xl text-white font-bold">Add Employees</h1>
      </div>
    </div>


    <div class=" m-4">
      <label>First name*</label>
      <input required type="text"  name="emp" class=" mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>

      <label>Last name*</label>
      <input required type="text"  name="emp" class=" mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>

       <label>Company*</label>
        <br>

      <select class="border border-blue-400 p-2 rounded-l rounded-r">
        <option class="border">Select</option>
        <option>company1</option>
        <option>company2</option>
        <option>company3</option>
        <option>company4</option>
      </select>
      <br>
        <br>

       <label>Email*</label>
      <input required type="email"  name="email" class=" mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>

       <label>Phone*</label>
      <input required type="number"  name="phone" class=" mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>


      <button  type="submit" class="rounded-xl bg-blue-200 p-2 px-5 m-3">Add</button>
      <router-link to="/companies"><button  type="submit" class="rounded-xl bg-blue-200 p-2 px-5 m-3">Go to home</button> </router-link>

    </div>
     </div>
</template>

<style scoped>

</style>