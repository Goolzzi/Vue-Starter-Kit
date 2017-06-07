<template>
  <div class='counter-wrapper'>
    <input class='form-control' id='name' placeholder='Enter group name' @change='getGroupName' :value='newGroupName'/>
    <button class='btn btn-default' @click='addGroup'>Add Group</button>
  </div>
</template>
<script src="../../js/group/addGroupForm"></script>
<style src='./style.css'></style>


