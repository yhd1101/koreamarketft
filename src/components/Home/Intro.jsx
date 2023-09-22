import { LazyLoadImage } from "react-lazy-load-image-component";
import ImagePlaceholder from "../ui/ImagePlaceholder";

const Intro = () => {
    return (
        <section className="mt-16 bg-slate-50 md:mt-32">
            <div className="mx-auto max-w-7xl">
                <div className="relative overflow-hidden px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl pt-16 sm:pt-20 lg:pt-24">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                What is Korea Market?
                            </h1>
                            <p className="mt-8 text-lg leading-6 text-violet-500">
                                For Koreans Abroad: Your International Direct Trading Hub
                            </p>
                            <div className="relative pt-12 text-lg leading-8 text-gray-900">
                                <p>
                                    Korea Market is a second-hand trading site for Koreans in the U.S.
                                    and Canada, and other foreigners can also use this site, even if they
                                    are not Koreans. This site is also a safe site where you can search
                                    for jobs and evaluate reliability.
                                    Korea Market offers multiple categories and provides convenient options
                                    for selecting your desired location, time, and more. It's your go-to platform
                                    for hassle-free transactions.
                                    merchandise.
                                    <br />
                                    Join us in spreading joy and playfulness!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative inline-block w-full after:absolute after:-bottom-48 after:left-1/2  after:block after:h-72 after:w-72 after:-translate-x-1/2 after:rounded-full after:bg-pink-300">
                        <LazyLoadImage
                            src="https://cdn.pixabay.com/photo/2016/09/30/19/10/ecommerce-1706103_1280.png"
                            width={800}
                            height={400}
                            placeholder={<ImagePlaceholder />}
                            alt="Image Alt"
                            className="relative -bottom-2 z-10 mx-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;