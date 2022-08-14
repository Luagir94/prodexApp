import React, { useEffect, useState } from 'react'
import axios from 'axios'
const usePost = (endpoint,data,headers) => {
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null);

    const postData= async () =>{
        setLoading(true)
            if (!headers) {
                try {
                    const loginRequest = await axios({
                        method: 'POST',
                        url: `https://prode-app.herokuapp.com/${endpoint}`,
                        data
                      }).then(res => res)
                      setLoading(false)
                      setResponse( loginRequest.data)
                  } catch (error) {
                    setError(error.response.data)
        
                    setLoading(false)
                  }

            } else{
                try {
                    setLoading(true)
                    const loginRequest = await axios({
                        method: 'POST',
                        url: `https://prode-app.herokuapp.com/${endpoint}`,
                        headers,
                        data
                      }).then(res => res.data)
                      setLoading(false)
                      setResponse(loginRequest.data)
                  } catch (error) {
                    setError(error.response.data)
                    setLoading(false)
                  }
            }
    }
    
    const resetHook = () =>{
      setResponse(null)
      setError(null)
    }

    useEffect(() => {
      // error && console.log(error.response.data);
    }, [error])
    
return { response, error, loading, postData, resetHook}
}

export default usePost