const RightSection = () => {
    return (
        <div className="w-full sm:w-1/4 bg-white px-4 py-8 sm:py-0">
            <div className="mt-10">
                <h1 className="font-poller text-xl">Discover More.</h1>
                <div className="mt-4 space-y-3">
                    <div className="flex flex-wrap sm:space-y-0 sm:space-x-2">
                        <button className="bg-[#EFEFEF] pl-3 pr-12 py-2 rounded-full font-alef text-sm block w-full sm:w-auto mb-3 sm:mb-0">Health</button>
                    </div>
                    <div className="flex flex-wrap sm:space-y-0 sm:space-x-2">
                        <button className="bg-[#EFEFEF] pl-3 pr-12 py-2 rounded-full font-alef text-sm block w-full sm:w-auto mb-3 sm:mb-0">Ayurveda</button>
                        <button className="bg-[#EFEFEF] pl-3 pr-12 py-2 rounded-full font-alef text-sm block w-full sm:w-auto mb-3 sm:mb-0">Labor</button>
                    </div>
                    <div className="flex flex-wrap sm:space-y-0 sm:space-x-2">
                        <button className="bg-[#EFEFEF] pl-3 pr-12 py-2 rounded-full font-alef text-sm block w-full sm:w-auto mb-3 sm:mb-0">Mobile Awareness</button>
                    </div>
                    <div className="flex flex-wrap sm:space-y-0 sm:space-x-2">
                        <button className="bg-[#EFEFEF] pl-3 pr-12 py-2 rounded-full font-alef text-sm block w-full sm:w-auto mb-3 sm:mb-0">Ayurveda</button>
                        <button className="bg-[#EFEFEF] pl-3 pr-12 py-2 rounded-full font-alef text-sm block w-full sm:w-auto mb-3 sm:mb-0">Labor</button>
                    </div>
                </div>
                <h1 className="font-poller text-xl mt-5">Publish and share your story too</h1>
                <button className="w-full sm:w-auto px-6 py-3 mt-2 bg-white border-2 border-black font-alef font-bold">CREATE YOUR BLOG</button>
            </div>
        </div>
    )
}

export default RightSection;

