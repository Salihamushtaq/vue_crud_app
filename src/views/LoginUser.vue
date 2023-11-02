<script setup>

</script>

<template>
<div class="group block mx-auto w-1/2 shadow-lg border m-4 mt-5 p-5 rounded-2xl bg-blue-100 " >
<div class="login_box col-sm-8 ">
<h1 class="mb-4 text-xl font-bold bg-blue-300 p-4 rounded-2xl ">Login</h1>
  <form @submit.prevent="submit" >
    <div >
    <label for="email" class=" mt-5">Your Email: *</label>
    <input required type="email" name="email"   class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
    <label for="password" class="mt-5">Password: *</label>
    <input required type="password"  name="password"  class=" mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
<!--      <input type="checkbox" ><span> Remember me</span>-->
      <router-link to="/companies">
            <button class="bg-blue-300 p-2   rounded-full px-4 m-2" type="submit">Submit </button>
      </router-link>

  </div>
  </form>


</div>
</div>

</template>

<style scoped>
body{
background-color: #268686
}

.login_box{
  justify-content: center;
}

</style>