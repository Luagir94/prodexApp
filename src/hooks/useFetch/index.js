import React, { useEffect, useState } from 'react'

const useFetch = (endpoint,headers) => {
    const [loading, setLoading] = useState(true)
    const [response, setResponse] = useState([])
    const [error, setError] = useState(null);

useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch(`https://prode-app.herokuapp.com/${endpoint}`, {...headers});
      const json = await res.json();
      console.log(json);
      setResponse(json);
      setLoading(false)
    } catch (error) {
      setError(error);
    }
  };
  fetchData();
}, [url,headers]);

return { response, error, loading }
}

export default useFetch