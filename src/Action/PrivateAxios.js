const axios = require('axios');


const PrivateAxios = (url,list,obj) => {

  return async (dispatch) => {
    if(obj){
      dispatch(list(true, {}, '', '', obj))
    }else{
      dispatch(list(true, [], '', '', obj))
    }
    
    try{
      const resp = await axios.get(url)
      if(resp.data.Response === "True"){
        if(obj){
          dispatch(list(false, resp.data, true, '', obj))
        }else{
          dispatch(list(false, resp.data.Search, true, '', obj))
        }
      }else{
        if(obj){
          dispatch(list(false, {}, false,  resp.data.Error, obj))
        }else{
          dispatch(list(false, [], false,  resp.data.Error, obj))
        }
      }
    }catch(err){
      if(obj){
        dispatch(list(false, {}, false,  err))
      }else{
         dispatch(list(false, [], false,  err))
      }
    }
  
    
  }
}
export default PrivateAxios