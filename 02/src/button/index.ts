import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'SButton',
  render() {
    // return h('button', this.$slots.default())
    return h('button', null, 'MyButton')
  }
})