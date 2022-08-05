import React, { useState } from "react";

function HomeCard({ title = "", data }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="p-4 w-full lg:w-auto">
            <button
                className="card lg:w-96  text-gray-50 text-left w-full bg-rose-300 shadow-xl "
                onClick={() => setOpen(!open)}
            >
                <div className="card-body">
                    <h2 className="card-title text-white font-bold">{title}</h2>
                    <p className=" font-medium text-left">{data.title}</p>
                    {open && (
                        <div className="menu-toggle">
                            <p>{data.description}</p>
                            <div className="links my-3 rounded bg-rose-400 px-5 py-2">
                                <ul className="list-disc">
                                    {data.links.map((link, index) => {
                                        return (
                                            <li key={index} className={"my-3"}>
                                                <a
                                                    rel="noreferrer"
                                                    target={"_blank"}
                                                    href={link.href}
                                                >
                                                    {link.title}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </button>
        </div>
    );
}

export default HomeCard;
