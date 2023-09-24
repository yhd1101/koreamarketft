import React, {useState} from 'react';
import ErrorMessage from "../../components/ui/ErrorMessage";
import {useParams} from "react-router-dom";
import useFetchProductById from "../../services/fetchProductById";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Thumbs} from "swiper";
import Button from "../../components/ui/Button";
import {RadioGroup} from "@headlessui/react";

const ProductDetail = () => {
    const { id } = useParams()
    const { data, isLoading, error} = useFetchProductById(id)
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    console.log("0000000000000", data)

    // Error Message
    if (error)
        return (
            <div className="mt-20">
                <ErrorMessage />
            </div>
        );

    return (
        <div className="bg-white">
            <div className="mx-auto mb-32 max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 ">
                    {/* image */}
                    <div>
                        <Swiper
                            spaceBetween={10}
                            navigation={true}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Thumbs]}
                            className="mySwiper2"
                        >
                            {data?.productImg.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <div className="relative overflow-hidden rounded-2xl bg-gray-100 pt-[100%]">
                                        <div className="absolute inset-0 translate-x-1/2 translate-y-1/2">
                                            <LazyLoadImage
                                                src={img}
                                                alt={data.desc}
                                                effect="blur"
                                                className="absolute top-0 left-0 h-full w-auto -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-75"
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        {/*<Swiper*/}
                        {/*    onSwiper={setThumbsSwiper}*/}
                        {/*    spaceBetween={16}*/}
                        {/*    slidesPerView={4}*/}
                        {/*    freeMode={true}*/}
                        {/*    watchSlidesProgress={true}*/}
                        {/*    modules={[FreeMode, Thumbs]}*/}
                        {/*    className="mySwiper mt-4"*/}
                        {/*>*/}
                        {/*    {data?.productImg?.map((img, index) => (*/}
                        {/*        <SwiperSlide key={index}>*/}
                        {/*            <div className="relative overflow-hidden rounded-2xl bg-gray-100 pt-[100%]">*/}
                        {/*                <div className="absolute inset-0 translate-x-1/2 translate-y-1/2">*/}
                        {/*                    <LazyLoadImage*/}
                        {/*                        src={img}*/}
                        {/*                        alt={data.desc}*/}
                        {/*                        effect="blur"*/}
                        {/*                        className="absolute top-0 left-0 h-full w-auto -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-75"*/}
                        {/*                    />*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </SwiperSlide>*/}
                        {/*    ))}*/}
                        {/*</Swiper>*/}

                    </div>
                    {/* Product info */}
                    <div className="mx-auto w-full pl-0 pt-10 pb-16 lg:pl-8 lg:pt-0 lg:pb-24">
                        {/* Title */}
                        <div className=" lg:border-gray-200 lg:pr-8">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                                {data?.name}
                            </h1>
                        </div>
                        <div className="mt-4 lg:mt-0">
                            <h2 className="sr-only">Product information</h2>
                            <p className="mt-4 text-3xl tracking-tight text-gray-900">
                                ${data?.price}
                            </p>
                        </div>

                        <div className="mt-10">
                            <div className=" lg:border-gray-200 lg:pr-8">
                                <p className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                                    Location: {data?.region}
                                </p>
                            </div>
                        </div>
                        <div className="mt-10">
                            <div className=" lg:border-gray-200 lg:pr-8">
                                <p className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                                    {data?.category?.map((c, index) => (
                                        <button
                                            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                            {c}
                                        </button>
                                    ))}
                                </p>
                            </div>

                        </div>


                        <Button
                            text="Reservation"
                            // onClick={() => {
                            //     const id = ?.id;
                            //     const image = productData?.image[0];
                            //     const title = productData?.title;
                            //     const price = productData?.price;
                            //     return checkCartItem({
                            //         id,
                            //         image,
                            //         title,
                            //         price,
                            //     });
                            // }}
                            className="mt-10 flex max-h-[44px] w-full items-center justify-center rounded-md border border-transparent bg-violet-500 py-2 px-8 text-base font-medium leading-7 text-white hover:bg-violet-600"
                        />
                        {/*    /!*</div>*!/*/}
                        {/*</div>*/}


                        {/*<div className="py-10 lg:border-gray-200 lg:pt-6 lg:pb-16">*/}
                        {/*    /!* Description and details *!/*/}

                        {/*        /!*<div className="mt-4">*!/*/}
                        {/*        /!*    <ul*!/*/}
                        {/*        /!*        role="list"*!/*/}
                        {/*        /!*        className="list-disc space-y-2 pl-4 text-sm"*!/*/}
                        {/*        /!*    >*!/*/}
                        {/*        /!*        {productData?.highlights?.map((highlight: string) => (*!/*/}
                        {/*        /!*            <li key={highlight} className="text-gray-400">*!/*/}
                        {/*        /!*                <span className="text-gray-600">{highlight}</span>*!/*/}
                        {/*        /!*            </li>*!/*/}
                        {/*        /!*        ))}*!/*/}
                        {/*        /!*    </ul>*!/*/}
                        {/*        /!*</div>*!/*/}
                        {/*    </div>*/}

                        {/*    <div className="mt-10">*/}
                        {/*        <h2 className="text-sm font-medium text-gray-900">Details</h2>*/}

                        {/*        <div className="mt-4 space-y-6">*/}
                        {/*            <p className="text-sm text-gray-600">*/}
                        {/*                {data?.desc}*/}
                        {/*            </p>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}

                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;