import Image from "next/image";

const details = [
    "/assets/poster-one.png",
    "/assets/poster-two.png",
    "/assets/poster-one.png",
    "/assets/poster-two.png",
]

const LeftSection = () => {
    return (
        <div className="w-full sm:w-3/4 flex flex-col">
            {details.map((items: string, index: number) => {
                return (
                    <div className="py-3 px-5 mt-4 flex flex-col lg:flex-row items-center justify-center bg-[rgba(246,246,246,0.7)]" key={index}>
                        <div className="px-4 lg:px-12 lg:mb-0">
                            <div className="flex flex-col lg:flex-row justify-between lg:items-center">
                                <div className="flex items-center h-auto mb-4 lg:mb-0">
                                    <div className="relative rounded-full w-8 h-8 border-3 border-black overflow-hidden">
                                        <Image className="object-cover w-full h-full" src="/assets/profile-img.png" width={40} height={40} alt="profile-img" />
                                    </div>
                                    <p className="font-alef text-base m-0 pl-2">Riya Rathor, Malkangiri</p>
                                </div>
                                <div className="flex items-center h-auto text-gray-800" style={{ fontSize: "16px", lineHeight: "40px" }}>
                                    <p className="font-alef text-sm m-0 pl-2">Dec 21, 2023</p>
                                    <span className="font-material px-3">horizontal_rule</span>
                                    <span className="font-material">schedule</span>
                                    <p className="font-alef text-sm m-0 pl-2">2 minute read</p>
                                </div>
                            </div>
                            <div className="mt-2">
                                <h1 className="font-poller text-2xl">Lorem ipsum dolor sit amet fgm.</h1>
                                <p className="font-alef text-xl">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div className="flex justify-between mt-2">
                                <div className="flex text-gray-800" style={{ fontSize: "16px", lineHeight: "40px" }}>
                                    <span className="font-material">equalizer</span>
                                    <p className="font-alef m-0 pl-2">1.6K views</p>
                                </div>
                                <div className="flex text-gray-800" style={{ fontSize: "16px", lineHeight: "40px" }}>
                                    <div className="flex items-center">
                                        <Image className="mr-3" src="/assets/facebook.svg" width={16} height={16} alt="pint" />
                                        <Image className="mr-3" src="/assets/twitter.svg" width={16} height={16} alt="pint" />
                                        <Image className="mr-3" src="/assets/pinterest.svg" width={16} height={16} alt="pint" />
                                    </div>
                                    <p className="font-alef m-0">1.2K shares</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Image src={items} width={250} height={250} alt="poster" />
                        </div>
                    </div>
                )
            })}

            <div className="w-full sm:w-2/3 py-3 px-4 sm:px-20 mt-4 flex flex-wrap justify-around">
                {[1, 2, 3, 4, 5].map((item) => (
                    <button key={item} className={`py-1 px-3 border border-black bg-white font-alef text-lg font-bold ${item === 3 ? 'text-gray-500' : ''}`}>
                        {item}
                    </button>
                ))}
                <button className="py-1 px-3 border border-black bg-white font-alef text-lg font-bold">Next Page</button>
            </div>
        </div>
    )
}

export default LeftSection;
