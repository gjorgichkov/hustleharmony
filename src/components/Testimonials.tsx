import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sanja Mitrovska",
    role: "Founder of Networker and The Founder Games",
    image: "https://sanjamitrovska.com/images/IVO08815-1.png",
    quote:
      "The interface is intuitive and the features are exactly what I needed for my team.",
  },
  {
    name: "Petar Ninovski",
    role: "Founder of Brainster & Brainster Next",
    image:
      "https://www.startupbalkans.com/wp-content/uploads/2021/11/Aleksandar-16-1024x683.jpg",
    quote:
      "I've tried many similar tools, but this one stands out for its performance and reliability.",
  },
  {
    name: "Nikola Velkovski",
    role: "Founder of HeyReach",
    image:
      "https://cdn.prod.website-files.com/65492afe86bfa964d89f1fd1/65a6a01bdf3bbb21f407dd0a_Nikola%20Velkovski.jpeg",
    quote:
      "I've been using this platform for a while now and I'm impressed with the results.",
  },
];

const Testimonials = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-4 md:mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 md:mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto px-4">
            Hear what our users have to say about their experience with our
            platform
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto px-4 md:px-8"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-lg p-3 md:p-4 rounded-xl h-full border border-white/10 hover:border-teal/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-2 md:mb-3">
                    <div className="relative">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-teal">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 bg-teal rounded-full p-1">
                        <svg
                          className="w-2 h-2 md:w-3 md:h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-white text-xs md:text-sm font-semibold">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-xs">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-xs md:text-sm italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-teal text-teal hover:bg-teal hover:text-white -left-1 md:-left-4 h-6 w-6 md:h-8 md:w-8" />
          <CarouselNext className="border-teal text-teal hover:bg-teal hover:text-white -right-1 md:-right-4 h-6 w-6 md:h-8 md:w-8" />
        </Carousel>
      </motion.div>
    </section>
  );
};

export default Testimonials;