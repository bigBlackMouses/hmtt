import request from '@/utils/request'
/**
 * 获取短信验证码
 * @param {number} mobile
 * @return promise
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

/**
 *获取用户个人资料
 * @returns
 */
export const getUserInfo = () => {
  return request({
    url: 'user'
  })
}

/**
 *
 * @returns 用户个人资料
 */
export const getUserProfile = () => {
  return request({
    url: 'user/profile'
  })
}

/**
 *
 * @param {对象 用户个人资料} profile
 * @returns 更新用户个人资料
 */
export const updateUserProfile = (profile) => {
  return request({
    method: 'PATCH',
    url: 'user/profile',
    data: profile
  })
}

/**
 *更新头像
 * @param {裁剪之后的头像数据} data
 * @returns
 */
export const updateAvatar = (data) => {
  return request({
    method: 'PATCH',
    url: 'user/photo',
    data
  })
}
