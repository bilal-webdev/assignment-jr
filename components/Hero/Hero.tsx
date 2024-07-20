const Hero = () => {
    return (
        <div className="relative w-full h-5/6 bg-[url('/assets/top-back.png')] bg-cover">
            <div className="absolute w-full h-full bg-[#FCDBDB] bg-opacity-35 flex items-end">
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full sm:w-5/6 flex flex-col sm:flex-row justify-between items-center sm:items-end py-10 max-w-screen-2xl mx-auto px-4 sm:px-0">
                    <h1 className="font-poller text-6xl sm:text-7xl lg:text-8xl text-white text-stroke leading-none text-center sm:text-left">
                        <span className="block">Jungle</span>
                        <span className="block">Rani</span>
                    </h1>
                    <button className="mt-4 sm:mt-0 w-full sm:w-[250px] h-[45px] px-[11px] py-[10px] bg-white border-2 border-black font-alef font-bold">
                        REGISTER YOURSELF
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
