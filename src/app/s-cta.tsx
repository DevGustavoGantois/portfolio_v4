import Image from "next/image"

const iconsData = [
    {
        icon: "/PythonIcon.svg"
    },
    {
        icon: "/AngularIcon.svg",
    },
    {
        icon: "/ReactIcon.svg",
    },
    {
        icon: "/NodeIcon.svg",
    },
    {
        icon: "/VueIcon.svg",
    },
    {
        icon: "/JSIcon.svg",
    },
    {
        icon: "/FigmaIcon.svg",
    },
    {
        icon: "JavaIcon.svg",
    },
    {
        icon: "DbIcon.svg",
    }
]

export function CTASection() {
    return (
        <div className="flex flex-wrap justify-center items-center gap-4 mt-20">
            {iconsData.map((item, index) => {
                return (
                    <div key={index} className="animate-pulse">
                        <Image src={item.icon} width={90} height={200} alt="" />
                    </div>
                )
            })}
            <div>
                <div className="flex items-center justify-center mt-10" data-aos="zoom-down" data-aos-delay="300">
                <h1 className="text-3xl lg:text-5xl text-center  bg-clip-text text-transparent bg-gradient-to-r from-[#FFFF] to-[#0AE7E7] max-w-[1300px]">
                O sucesso hoje requer a agilidade e a capacidade de se adaptar rapidamente. O futuro pertence àqueles que inovam.
                </h1>
                </div>
            </div>
        </div>
    )
}