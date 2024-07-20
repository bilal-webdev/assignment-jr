import Image from "next/image";

const TopBanner = () => {
    return (
        <section className="w-full bg-[#FBE2D8] py-4 px-3 sm:py-10">
            <div className="w-full h-full flex flex-col sm:flex-row items-center max-w-screen-2xl mx-auto py-8 sm:py-16">
                <div className="w-full sm:w-1/2 flex justify-center mb-8 sm:mb-0">
                    <Image
                        src="/assets/banner.png"
                        width={500}
                        height={500}
                        alt="banner-img1"
                        className="max-w-full h-auto"
                    />
                </div>
                <div className="w-full sm:w-1/2 flex items-center justify-center">
                    <div className="w-full sm:w-3/4 sm:text-left">
                        <h1 className="font-poller text-4xl sm:text-5xl md:text-6xl leading-tight sm:leading-none">
                            Stay in the <br />Know
                        </h1>
                        <p className="font-alef mt-4 sm:mt-2 text-lg sm:text-base">
                            Dive into the Buzzworthy World of Jungle Rani.
                        </p>
                        <button className="mt-4 sm:mt-0 w-full sm:w-[250px] h-[45px] px-[11px] py-[10px] bg-white border-2 border-black font-alef font-bold">
                            KNOW MORE
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopBanner;
