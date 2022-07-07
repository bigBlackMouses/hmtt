<template>
  <van-field
    v-model.trim="message"
    rows="2"
    autosize
    type="textarea"
    maxlength="50"
    placeholder="请输入留言"
    show-word-limit
    class="add-field"
    ref="field"
  >
    <template #extra>
      <van-button type="default" :disabled="message === ''" @click="onClick">
        发布
      </van-button>
    </template>
  </van-field>
</template>

<script>
import { addComment } from '@/api/comment'
export default {
  props: {
    target: {
      type: [String, Number],
      required: true
    },
    art_id: {
      type: [String, Number]
    }
  },
  created () { },
  data () {
    return {
      message: ''
    }
  },
  // dom 准备好 可以找到textarea
  mounted () {
    // 组件最终会变成dom结构 $el可以获取这个组件的根标签dom
    this.$refs.field.$el.querySelector('textarea').focus()
  },
  methods: {
    async onClick () {
      try {
        const res = await addComment({
          target: this.target,
          content: this.message,
          art_id: this.art_id
        })
        console.log(res)
        this.$emit('add-comment', res.data.data.new_obj)
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.add-field {
  align-items: center;
  button {
    border: none;
  }
}
</style>
