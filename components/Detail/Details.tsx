import LeftSection from "./LeftSection/LeftSection";
import RightSection from "./RightSection/RightSection";

const Details = () => {
    return (
        <section className="w-full bg-[#D0E6E9]">
            <div className="w-full h-full flex flex-col sm:flex-row max-w-screen-2xl mx-auto">
                {/* Details Left-Section */}
                <LeftSection />
                {/* Details Right-Section */}
                <RightSection />
            </div>
        </section>
    )
}

export default Details;
