export default function Footer() {
  return (
    <footer className="bg-[#0B1F3A] text-white border-t-4 border-orange-500">

      <div className="max-w-7xl mx-auto px-6 py-5">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

          {/* LEFT - LOGO */}
          <div>
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span className="text-orange-400">BAN-DRCE</span>
            </h2>
            <p className="text-sm text-gray-300 mt-2 leading-relaxed">
              Center of Research and Consulting Excellence
            </p>
          </div>

          {/* CENTER - TAGLINE */}
          <div className="text-center md:text-left">
            <p className="text-gray-200 leading-relaxed">
              Empowering decisions. Inspiring change.
            </p>
            <p className="text-gray-300 mt-2">
              Building a better Ethiopia through evidence and excellence.
            </p>
          </div>

          {/* RIGHT - CONTACT */}
          <div className="md:text-right space-y-2 text-sm text-gray-200">

            <div className="flex md:justify-end items-center gap-2">
              <span>📧</span>
              <span>consult@bandrce.com</span>
            </div>

            <div className="flex md:justify-end items-center gap-2">
              <span>📞</span>
              <span>+251-11-691-5252</span>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex md:justify-end gap-3 mt-3">

              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-600 cursor-pointer">
                f
              </div>

              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-500 cursor-pointer">
                in
              </div>

              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-red-500 cursor-pointer">
                ▶
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 mt-4 pt-2 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">

          <p>© 2024 BAN-DRCE. All rights reserved.</p>

          <p className="mt-2 md:mt-0">
            Center of Research and Consulting Excellence
          </p>

        </div>

      </div>
    </footer>
  )
}

