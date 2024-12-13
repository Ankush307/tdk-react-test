import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { cardData } from '../../utils/Helper';



const CardSwiper = () => { 
    return (
        <div className="w-full max-w-[1140px] mx-auto md:py-[120px] py-[60px]">
            <Swiper
                slidesPerView={3}
                center={true}
                spaceBetween={10}
                loop={true}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 10 },
                    640: { slidesPerView: 2, spaceBetween: 15 },
                    1024: { slidesPerView: 3, spaceBetween: 20 },
                    1440: { slidesPerView: 4, spaceBetween: 30 },
                }}
                className="mySwiper"
            >
                {cardData.map((card) => (
                    <SwiperSlide key={card.id} className="p-4">
                        <>
                            <img src={card.imgSrc} alt={card.title} className="w-full rounded-lg object-cover" />
                        </>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CardSwiper;
