export default function Hero() {
  return (
    <section className="relative min-h-screen xs:h-auto sm:h-auto base:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden flex items-center">
      <img
        src="/hero.jpeg"
        alt="hero"
        className="absolute w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-[#0B1F3A]/70"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto h-full flex items-center px-3 xs:px-4 sm:px-5 base:px-6 md:px-7 lg:px-8 py-8 xs:py-10 sm:py-12 base:py-16 md:py-0">
        <div className="w-full max-w-2xl text-white">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl base:text-6xl md:text-6xl lg:text-7xl font-bold leading-tight xs:leading-snug sm:leading-snug md:leading-tight">
            BAN-DRCE –
            <br className="hidden xs:block" />
            Evidence-Based Solutions for
            <span className="text-yellow-500 block xs:inline">
              {" "}Ethiopia's Development
            </span>
          </h1>

          <p className="mt-4 xs:mt-5 sm:mt-6 base:mt-7 md:mt-8 text-sm xs:text-base sm:text-lg base:text-lg md:text-xl leading-relaxed max-w-xl">
            Leading research and consulting firm delivering reliable data,
            strategic insights, and practical solutions.
          </p>

          <div className="mt-6 xs:mt-7 sm:mt-8 base:mt-9 md:mt-10 flex flex-col xs:flex-row gap-3 xs:gap-4 sm:gap-5">
            <button className="bg-yellow-500 hover:bg-yellow-600 transition px-5 xs:px-6 sm:px-7 base:px-8 md:px-8 py-3 xs:py-3.5 sm:py-4 base:py-4 md:py-4 rounded-lg font-semibold text-sm xs:text-base sm:text-base md:text-base whitespace-nowrap">
             <a href="#services">Our Services</a>
            </button>

            <button className="border border-white hover:bg-white hover:text-[#0B1F3A] transition px-5 xs:px-6 sm:px-7 base:px-8 md:px-8 py-3 xs:py-3.5 sm:py-4 base:py-4 md:py-4 rounded-lg font-semibold text-sm xs:text-base sm:text-base md:text-base whitespace-nowrap">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
