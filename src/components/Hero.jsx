export default function Hero() {
  return (
    <section className="relative h-[600px] overflow-hidden">

      <img
        src="/hero.jpeg"
        alt="hero"
        className="absolute w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-[#0B1F3A]/70"></div>

      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-8">

        <div className="max-w-2xl text-white">

          <h1 className="text-6xl font-bold leading-tight">
            BAN-DRCE –
            <br />
            Evidence-Based Solutions for
            <span className="text-yellow-500">
              {" "}Ethiopia’s Development
            </span>
          </h1>

          <p className="mt-6 text-xl leading-relaxed">
            Leading research and consulting firm delivering reliable data,
            strategic insights, and practical solutions.
          </p>

          <div className="mt-8 flex gap-5">

            <button className="bg-yellow-500 hover:bg-yellow-600 transition px-8 py-4 rounded-lg font-semibold">
             <a href="#services">Our Services</a>
            </button>

            <button className="border border-white px-8 py-4 rounded-lg font-semibold">
              Contact Us
            </button>

          </div>

        </div>

      </div>

    </section>
  )
}