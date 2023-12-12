import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,Autoplay } from 'swiper/modules';
import 'swiper/css';
import { useQuery } from 'react-query';
import './categories.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';
function Categories() {

  const getCategories = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/categories/active?limit=5`)
    return data;
  }

  const { data, isLoading } = useQuery('web_categories', getCategories)

  if (isLoading) {
    return <h2>loading...</h2>
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='swiper-custom-pagination'></div>
        <Swiper
          modules={[Navigation, Pagination,Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          loop={true}
          autoplay={{
            delay: 2000
          }}
          pagination={{ 
            clickable: true,
            el:'.swiper-custom-pagination'
           }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {data?.categories.length ? data?.categories.map((cat) =>
            <SwiperSlide>
              <Link to={`/products/category/${cat._id}`}>
                <div className='category'>
                  <img src={cat.image.secure_url} className='rounded-circle'/>
                  <h2>{cat.name}</h2>
                </div>
              </Link>
            </SwiperSlide>
        ) : "no category"}

        </Swiper>
      </div>
    </div>
  )
}

/*{data?.categories.length ? data?.categories.map((cat) =>
          <div className='col-lg-4' key={cat._id}>
            <img src={cat.image.secure_url} />
            <h2>{cat.name}</h2>
          </div>
        ) : "no category"} */
export default Categories