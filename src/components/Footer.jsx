export default function Footer() {
  return (
    <footer className="bg-[#0B1F3A] text-white border-t-4 border-orange-500">

      <div className="w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-5 base:px-6 md:px-7 lg:px-8 py-8 xs:py-10 sm:py-12 base:py-14 md:py-16 lg:py-16">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 xs:gap-7 sm:gap-8 base:gap-9 md:gap-10 lg:gap-10 items-start">

          {/* LEFT - LOGO */}
          <div className="text-center sm:text-left">
            <h2 className="text-lg xs:text-xl sm:text-xl md:text-xl font-bold flex items-center justify-center sm:justify-start gap-2">
              <span className="text-orange-400">BAN-DRCE</span>
            </h2>
            <p className="text-xs xs:text-sm sm:text-sm text-gray-300 mt-2 xs:mt-3 sm:mt-3 leading-relaxed">
              Center of Research and Consulting Excellence
            </p>
          </div>

          {/* CENTER - TAGLINE */}
          <div className="text-center sm:col-span-2 md:col-span-1 md:text-left">
            <p className="text-sm xs:text-base sm:text-base text-gray-200 leading-relaxed font-semibold xs:font-normal">
              Empowering decisions. Inspiring change.
            </p>
            <p className="text-xs xs:text-sm sm:text-sm text-gray-300 mt-2 xs:mt-3 sm:mt-3 leading-relaxed">
              Building a better Ethiopia through evidence and excellence.
            </p>
          </div>

          {/* RIGHT - CONTACT */}
          <div className="text-center sm:text-left md:text-right space-y-2 xs:space-y-3 sm:space-y-3 text-xs xs:text-sm sm:text-sm text-gray-200 col-span-1 sm:col-span-2 md:col-span-1">

            <div className="flex items-center justify-center sm:justify-start md:justify-end gap-2">
              <span className="text-base flex-shrink-0">📧</span>
              <span className="break-all xs:break-normal">consult@bandrce.com</span>
            </div>

            <div className="flex items-center justify-center sm:justify-start md:justify-end gap-2">
              <span className="text-base flex-shrink-0">📞</span>
              <span>+251-11-691-5252</span>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex justify-center sm:justify-start md:justify-end gap-2 xs:gap-3 sm:gap-3 mt-4 xs:mt-5 sm:mt-5">

              <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-600 cursor-pointer transition-colors text-xs xs:text-sm flex-shrink-0">
                f
              </div>

              <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-500 cursor-pointer transition-colors text-xs xs:text-sm flex-shrink-0">
                in
              </div>

              <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-red-500 cursor-pointer transition-colors text-xs xs:text-sm flex-shrink-0">
                ▶
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 mt-6 xs:mt-8 sm:mt-10 base:mt-12 md:mt-12 pt-4 xs:pt-5 sm:pt-6 flex flex-col sm:flex-row justify-center sm:justify-between items-center text-xs xs:text-xs sm:text-sm text-gray-400 gap-3 sm:gap-4">

          <p className="text-center sm:text-left">© 2024 BAN-DRCE. All rights reserved.</p>

          <p className="text-center sm:text-right">
            Center of Research and Consulting Excellence
          </p>

        </div>

      </div>
    </footer>
  )
}
