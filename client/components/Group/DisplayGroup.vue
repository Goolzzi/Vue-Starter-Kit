<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item" v-for="(group, index) in groups" @click="selectGroup(index)">
                {{group.name}}<span class='badge pull-right'>{{ group.members.length }}</span>
            </li>
        </ul>
    </div>
</template>
<script src="../../js/group/displayGroup.js"></script>
<style src='./style.css'></style>