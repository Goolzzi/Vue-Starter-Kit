export default{
  data: function () {
    return ({
      isActive: false
    })
  },
  methods: {
    getName (e) {
      this.$store.dispatch('getName', e.target.value)
    },
    getOccupation (e) {
      this.$store.dispatch('getOccupation', e.target.value)
    },
    showModal () {
      this.isActive = true
      this.$modal.show('edit-member')
    },
    hideModal () {
      this.$modal.hide('edit-member')
      this.isActive = false
    },
    selectMember: function (index) {
      this.showModal()
      this.$store.dispatch('setCurrentMember', index)
    },
    editMember () {
      this.$store.dispatch('editMember')
      this.$store.dispatch('clearMember')
      this.hideModal()
    }
  },
  computed: {
    members () {
      return this.$store.getters.members
    },
    newName () {
      return this.$store.getters.name
    },
    newOccupation () {
      return this.$store.getters.occupation
    }
  }
}
