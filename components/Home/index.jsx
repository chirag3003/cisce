import React from "react";
import HomeCard from "./HomeCard";

function HomePage({ data }) {
    return (
        <section className="w-full px-2 lg:px-5">
            <div className="cards lg:flex">
                <HomeCard title="I.C.S.E" data={data.icse} />
                <HomeCard title="I.S.C" data={data.isc} />
            </div>
        </section>
    );
}

export default HomePage;
