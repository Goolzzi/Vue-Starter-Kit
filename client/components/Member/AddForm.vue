<template>
  <div class='counter-wrapper'>
    <modal name='add-member'>
      <div class='add-modal'>
        <div class='form-group'>
          <label class='control-label' for='name'>Name:</label>
          <div>
            <input type='text' class='form-control' id='name' placeholder='Enter name' name='name' @change='getName' :value='newName'/>
          </div>
        </div>
        <div class='form-group'>
          <label class='control-label' for='occupation'>Occupation:</label>
          <div>
            <input type='text' class='form-control' id='occupation' placeholder='Enter occupation' name='occupation' @change='getOccupation' :value='newOccupation' />
          </div>
        </div>
        <div class='form-group'>
          <div class='text-center'>
            <button class='btn btn-default' @click='addMember'>Add Member</button>
          </div>
        </div>
      </div>
    </modal>
    <button class='form-control btn btn-primary' v-on:click='showModal'><span class='glyphicon glyphicon-plus'>Add Member</span></button>
  </div>
</template>
<style src="./style.css"></style>
<script src="../../js/member/addForm.js"></script>