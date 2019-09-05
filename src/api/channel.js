import request from '../utilt/requrst'

export const channel = () => {
  return request.get('/app/v1_0/user/channels')
}
