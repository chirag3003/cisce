import React from "react";
import HomeCard from "./HomeCard";
import { InformationCircleIcon } from "@heroicons/react/outline";
import Notices from "./Notices";
import { Swiper, SwiperSlide } from "swiper/react";
import { images } from "next.config";
import Banner from "./Banner";

function HomePage({ data }) {
    return (
        <section className="w-full px-2 lg:px-5">
            <div className="alert bg-yellow-200 text-yellow-600 mt-0 shadow-lg">
                <div>
                    <InformationCircleIcon height={30} width={30} />
                    <span>
                        This is not the official CISCE Website.{" "}
                        <a className="underline" href="https://cisce.org">Click Here</a> to visit the official website!
                    </span>
                </div>
            </div>
            <div className="heading text-xl font-bold pl-3 my-9">
                <h1>
                    {'"'} Welcome 👋, to a much better CISCE website {'"'}
                </h1>
            </div>
            <div className="cards lg:flex">
                <HomeCard title="I.C.S.E" data={data.icse} />
                <HomeCard title="I.S.C" data={data.isc} />
            </div>
            {/* <Banner images={data.images} /> */}
            <div className="data lg:grid lg:grid-cols-2 w-full p-4">
                <Notices data={data.notices} />
            </div>
        </section>
    );
}

export default HomePage;
