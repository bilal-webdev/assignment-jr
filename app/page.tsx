import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-5/6 bg-[url('/assets/top-back.png')] bg-cover">
        <div className="absolute w-full h-full bg-[#FCDBDB] bg-opacity-35">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-5/6 flex justify-between items-end py-10 max-w-screen-2xl mx-auto">
            <h1 className="font-poller text-8xl text-white text-stroke leading-none">
              <span className="block">Jungle</span>
              <span className="block">Rani</span>
            </h1>
            <button className="w-[250px] h-[45px] px-[11px] py-[10px] bg-white border-2 border-black font-alef font-bold ">REGISTER YOURSELF</button>
          </div>
        </div>
      </div>

      {/* Banner Section */}
      <section className="w-full h-96 bg-[#FBE2D8]">
        <div className="w-full h-full flex items-center max-w-screen-2xl mx-auto">
          <div className="w-1/2 flex items-center justify-center">
            <Image src="/assets/banner.png" width={500} height={500} alt="banner-img1" />
          </div>
          <div className="w-1/2 h-4/5 flex items-center justify-center">
            <div className="w-3/4 m-auto">
              <h1 className="font-poller text-6xl">Stay in the Know</h1>
              <p className="font-alef">Dive into the Buzzworthy World of Jungle Rani.</p>
              <button className="w-[220px] h-[45px] px-[11px] py-[10px] bg-white mt-3 border-2 border-black font-alef font-bold ">KNOW MORE</button>
            </div>
          </div>
        </div>
      </section>

      {/* Details Left-Section */}
      <section className="w-full bg-[#D0E6E9]">
        <div className="w-full h-full flex max-w-screen-2xl mx-auto">
          <div className="w-[80%] flex flex-col">
            <div className="py-3 px-5 mt-4 flex items-center justify-center" style={{ background: "rgba(246, 246, 246, 0.7)" }}>
              <div className="px-12">
                <div className="flex justify-between">
                  <div className="flex items-center h-auto">
                    <div className="relative rounded-full w-8 h-8 border-3 border-black overflow-hidden">
                      <Image className="object-cover w-full h-full" src="/assets/profile-img.png" width={40} height={40} alt="profile-img" />
                    </div>
                    <p className="font-alef text-base m-0 pl-2">Riya Rathor, Malkangiri</p>
                  </div>

                  <div className="flex items-center h-auto" style={{ fontSize: "16px", lineHeight: "40px", color: "rgba(18, 20, 22, 0.81)" }}>
                    <p className="font-alef text-sm m-0 pl-2">Dec 21,2023</p>
                    <span className="font-material px-3">
                      horizontal_rule
                    </span>
                    <span className="font-material">
                      schedule
                    </span>
                    <p className="font-alef text-sm m-0 pl-2">2 minute read</p>
                  </div>
                </div>
                <div className="mt-2">
                  <h1 className="font-poller text-2xl">Lorem ipsum dolor sit amet fgm.</h1>
                  <p className="font-alef text-xl">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex" style={{ fontSize: "16px", lineHeight: "40px" }}>
                    <span className="font-material">
                      equalizer
                    </span>
                    <p className="font-alef m-0 pl-2">1.6K views</p>
                  </div>
                  <div className="flex" style={{ fontSize: "16px", lineHeight: "40px" }}>
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
                <Image src="/assets/poster-one.png" width={250} height={250} alt="poster" />
              </div>
            </div>
            <div className="py-3 px-5 mt-4 flex items-center justify-center" style={{ background: "rgba(246, 246, 246, 0.7)" }}>
              <div className="px-12">
                <div className="flex justify-between">
                  <div className="flex items-center h-auto">
                    <div className="relative rounded-full w-8 h-8 border-3 border-black overflow-hidden">
                      <Image className="object-cover w-full h-full" src="/assets/profile-img.png" width={40} height={40} alt="profile-img" />
                    </div>
                    <p className="font-alef text-base m-0 pl-2">Riya Rathor, Malkangiri</p>
                  </div>

                  <div className="flex items-center h-auto" style={{ fontSize: "16px", lineHeight: "40px", color: "rgba(18, 20, 22, 0.81)" }}>
                    <p className="font-alef text-sm m-0 pl-2">Dec 21,2023</p>
                    <span className="font-material px-3">
                      horizontal_rule
                    </span>
                    <span className="font-material">
                      schedule
                    </span>
                    <p className="font-alef text-sm m-0 pl-2">2 minute read</p>
                  </div>
                </div>
                <div className="mt-2">
                  <h1 className="font-poller text-2xl">Lorem ipsum dolor sit amet fgm.</h1>
                  <p className="font-alef text-xl">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex" style={{ fontSize: "16px", lineHeight: "40px" }}>
                    <span className="font-material">
                      equalizer
                    </span>
                    <p className="font-alef m-0 pl-2">1.6K views</p>
                  </div>
                  <div className="flex" style={{ fontSize: "16px", lineHeight: "40px" }}>
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
                <Image src="/assets/poster-two.png" width={250} height={250} alt="poster" />
              </div>
            </div>
            <div className="py-3 px-5 mt-4 flex items-center justify-center" style={{ background: "rgba(246, 246, 246, 0.7)" }}>
              <div className="px-12">
                <div className="flex justify-between">
                  <div className="flex items-center h-auto">
                    <div className="relative rounded-full w-8 h-8 border-3 border-black overflow-hidden">
                      <Image className="object-cover w-full h-full" src="/assets/profile-img.png" width={40} height={40} alt="profile-img" />
                    </div>
                    <p className="font-alef text-base m-0 pl-2">Riya Rathor, Malkangiri</p>
                  </div>

                  <div className="flex items-center h-auto" style={{ fontSize: "16px", lineHeight: "40px", color: "rgba(18, 20, 22, 0.81)" }}>
                    <p className="font-alef text-sm m-0 pl-2">Dec 21,2023</p>
                    <span className="font-material px-3">
                      horizontal_rule
                    </span>
                    <span className="font-material">
                      schedule
                    </span>
                    <p className="font-alef text-sm m-0 pl-2">2 minute read</p>
                  </div>
                </div>
                <div className="mt-2">
                  <h1 className="font-poller text-2xl">Lorem ipsum dolor sit amet fgm.</h1>
                  <p className="font-alef text-xl">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex" style={{ fontSize: "16px", lineHeight: "40px" }}>
                    <span className="font-material">
                      equalizer
                    </span>
                    <p className="font-alef m-0 pl-2">1.6K views</p>
                  </div>
                  <div className="flex" style={{ fontSize: "16px", lineHeight: "40px" }}>
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
                <Image src="/assets/poster-one.png" width={250} height={250} alt="poster" />
              </div>
            </div>
            <div className="py-3 px-5 mt-4 flex items-center justify-center" style={{ background: "rgba(246, 246, 246, 0.7)" }}>
              <div className="px-12">
                <div className="flex justify-between">
                  <div className="flex items-center h-auto">
                    <div className="relative rounded-full w-8 h-8 border-3 border-black overflow-hidden">
                      <Image className="object-cover w-full h-full" src="/assets/profile-img.png" width={40} height={40} alt="profile-img" />
                    </div>
                    <p className="font-alef text-base m-0 pl-2">Riya Rathor, Malkangiri</p>
                  </div>

                  <div className="flex items-center h-auto" style={{ fontSize: "16px", lineHeight: "40px", color: "rgba(18, 20, 22, 0.81)" }}>
                    <p className="font-alef text-sm m-0 pl-2">Dec 21,2023</p>
                    <span className="font-material px-3">
                      horizontal_rule
                    </span>
                    <span className="font-material">
                      schedule
                    </span>
                    <p className="font-alef text-sm m-0 pl-2">2 minute read</p>
                  </div>
                </div>
                <div className="mt-2">
                  <h1 className="font-poller text-2xl">Lorem ipsum dolor sit amet fgm.</h1>
                  <p className="font-alef text-xl">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex" style={{ fontSize: "16px", lineHeight: "40px" }}>
                    <span className="font-material">
                      equalizer
                    </span>
                    <p className="font-alef m-0 pl-2">1.6K views</p>
                  </div>
                  <div className="flex" style={{ fontSize: "16px", lineHeight: "40px" }}>
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
                <Image src="/assets/poster-two.png" width={250} height={250} alt="poster" />
              </div>
            </div>

            <div className="w-2/3 py-3 px-20 mt-4 flex items-center justify-around">
              <button className="py-1 px-3 border-1 border-black bg-white font-alef text-lg font-bold">1</button>
              <button className="py-1 px-3 border-1 border-black bg-white font-alef text-lg font-bold">2</button>
              <button className="py-1 px-3 text-[#A6A6A6] border-1 border-black bg-white font-alef text-lg font-bold">3</button>
              <button className="py-1 px-3 border-1 border-black bg-white font-alef text-lg font-bold">4</button>
              <button className="py-1 px-3 border-1 border-black bg-white font-alef text-lg font-bold">5</button>
              <button className="py-1 px-3 border-1 border-black bg-white font-alef text-lg font-bold">Next Page</button>
            </div>
          </div>

          {/* Details Right-Section */}
          <div className="w-[20%] bg-white pl-4">
            <div className="mt-10">
              <h1 className="font-poller text-xl">Discover More.</h1>
              <div>
                <button className="bg-[#EFEFEF] mt-3 pl-3 pr-12 py-2 block rounded-full font-alef text-sm">Health</button>
                <button className="bg-[#EFEFEF] mt-3 pl-3 pr-12 py-2 rounded-full font-alef text-sm">Ayurveda</button>
                <button className="bg-[#EFEFEF] mt-3 ml-2 pl-3 pr-12 py-2 rounded-full font-alef text-sm">Labor</button>
                <button className="bg-[#EFEFEF] mt-3 pl-3 pr-12 block py-2 rounded-full font-alef text-sm">Mobile awareness</button>
                <button className="bg-[#EFEFEF] mt-3 pl-3 pr-12 py-2 rounded-full font-alef text-sm">Ayurveda</button>
                <button className="bg-[#EFEFEF] mt-3 ml-2 pl-3 pr-12 py-2 rounded-full font-alef text-sm">Labor</button>
              </div>
              <h1 className="font-poller text-xl mt-5">Publish and share your story too</h1>
              <button className="w-[220px] h-[45px] px-[11px] py-[10px] bg-white mt-2 border-2 border-black font-alef font-bold ">CREATE YOUR BLOG</button>
            </div>
          </div>
        </div>
      </section>

      {/* Lower Banner Section */}
      <section className="w-full h-80 bg-[#FBE2D8]">
        <div className="w-full h-full flex items-center max-w-screen-2xl mx-auto ">
          <div className="w-[75%] h-4/5 px-5 flex items-center justify-start ">
            <div className="w-2/3 px-10">
              <h1 className="font-poller text-6xl">Publish Your Story</h1>
              <p className="font-alef">Ready to share your stories? Start designing your blog here and let your voice shine!</p>
            </div>
          </div>
          <div className="" >
            <div className="flex flex-col">
              <button className="w-[250px] h-[45px] px-[11px] py-[10px] bg-white mt-3 border-2 border-black font-alef font-bold ">CREATE YOUR BLOG</button>
              <button className="w-[250px] h-[45px] px-[11px] py-[10px] bg-white mt-3 border-2 border-black font-alef font-bold ">SHARE A LINK</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="w-full flex items-center h-48 relative bg-[url('/assets/top-back.png')] bg-cover">
        <div className="absolute w-full h-5/6 flex items-center max-w-screen-2xl mx-auto bg-[#0a0a0a] bg-opacity-35">
          <div className="w-[75%] h-4/5 px-5 flex items-center justify-evenly">
            <div>
              <h5 className="font-alef font-bold text-white">
                CONNECT
              </h5>
              <p className="font-alef m-0 text-white">Lorem ipsum</p>
              <p className="font-alef m-0 text-white">Lorem ipsum</p>
            </div>
            <div>
              <h5 className="font-alef font-bold text-white">
                HELP
              </h5>
              <p className="font-alef m-0 text-white">Lorem ipsum</p>
              <p className="font-alef m-0 text-white">Lorem ipsum</p>
            </div>
            <div>
              <h5 className="font-alef font-bold text-white">
                COMMUNITY
              </h5>
              <p className="font-alef m-0 text-white">Lorem ipsum</p>
              <p className="font-alef m-0 text-white">Lorem ipsum</p>
            </div>
            <div>
              <h5 className="font-alef font-bold text-white">
                FOLLOW US
              </h5>
              <div className="flex items-center gap-4">
                <Image className="mr-3 text-white" src="/assets/white-facebook.svg" width={20} height={20} alt="pint" />
                <Image className="mr-3" src="/assets/white-twitter.svg" width={20} height={20} alt="pint" />
                <Image className="mr-3" src="/assets/white-insta.svg" width={20} height={20} alt="pint" />
                <Image className="mr-3" src="/assets/white-pinterest.svg" width={20} height={20} alt="pint" />
                <Image className="mr-3" src="/assets/white-youtube.svg" width={20} height={20} alt="pint" />
              </div>
            </div>
          </div>
          <div className="w-[25%]">
            <div className="w-[80%] flex flex-col">
              <button className="w-[250px] h-[45px] px-[11px] py-[10px] bg-white mt-3  border-2 border-black font-alef font-bold ">JOIN US</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
