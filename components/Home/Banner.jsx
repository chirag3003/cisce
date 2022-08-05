import React from 'react'

function Banner({images}) {
  return (
    <div className="banner">
                <div className={"lg:w-1/2 w-full p-3"}>
                    <div className="carousel w-full">
                        {images.map((img, index) => (
                            <div
                                key={index}
                                id={"slide" + index}
                                className="carousel-item relative w-full"
                            >
                                <img src={img.src} className="w-full rounded-lg" alt={""} />
                                <div className="absolute  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a
                                        href={
                                            "#slide" +
                                            (index == 0 ? images.length - 1 : index - 1)
                                        }
                                        className="btn btn-circle"
                                    >
                                        ❮
                                    </a>
                                    <a
                                        href={
                                            "#slide" +
                                            (index == images.length - 1 ? 0 : index + 1)
                                        }
                                        className="btn btn-circle"
                                    >
                                        ❯
                                    </a>
                                </div>
                                <div className="heading absolute w-full left-0 -bottom-10 p-2 bg-rose-100 opacity-50">
                                    <h2 className="font-bold text-lg">{img.title}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
  )
}

export default Banner