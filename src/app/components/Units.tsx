export const Units = () => {
  return (
    <div className="unit-container bg-primary">
      <div className="units flex flex-col items-center bg-primary">
        <div className="flex container items-center justify-between mx-auto mt-28">
          <div className="flex items-center gap-5">
            <img
              src="/header-title.svg"
              alt="header-logo"
              width={70}
              height={122}
            />
            <div className="facilities-title">
              <h1>
                Our <br />
                <span>Units</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex-initial w-2/5 bg-amber-500"></div>
          <div className="flex-initial"></div>
        </div>
      </div>
    </div>
  );
};
