import {
  Search,
  BarChart3,
  GraduationCap,
  Users,
  Briefcase,
  Target,
} from "lucide-react"

const services = [
  {
    title: "Research",
    description:
      "High-quality research to inform policies and drive development.",
    image: "/research.jpg",
    icon: <Search size={30} />,
  },

  {
    title: "Data Services",
    description:
      "Data collection, management, and analysis you can trust.",
    image: "/data.jpg",
    icon: <BarChart3 size={30} />,
  },

  {
    title: "Training",
    description:
      "Capacity building and training for individuals and organizations.",
    image: "/training.jpeg",
    icon: <GraduationCap size={30} />,
  },

  {
    title: "Technical Assistance",
    description:
      "Expert support for implementation and project success.",
    image: "/tech.jpg",
    icon: <Users size={30} />,
  },

  {
    title: "Business Consulting",
    description:
      "Organizational design, feasibility studies, and business planning.",
    image: "/business.jpg",
    icon: <Briefcase size={30} />,
  },

  {
    title: "Impact Evaluation",
    description:
      "Rigorous evaluations to measure impact and improve outcomes.",
    image: "/impact.jpg",
    icon: <Target size={30} />,
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 bg-[#f8f8f8] overflow-hidden">

      {/* Decorative Side Patterns */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-10 text-[200px] font-bold text-yellow-600">
        ◈
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 text-[200px] font-bold text-yellow-600">
        ◈
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">

          <h2 className="text-5xl font-bold text-[#0B1F3A]">
            Our Services
          </h2>

          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden border-t-4 border-yellow-500 hover:shadow-xl transition duration-300 flex flex-col"
            >

              {/* Content */}
              <div className="p-6 flex flex-col items-center text-center flex-grow">

                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-yellow-500 text-white flex items-center justify-center mb-5 shadow-md">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-[22px] font-bold text-[#0B1F3A] mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-[15px] leading-7">
                  {service.description}
                </p>

              </div>

              {/* Bottom Image */}
              <img
                src={service.image}
                alt={service.title}
                className="h-40 w-full object-cover"
              />

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}