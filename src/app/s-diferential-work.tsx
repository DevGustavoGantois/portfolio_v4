import Image from "next/image"

const diferentialWorkData = [
    {img: "/SupportIcon.svg"},
    {img: "/SEOIcon.svg"},
    {img: "/velocityIcon.svg"},
    {img: "/DesignIcon.svg"},
    {img: "/InterfaceIcon.svg"},
    {img: "/AnimationIcon.svg"},
]


export function DiferentialWork() {
    return (
        <section className="max-w-[1440px] mx-auto p-8 lg:p-0 mt-20 lg:mt-60">
            <div className="flex flex-col justify-center items-center gap-4">
                <h1 className="text-center text-2xl lg:text-4xl  bg-clip-text text-transparent bg-gradient-to-r from-[#FFFF] to-[#0AE7E7]">Diferenciais do meu trabalho</h1>
                <p className="text-base text-gray-500 text-center max-w-[544px]">
                    Meus diferenciais garantem a melhor experiência para usuários e clientes. Cada site e sistema é desenvolvido
                    sob medida, como se fosse para meu próprio uso.
                </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-10 justify-center items-center max-w-[1200px] mx-auto">
            {diferentialWorkData.map((item, index) => {
                return (
                    <div key={index} className="animate-bounce">
                        <Image src={item.img} width={250} height={80} alt="" />
                    </div>
                )
            })}
            </div>
        </section>
    )
}