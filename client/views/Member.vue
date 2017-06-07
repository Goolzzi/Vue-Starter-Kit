<template>
  <div class='page'>
    <AddForm />
    <DisplayList />
  </div>
</template>
<script>
import AddForm from 'components/Member/AddForm.vue'
import DisplayList from 'components/Member/DisplayList.vue'
export default {
  components: {
    AddForm,
    DisplayList
  }
}
</script>
