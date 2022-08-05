import { DownloadIcon } from "@heroicons/react/outline";
import React from "react";

function Downloads({ groups }) {
    console.log(groups);
    return (
        <div className="w-full">
            <div className="downloads p-4 ">
                {groups.map((group, index) => {
                    return (
                        <ul
                            key={index}
                            className="menu bg-base-100 text-white  rounded-box w-full p-2 pt-4 my-4"
                        >
                            <h2 className="text-lg mb-4">{group.title}</h2>
                            {group.links.map((item, index) => {
                                return (
                                    <li key={index} className="bg-gray-700 border-b-2 border-black">
                                        <a
                                            className="flex"
                                            href={`https://cisce.org/${item.href}`}
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
                    );
                })}
            </div>
        </div>
    );
}

export default Downloads;
