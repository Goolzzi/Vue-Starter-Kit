<template>
    <div>
        <h3 v-if="members.length > 0">{{members.length}} Member(s)</h3>
        <ul class="list-group">
            <li class="list-group-item" v-for="(member, index) in members" @click = "selectMember(index)" v-bind:class="{ active: isActive }" >
                {{member.name}}
            </li>
        </ul>
        <modal name='edit-member'>
            <div class='add-modal'>
                <div class='form-group'>
                    <label class='control-label' for='name'>Name:</label>
                    <div>
                        <input type='text' class='form-control' id='name' placeholder='Enter name' name='name'  @change='getName' :value='newName'/>
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
                        <button class='btn btn-default' @click="editMember">Edit Member</button>
                    </div>
                </div>
            </div>
        </modal>
    </div>
</template>
<script src="../../js/member/displayMember.js"></script>
<style src="./style.css"></style>