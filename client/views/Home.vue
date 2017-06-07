<template>
  <div class='container'>
    <h1 class='text-center'>Welcome</h1>
    <Group class='col-sm-4' />
    <Member class='col-sm-8' v-if=''/>
  </div>
</template>
<script>
import Group from './Group.vue'
import Member from './Member.vue'
export default {
  components: {
    Group,
    Member
  }
}
</script>
