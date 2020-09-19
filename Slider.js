import React,{useState,useEffect} from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'bootstrap/dist/css/bootstrap.css'
import Slider from 'react-slick'
import './Slider.css'


function SliderCarousel() {

    const [suggestions,setSuggestions] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(data=> setSuggestions(data))
    })

const settings = {
    infinite: false,
    speed: 1000,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1
}

    return (
        <div className='container'>
            {
                suggestions.length ===0 ? 
                (<div className='spinner-border' role='status'>
                    <span className='sr-only'>Loading...</span>
                </div>) : 
            (<Slider {...settings} className='sliderss'>

                {suggestions.map(current=>{
                    return(
                        <div className='out' key={current.id}>
                            <div className='card'>
                            <img className="circle" alt='circle' src={`https://source.unsplash.com/user/user/random/${current.id}`}/>

                           <div className='card_body'>
                               <h5 className='card-title'>{current.username}</h5>
                               <small className='text-muted'> In Your Contact </small>
                               <br/>
                               <button className='btn'>Follow</button>
                           </div>
                       </div>
                  </div>
                )})
                }
          </Slider>
                
            )}
                
        </div>
    )
}

export default SliderCarousel
