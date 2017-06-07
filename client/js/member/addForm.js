import Vue from 'vue'
import vmodal from 'vue-js-modal'
Vue.use(vmodal)

export default {
  methods: {
    getName (e) {
      this.$store.dispatch('getName', e.target.value)
    },
    getOccupation (e) {
      this.$store.dispatch('getOccupation', e.target.value)
    },
    showModal () {
      this.$modal.show('add-member')
    },
    hideModal () {
      this.$modal.hide('add-member')
    },
    addMember () {
      this.$store.dispatch('addMember')
      this.$store.dispatch('clearMember')
      this.hideModal()
    }
  },
  computed: {
    newName () {
      return this.$store.getters.name
    },
    newOccupation () {
      return this.$store.getters.occupation
    }
  }
}
