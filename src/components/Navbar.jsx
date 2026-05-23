export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        
        <div className="flex items-center gap-3">
          <img
            src="/logo.jpg"
            alt="logo"
            className="w-16"
          />

          <div>
            <h1 className="font-bold text-2xl text-[#0B1F3A]">
              BAN-DRCE
            </h1>

            <p className="text-sm">
              Center of Research and Consulting Excellence
            </p>
          </div>
        </div>

        <nav className="flex gap-10 font-medium">
          <a href="/">Home</a>
          <a href="#services">Services</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>

      </div>
    </header>
  )
}