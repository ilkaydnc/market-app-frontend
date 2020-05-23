<template>
  <el-dialog
    title="Shipping address"
    :visible="visible"
    :close-on-press-escape="true"
    :close-on-click-modal="true"
    @close="toggleModal(false)"
  >
    <el-form :model="form">
      <el-form-item label-position="top" label="Promotion name">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label-position="top" label="Promotion name">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label-position="top" label="Promotion name">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label-position="top" label="Zones">
        <el-select v-model="form.region" placeholder="Please select a zone">
          <el-option label="Zone No.1" value="shanghai"></el-option>
          <el-option label="Zone No.2" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="toggleModal(false)">Cancel</el-button>
      <el-button type="primary" @click="toggleModal(false)">Confirm</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      formLabelWidth: '120px',
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
    }
  },
  computed: {
    visible() {
      return this.$store.state.sales.visibleModal
    },
  },
  methods: {
    toggleModal(isOpen) {
      this.$store.commit('sales/TOGGLE_MODAL', isOpen)
    },
  },
}
</script>

<style></style>
