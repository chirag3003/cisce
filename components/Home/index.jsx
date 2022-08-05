import React from "react";
import HomeCard from "./HomeCard";
import { DocumentReportIcon } from "@heroicons/react/outline";
import Notices from "./Notices";

function HomePage({ data }) {
    return (
        <section className="w-full px-2 lg:px-5">
            <div className="cards lg:flex">
                <HomeCard title="I.C.S.E" data={data.icse} />
                <HomeCard title="I.S.C" data={data.isc} />
            </div>
            <div className="data lg:grid lg:grid-cols-2 w-full p-4">
                <Notices data={data.notices} />
            </div>
        </section>
    );
}

export default HomePage;