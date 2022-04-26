import React from "react"
import SwipeableViews from 'react-swipeable-views'
import styles from "./main.module.css"
import CV from "components/cv/cv";
import Portfolio from "components/portfolio/portfolio";
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, SwiperOptions } from "swiper"
import "swiper/css";
import "swiper/css/pagination";
import { PaginationOptions, SwiperEvents } from "swiper/types";

const Main: React.FC<{}> = () => {
    const pagination: PaginationOptions = {
        clickable: true,
        renderBullet: (index: number, className: string) => {
            return `<span class="${className}"></span>`;
        },
    };

    return (
        <main className={styles.main}>
            <Swiper pagination={pagination} modules={[Pagination]} noSwiping autoHeight>
                <SwiperSlide><CV/></SwiperSlide>
                <SwiperSlide><Portfolio/></SwiperSlide>
            </Swiper>
        </main>
    )
}

export default Main;