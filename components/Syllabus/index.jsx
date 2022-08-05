import { DownloadIcon } from "@heroicons/react/outline";
import React from "react";

function Syllabus({ data,title }) {
    return (
        <div>
            <div className=" p-4 text-gray-300">
                <h1 className="text-4xl text-black font-bold my-5">{title}</h1>
                <ul className="menu bg-base-100 text-white  rounded-box w-full p-2 pt-4 my-4">
                    {data.map((item, index) => {
                        return (
                            <li key={index} className="bg-gray-700 border-b-2 border-black">
                                <a
                                    className="flex"
                                    href={item.link}
                                    download
                                    rel="noreferrer"
                                    target={"_blank"}
                                >
                                    <div className="icon">
                                        <DownloadIcon height={20} width={20} />
                                    </div>
                                    <p>{item.title}</p>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Syllabus;
