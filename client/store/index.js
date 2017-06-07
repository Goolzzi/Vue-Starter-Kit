import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    groups: [],
    currentGroupIndex: -1,
    currentMemberIndex: -1,
    newGroupName: '',
    newMemberName: '',
    newMemberOccupation: ''
  },
  mutations: {
    GET_GROUP (state, name) {
      state.newGroupName = name
    },
    ADD_GROUP (state) {
      state.groups.push({
        name: state.newGroupName,
        members: []
      })
    },
    CLEAR_GROUP (state) {
      state.newGroupName = ''
    },
    SET_CURRENT_GROUP (state, index) {
      state.currentGroupIndex = index
    },
    SET_CURRENT_MEMBER (state, index) {
      state.currentMemberIndex = index
      const currentGroup = state.groups[state.currentGroupIndex]
      const currentMember = currentGroup.members[state.currentMemberIndex]
      state.newMemberName = currentMember.name
      state.newMemberOccupation = currentMember.occupation
    },
    GET_NAME (state, name) {
      state.newMemberName = name
    },
    GET_OCCUPATION (state, occupation) {
      state.newMemberOccupation = occupation
    },
    ADD_MEMBER (state) {
      const currentGroup = state.groups[state.currentGroupIndex]
      const newMember = {
        name: state.newMemberName,
        occupation: state.newMemberOccupation
      }
      currentGroup.members.push(newMember)
    },
    EDIT_MEMBER (state) {
      const currentGroup = state.groups[state.currentGroupIndex]
      const currentMember = currentGroup.members[state.currentMemberIndex]
      currentMember.name = state.newMemberName
      currentMember.occupation = state.newMemberOccupation
    },
    CLEAR_MEMBER (state) {
      state.newMemberName = ''
      state.newMemberOccupation = ''
    }
  },

  actions: {
    getGroupName ({ commit }, name) {
      commit('GET_GROUP', name)
    },
    addGroup ({ commit }) {
      commit('ADD_GROUP')
    },
    setCurrentGroup ({ commit }, index) {
      commit('SET_CURRENT_GROUP', index)
    },
    setCurrentMember ({ commit }, index) {
      commit('SET_CURRENT_MEMBER', index)
    },
    getName ({ commit }, name) {
      commit('GET_NAME', name)
    },
    getOccupation ({ commit }, occupation) {
      commit('GET_OCCUPATION', occupation)
    },
    editMember ({ commit }) {
      commit('EDIT_MEMBER')
    },
    addMember ({ commit }) {
      commit('ADD_MEMBER')
    },
    clearMember ({ commit }) {
      commit('CLEAR_MEMBER')
    }
  },

  getters: {
    name: state => state.newMemberName,
    occupation: state => state.newMemberOccupation,
    members: state => state.currentGroupIndex === -1 ? [] : state.groups[state.currentGroupIndex].members,
    groupName: state => state.newGroupName,
    groups: state => state.groups
  }
})
