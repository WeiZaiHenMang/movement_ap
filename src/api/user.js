import request from '../utilt/requrst'
// 登陆接口请求
export const login = ({
  mobile,
  code
}) => {
  return request.post('/app/v1_0/authorizations', {
    mobile,
    code
  })
}
export const channel = () => request.get('/app/v1_0/user/channels')
