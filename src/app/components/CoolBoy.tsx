import Image from "next/image"
// import { AboutHeader } from "./AboutHeader"
// import FinalSVG from '../../../public/assets/images/About-after.svg';
export const CoolBoy = () => {
    return (
        <section className="relative w-full mt-10 h-screen overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 -z-5 bg-cover bg-center"
                >
                <Image
                    src="/assets/images/coolboy.png"
                    alt='coolboy'
                    width={1500} 
                    height={1500} 
                    className="object-contain"
                />
            </div>

            {/* Scrollable Content */}
            <div className="relative h-full overflow-y-auto scrollbar-none">
                {/* First Text Section */}
                
                <div className="min-h-screen flex flex-col justify-center items-start p-10 bg-transparent">
                    <h1 className="text-5xl font-bold text-white mb-4">Urban Edge, Redefined</h1>
                    <p className="text-lg text-white max-w-xl">
                    StreetGenetics merges sophistication with urban grit, creating streetwear that’s bold yet refined.
                    Designed for those who dare to stand out, our pieces embody the fearless spirit of modern street culture.
                    From sleek silhouettes to relaxed fits, StreetGenetics redefines luxury with an urban edge.
                    </p>
                </div>

                {/* Second Text Section */}
                <div className="min-h-screen flex flex-col justify-center items-start p-10 bg-transparent">
                    <h1 className="text-5xl font-bold text-white mb-4">Art in Motion</h1>
                    <p className="text-lg text-white max-w-xl">
                    At StreetGenetics, every design is a fusion of bold artistry and understated elegance.
Inspired by the heartbeat of city life, our collections turn everyday wear into a statement.
Unique patterns and striking graphics make every StreetGenetics piece a testament to individuality.
                    </p>
                </div>

                {/* Add more sections as needed */}
                <div className="min-h-screen flex flex-col justify-center items-start p-10 bg-transparent">
                    <h1 className="text-5xl font-bold text-white mb-4">Built to Last, Made to Impress</h1>
                    <p className="text-lg text-white max-w-xl">
                    StreetGenetics prioritizes impeccable craftsmanship, ensuring every garment delivers unmatched quality.
Using premium, sustainable materials, we create clothing that feels as good as it looks.
Durability and comfort are woven into every thread, making StreetGenetics the perfect blend of style and substance.
                    </p>
                </div>
            </div>
        </section>
    );
}

{/* <div className="relative -z-5 bg-cover bg-center">
                    <Image
                    src="/assets/images/coolboy.png"
                    alt='coolboy'
                    width={1500} 
                    height={1500} 
                    className="object-contain"
                />
            </div> */}

