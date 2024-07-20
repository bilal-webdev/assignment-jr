
export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-full bg-[url('/assets/top-back.png')] bg-cover">
        <div className="absolute w-full h-full bg-[#FCDBDB] bg-opacity-35">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 flex justify-between items-end p-10">
            <h1 className="font-poller text-8xl text-white text-stroke leading-none">
              <span className="block">Jungle</span>
              <span className="block">Rani</span>
            </h1>
            <button className="bg-white px-4 py-2 border-2 border-black font-alef font-bold ">REGISTER YOURSELF</button>
          </div>
        </div>
      </div>

      {/* Banner Section */}
      <section className="w-full h-96 flex items-center bg-[#FBE2D8]">
        <div className="w-1/2 h-4/5 bg-slate-500">Hello</div>
        <div className="w-1/2 h-4/5 bg-red-500">Hellooooooo</div>
      </section>
    </>
  );
}
