// 本地存储
export const setItem = (key, item) => {
  window.localStorage.setItem(key, JSON.stringify(item))
}
// 本地取值
export const getItem = key => {
  return JSON.parse(window.localStorage.getItem(key))
}
// 本地删除
export const removeItem = key => {
  window.localStorage.removeItem(key)
}
