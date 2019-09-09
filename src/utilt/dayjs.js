// 时间组件
import dayjs from 'dayjs'

import relativeTime from 'dayjs/plugin/relativeTime'

import 'dayjs/locale/zh-cn' // 按需加载

dayjs.locale('zh-cn') // 全局使用西班牙语

dayjs.extend(relativeTime)

export const fmday = (val) => {
  return dayjs().to(dayjs(val)) // 2 年以前
}
