import Image from "next/image";

const Footer = () => {
    return (
        <section className="relative w-full bg-cover bg-center bg-[url('/assets/top-back.png')]">
            <div className="max-w-screen-2xl mx-auto py-8">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between bg-[#0a0a0a] bg-opacity-35 p-3">
                    <div className="w-full lg:w-3/4 flex flex-wrap lg:flex-nowrap justify-between lg:justify-evenly mb-6 lg:mb-0">
                        <div className="flex flex-col mb-4 lg:mb-0">
                            <h5 className="font-alef font-bold text-white mb-2">CONNECT</h5>
                            <p className="font-alef text-white mb-1">Lorem ipsum</p>
                            <p className="font-alef text-white">Lorem ipsum</p>
                        </div>
                        <div className="flex flex-col mb-4 lg:mb-0">
                            <h5 className="font-alef font-bold text-white mb-2">HELP</h5>
                            <p className="font-alef text-white mb-1">Lorem ipsum</p>
                            <p className="font-alef text-white">Lorem ipsum</p>
                        </div>
                        <div className="flex flex-col mb-4 lg:mb-0">
                            <h5 className="font-alef font-bold text-white mb-2">COMMUNITY</h5>
                            <p className="font-alef text-white mb-1">Lorem ipsum</p>
                            <p className="font-alef text-white">Lorem ipsum</p>
                        </div>
                        <div className="flex flex-col mb-4 lg:mb-0">
                            <h5 className="font-alef font-bold text-white mb-2">FOLLOW US</h5>
                            <div className="flex items-center gap-4">
                                <Image src="/assets/white-facebook.svg" width={20} height={20} alt="Facebook" />
                                <Image src="/assets/white-twitter.svg" width={20} height={20} alt="Twitter" />
                                <Image src="/assets/white-insta.svg" width={20} height={20} alt="Instagram" />
                                <Image src="/assets/white-pinterest.svg" width={20} height={20} alt="Pinterest" />
                                <Image src="/assets/white-youtube.svg" width={20} height={20} alt="YouTube" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-2/4 flex justify-center lg:justify-end">
                        <button className="w-full sm:w-auto px-6 py-3 bg-white border-2 border-black font-alef font-bold">JOIN US</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;


