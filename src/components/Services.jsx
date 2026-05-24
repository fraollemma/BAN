import {
  Search,
  BarChart3,
  GraduationCap,
  Users,
  Briefcase,
  Target,
} from "lucide-react";

const services = [
  {
    title: "Research",
    description: "High-quality research to inform policies and drive development.",
    image: "/research.jpg",
    icon: <Search className="w-7 h-7 text-[#C27D38]" />,
  },
  {
    title: "Data Services",
    description: "Data collection, management, and analysis you can trust.",
    image: "/data.jpg",
    icon: <BarChart3 className="w-7 h-7 text-[#C27D38]" />,
  },
  {
    title: "Training",
    description: "Capacity building and training for individuals and organizations.",
    image: "/training.jpeg",
    icon: <GraduationCap className="w-7 h-7 text-[#C27D38]" />,
  },
  {
    title: "Technical Assistance",
    description: "Expert support for implementation and project success.",
    image: "/tech.jpg",
    icon: <Users className="w-7 h-7 text-[#C27D38]" />,
  },
  {
    title: "Business Consulting",
    description: "Organizational design, feasibility studies, and business planning.",
    image: "/tech.jpg",
    icon: <Briefcase className="w-7 h-7 text-[#C27D38]" />,
  },
  {
    title: "Impact Evaluation",
    description: "Rigorous evaluations to measure impact and improve outcomes.",
    image: "/research.jpg",
    icon: <Target className="w-7 h-7 text-[#C27D38]" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-8 xs:py-12 sm:py-16 base:py-20 md:py-24 lg:py-24 bg-[#FAFAFA] overflow-hidden">
      
      {/* Decorative Side Patterns - Hidden on mobile, shown on large screens */}
      <div className="hidden md:block absolute left-2 base:left-3 md:left-4 top-1/2 -translate-y-1/2 opacity-20 text-5xl xs:text-6xl sm:text-7xl base:text-8xl md:text-[120px] font-bold text-[#C27D38] select-none">
        ◈
      </div>
      <div className="hidden md:block absolute right-2 base:right-3 md:right-4 top-1/2 -translate-y-1/2 opacity-20 text-5xl xs:text-6xl sm:text-7xl base:text-8xl md:text-[120px] font-bold text-[#C27D38] select-none">
        ◈
      </div>

      <div className="w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-5 base:px-6 md:px-7 lg:px-8 relative z-10">
        
        {/* Heading */}
        <div className="text-center mb-8 xs:mb-10 sm:mb-12 base:mb-14 md:mb-16 lg:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl base:text-4xl md:text-5xl lg:text-5xl font-bold text-[#0D2B5B] relative inline-block pb-3">
            Our Services
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 xs:w-14 sm:w-16 h-1 bg-[#C27D38] rounded-full"></span>
          </h2>
        </div>

        {/* Cards Grid - Responsive Columns Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 xs:gap-5 sm:gap-6 items-stretch">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden border border-gray-100/80 group"
            >
              {/* Top Section Content */}
              <div className="p-4 xs:p-5 sm:p-6 flex flex-col items-center text-center">
                
                {/* Icon Container */}
                <div className="w-12 h-12 xs:w-13 xs:h-13 sm:w-14 sm:h-14 rounded-full bg-amber-50/60 flex items-center justify-center mb-3 xs:mb-3.5 sm:mb-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-base xs:text-lg sm:text-lg font-bold text-[#0D2B5B] mb-2 tracking-tight line-clamp-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-xs xs:text-sm sm:text-sm leading-relaxed line-clamp-3 xs:line-clamp-4">
                  {service.description}
                </p>
              </div>

              {/* Bottom Image Component */}
              <div className="overflow-hidden h-32 xs:h-36 sm:h-40 mt-auto">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale-[20%] group-hover:grayscale-0"
                />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
