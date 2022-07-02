<template>
  <div>
    <van-cell
      icon="search"
      v-for="(item, index) in list"
      :key="index"
      @click="$emit('search', item)"
    >
      <!-- 高亮 -->
      <template #title>
        <span v-html="highlight(item)"></span>
      </template>
    </van-cell>
  </div>
</template>

<script>
import { getSuggestList } from '@/api/search'
let timer = null
export default {
  props: {
    searchText: {
      type: String,
      require: true
    }
  },
  created () { },
  data () {
    return {
      list: []
    }
  },
  methods: {
    // 高亮
    highlight (str) {
      const reg = new RegExp(this.searchText, 'g')
      return str.replace(reg, `<span style="color:red">${this.searchText}</span>`)
    }
  },
  computed: {},
  watch: {
    searchText: {
      handler (newVal) {
        clearTimeout(timer)
        timer = setTimeout(async () => {
          try {
            const res = await getSuggestList(newVal)
            this.list = res.data.data.options
          } catch (err) {
            console.log(err)
          }
        }, 900)
      },
      immediate: true
    }
  },
  beforeDestroy () {
    clearTimeout(timer)
  },
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
</style>
