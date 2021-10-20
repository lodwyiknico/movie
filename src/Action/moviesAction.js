import PrivateAxios from './PrivateAxios'
export const BASE_URL = "http://www.omdbapi.com/?apikey=c9b64253&"

const list = (bool, data, stat, msg,obj) => {
  return {
    type: "LIST_PAGE",
    load: bool,
    data,
    stat,
    msg,
    obj
  }
}

export function getMoviesPage(data,obj) {
  let url = BASE_URL +  `${obj? 'i':'s'}=${!obj ? data||'man':data}`
  return PrivateAxios(url, list, obj)
}