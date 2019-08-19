export const newtime = (data, spe) => {
  let year = data.getFullYear()
  let month = data.getMonth() + 1
  let day = data.getDate()
  let shi = data.getHours()
  let fen = data.getMinutes()
  let miao = data.getSeconds()
  return year + spe + month + spe + day + spe + shi + ':' + fen + ':' + miao
}
