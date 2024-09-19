import {useState,useEffect} from 'react'
import { fetchDataFromApi } from '../Utils/api';




const useFetch=(url)=> {
    const [loding,setLoading]=useState(null);
    const [error,setError]=useState(null);
    const [data,setData]=useState(null)



    useEffect(() => {
        setLoading("Loading...")
        setData(null)
        setError(null)
        fetchDataFromApi(url).then((res) => {
            setLoading(false);
            setData(res);
          }).catch((err)=>{
            setLoading(false);
            setError("some thing went wrong");

          })
      },[url]);
 
  return{data,loding,error};
}

export default useFetch












