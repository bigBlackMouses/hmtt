import request from '@/utils/request'
/**
 * 获取短信验证码
 * @returns {number} mobile
 */
export const getSmsCode = (mobile) => {
  return request({
    url: `/sms/codes/${mobile}`
  })
}

/**
 *
 * @param {mobile,code} param0
 * @return promise
 */
export const login = ({ mobile, code }) => {
  return request({
    method: 'POST',
    url: '/authorizations',
    data: {
      mobile, code
    }
  })
}
