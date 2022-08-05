import { DocumentReportIcon } from "@heroicons/react/outline";
import React from "react";

function Notices({ data }) {
    return (
        <div className="notice-board ">
            <ul className="menu bg-base-100 text-white  rounded-box w-full p-2">
                {data.map((item, index) => {
                    return (
                        <li key={index} className="bg-gray-700 border-b-2 border-black">
                            <a className="flex" href={item.href}>
                                <div className="icon">
                                    <DocumentReportIcon height={20} width={20} />
                                </div>
                                <p>{item.title}</p>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Notices;
