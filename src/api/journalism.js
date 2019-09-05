import request from '../utilt/requrst'

export const journalism = ({
  channelId,
  timestamp,
  withTop
}) => {
  return request.get('/app/v1_1/articles', {
    params: {
      channel_id: channelId,
      timestamp,
      with_top: withTop
    }
  })
}
