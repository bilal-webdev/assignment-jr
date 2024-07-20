const LowerBanner = () => {
    return (
        <section className="w-full h-auto bg-[#FBE2D8] py-8 sm:py-16">
            <div className="w-full max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8">
                <div className="w-full lg:w-[75%] flex items-center justify-start px-4 lg:px-5">
                    <div className="w-full lg:w-2/3 px-4 lg:px-10">
                        <h1 className="font-poller text-4xl lg:text-6xl">Publish Your Story</h1>
                        <p className="font-alef text-base lg:text-lg">Ready to share your stories? Start designing your blog here and let your voice shine!</p>
                    </div>
                </div>
                <div className="w-full lg:w-[25%] mt-6 lg:mt-0 flex flex-col items-center lg:items-start">
                    <button className="w-full lg:w-[250px] h-[45px] px-[11px] py-[10px] bg-white mt-3 border-2 border-black font-alef font-bold">CREATE YOUR BLOG</button>
                    <button className="w-full lg:w-[250px] h-[45px] px-[11px] py-[10px] bg-white mt-3 border-2 border-black font-alef font-bold">SHARE A LINK</button>
                </div>
            </div>
        </section>
    )
}

export default LowerBanner;

