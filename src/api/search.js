import request from '@/utils/request'
/**
 *搜索联想数据列表
 * @param {搜索关键字} q
 * @returns
 */
export const getSuggestList = q => {
  return request({
    url: 'suggestion',
    params: { q }
  })
}

/**
 *获取搜索结果列表
 * @param page 当前是第几页, per_age 每页数量, q搜索关键字
 * @returns
 */
// eslint-disable-next-line camelcase
export const getSearchResult = ({ page = 1, per_page, q }) => {
  return request({
    url: 'search',
    params: {
      page, per_page, q
    }
  })
}
