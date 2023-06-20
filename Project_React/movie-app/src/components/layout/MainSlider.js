import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const baseURL = 'https://api.themoviedb.org/3/discover/movie/';
const apiKey = 'b03d508a9e788070ca877f98f3f8bbba';
const imgBaseURL = "https://image.tmdb.org/t/p/w500";

function MainSlider() {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);


  async function fetchData() {
      axios.get(baseURL, {
        params: {
          api_key: apiKey,
          page: 1,
        }
      })
        .then(response => {
          setMovies(response.data.results);
        })
        .catch(error => {
          setError(error.message);
        })
  };

  useEffect( () => {
    fetchData()
  }, []);
  
  if (error) {
    return (<div className="error"> <h2>{ error }</h2></div>)
  } else if (movies) {
    const items = movies.map((movie, index) => {
      if (index <= 5) {
        return <SwiperSlide key={index}>
          <Link to={ "/movie/" + movie.id } >
            <img src={imgBaseURL + movie.poster_path} alt={movie.title} />
          </Link>
        </SwiperSlide>
      }
      return null;
    });

    return (
      <Swiper 
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      >
        {items}
      </Swiper>
    )
  }
}

export default MainSlider;