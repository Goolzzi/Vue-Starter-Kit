<template>
  <div class='page'>
    <AddGroupForm />
    <DisplayGroup />
  </div>
</template>
<script>
import AddGroupForm from 'components/Group/AddGroupForm.vue'
import DisplayGroup from 'components/Group/DisplayGroup.vue'
export default {
  components: {
    AddGroupForm,
    DisplayGroup
  }
}
</script>
