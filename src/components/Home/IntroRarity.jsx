import { LazyLoadImage } from "react-lazy-load-image-component";

const IntroRarity = () => {
    return (
        <section className="relative mt-10 md:mt-24">
            <div className="overflow-hidden  py-24 sm:py-32">
                <div className="mx-auto max-w-7xl bg-slate-50 px-0 md:bg-transparent md:px-6 lg:px-8">
                    <div className="mx-auto flex flex-col rounded-3xl bg-slate-50 py-24 lg:mx-0 ">
                        <div className="relative flex h-52 w-full justify-center sm:h-64 md:h-80 lg:h-96">
                            <LazyLoadImage
                                src="https://img.freepik.com/free-vector/people-shopping-store-mall-market_107791-15609.jpg?w=1380&t=st=1695176693~exp=1695177293~hmac=b3ad1f0e9b2290d017db45f92b17c9f431ddab625e31f5f558e76045bf8c02b5"
                                width="100%"
                                // effect="blur"
                                alt="Image Alt"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="px-6 pt-16 md:px-0">
                            <div className="text-center">
                                <h1 className="m-auto text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:max-w-3xl">
                  <span className="block text-violet-500 lg:inline">
                    Using
                  </span>{" "}
                                    Korea Market
                                </h1>
                                <p className="mx-auto max-w-2xl pt-12 text-lg leading-8 text-gray-900">
                                    Discover the World of Korea Market today! Your one-stop destination for authentic Korean treasures and unique finds. Shop with ease, explore diverse categories, and connect with sellers worldwide. Don't miss out—start your Korea Market adventure now. Join us to experience the best of Korean culture and craftsmanship. Your next great discovery is just a click away
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroRarity;