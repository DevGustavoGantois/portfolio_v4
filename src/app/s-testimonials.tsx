import { InfiniteMovingCardsDemo } from "@/components/InfiniteMoviesCardDemo"

const TestimonialsSectionData = [
    {title: "Superando Expectativas", description: "Confira os depoimentos dos meus clientes e veja como sempre atendo e supero suas expectativas."}
]

export function TestimonialsSection() {
    return (
        <section id="testimonials" className="mt-20">
            {TestimonialsSectionData.map((item, index) => {
                return (
                    <div key={index} className="flex flex-col items-center justify-center gap-4">
                        <h1 className="text-white text-4xl text-center" data-aos="fade-up">{item.title}</h1>
                        <p className="text-base text-center text-gray-500 max-w-[403px]" data-aos="fade-up" data-aos-delay="200">{item.description}</p>
                    </div>
                )
            })}
            <article className="mt-16">
                <InfiniteMovingCardsDemo />
            </article>
        </section>
    )
}