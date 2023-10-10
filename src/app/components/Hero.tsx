export const Hero = () => {
  return (
    <div className="flex h-screen" key="hero">
      {/* Left side */}
      <div className="flex-initial w-3/5 bg-primary text-white">
        <div className="hero-text-outline">
          <h1>HEARTFUL</h1>
          <h1 className="-mt-56">TOWER</h1>
        </div>

        <div className="flex flex-col justify-center items-start h-full ml-52 hero-text">
          <h1 className="text-9xl font-black">The Desire </h1>
          <div className="flex gap-8">
            <h1 className="text-9xl font-black"> To </h1>
            <h1 className="text-9xl hero-thrive-text">Thrive</h1>
          </div>
          <div className="text-2xl font-regular mt-8 text-gray-100">
            <p>Selamat datang di Heartful Tower Bekasi,</p>
            <p>Apartemen dengan harga terbaik.</p>
            <div className="flex gap-2 items-center">
              <p>Oleh Developer Jepang</p>
              <img src="/Japanese-Flag.png" alt="jaoan-flag" width="28" />
            </div>
          </div>

          <div className="flex items-center mt-10 z-30">
            <img src="/Logo-IIDA.png" alt="logo-iida" width="100" />
            <img
              src="/Japanese-No.1-Developer.png"
              alt="logo-japanese-developer"
              width="200"
            />
          </div>

          <button className="z-50 mt-10 flex items-center gap-2 rounded-full bg-warning hover:bg-amber-500 px-7 py-3 text-white shadow transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-amber-500/50 hover:text-white font-bold text-xl">
            GET INFORMATION
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Right side */}
      <div className="flex-initial w-2/5 bg-hero-image bg-primary"></div>
    </div>
  );
};
