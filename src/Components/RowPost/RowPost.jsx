import React from 'react'
import { useEffect , useState } from 'react'
import axios from '../../axios'
import { imageUrl , API_KEY} from '../../constants/constants'
import YouTube from 'react-youtube'
import './RowPost.css'

function RowPost(props) {

  const [movies , setMovies ] = useState([])
  const [urlId , setUrlId ] = useState('')

  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      console.log(response.data.results[0]);
      setMovies(response.data.results)
    }).catch((error)=>{
      // alert('Network Error'+error.message)
    })
  },[])
  
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  function handleMovie(id){
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      if(response.data.results.length !== 0 ){
        setUrlId(response.data.results[0].key)
      }else{

      }
      console.log(response.data.results[0].key);
    })
  }

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        
        {
          movies.map((obj)=>
          <div className='img-div'>
            <img key={obj.id} onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'small-poster' :'poster'} src={imageUrl + obj.backdrop_path} alt="poster" />
            </div>
          )
        }
       
      </div>
    { urlId && <YouTube videoId={urlId} opts={opts} />}  
    </div>
  )
}

export default RowPost