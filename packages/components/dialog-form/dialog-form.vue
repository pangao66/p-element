<template>
  <pl-dialog
    v-loading.fullscreen.lock="fullscreenLoadingStatus"
    :close-on-press-escape="false"
    v-bind="attrs"
    v-on="$listeners"
  >
    <pl-form
      ref="form"
      v-model="form"
      v-bind="formConfig"
      :form-items="formItems"
      :show-submit="false"
      :async-init-value="asyncInitValue"
      class="pl-dialog-form"
    >
      <template v-for="slot in Object.keys($scopedSlots)" v-slot:[slot]="scope">
        <slot :name="slot" v-bind="scope" />
      </template>
    </pl-form>
    <template #footer>
      <el-button @click="$emit('close')">
        取消
      </el-button>
      <pl-button type="primary" @click="submit">
        确定
      </pl-button>
    </template>
  </pl-dialog>
</template>

<script>
export default {
  name: 'PlFormDialog',
  inheritAttrs: false,
  props: {
    formItems: {
      type: Array,
      default: () => []
    },
    value: {
      type: Object,
      default: () => ({})
    },
    formConfig: {
      type: Object,
      default: () => ({})
    },
    asyncInitValue: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      form: this.value,
      fullscreenLoadingStatus: false
    }
  },
  computed: {
    attrs() {
      return {
        'element-loading-text': '数据处理中',
        'element-loading-spinner': 'el-icon-loading',
        'element-loading-background': 'rgba(0, 0, 0, 0.8)',
        center: true,
        ...this.$attrs
      }
    }
  },
  methods: {
    async submit() {
      try {
        const res = await this.$refs.form.submitForm()
        this.fullscreenLoadingStatus = true
        this.$emit('submit', res, () => {
          this.fullscreenLoadingStatus = false
        })
      } catch (e) {}
    },
    handleForm(...args) {
      return this.$refs.form.handleForm(...args)
    }
  }
}
</script>
<style lang="stylus">
.pl-dialog-form {
  .el-input__inner {
    width: 100%;
  }
  .el-select {
    width: 100%;
  }
}
</style>
