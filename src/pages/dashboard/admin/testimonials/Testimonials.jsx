import { Star } from "lucide-react";
const testimonials = [
  {
    name: "Mr. Rahman",
    company: "Dream Real Estate Ltd.",
    feedback:
      "This platform has streamlined our apartment management beyond expectations. The dashboard and payment tracking are super helpful!",
    image: "https://xsgames.co/randomusers/avatar.php?g=male",
    rating: 5,
  },
  {
    name: "Ms. Jahan",
    company: "Comfort Living Group",
    feedback:
      "We manage 20+ apartments and this tool saves us hours every day. It's user-friendly and highly efficient.",
    image: "https://xsgames.co/randomusers/avatar.php?g=male",
    rating: 4,
  },
  {
    name: "Mr. Niaz",
    company: "Urban Nest Developers",
    feedback:
      "A must-have tool for modern real estate companies. Agreement system and flat-level tracking are excellent!",
    image: "https://xsgames.co/randomusers/avatar.php?g=male",
    rating: 5,
  },
];
const Testimonials = () => {
  return (
    <section className=" py-16 px-4 md:px-10" id="testimonials">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
        What Our Clients Say
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full object-cover border"
              />
              <div>
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
              </div>
            </div>
            <p className="text-gray-700 italic mb-4">
              “{testimonial.feedback}”
            </p>
            <div className="flex gap-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="text-yellow-500 fill-yellow-400"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
