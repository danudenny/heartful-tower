import NewsCard from "@/app/components/NewsCard";

export const News = () => {
  const newsData = [
    {
      imageUrl: "/facilities/fitness.jpg",
      title: "News 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ullamcorper libero.",
    },
    {
      imageUrl: "/news2.jpg",
      title: "News 2",
      description:
        "Suspendisse eget massa vel ante venenatis faucibus. Quisque tristique tincidunt.",
    },
    {
      imageUrl: "/news3.jpg",
      title: "News 3",
      description:
        "Pellentesque nec justo id augue dapibus pharetra ac eu urna. In ac semper leo.",
    },
    {
      imageUrl: "/news4.jpg",
      title: "News 4",
      description:
        "Fusce laoreet mi eget dui venenatis, id elementum tortor bibendum. Vivamus id metus vitae est ullamcorper consequat.",
    },
  ];
  return (
    <div className="news-container bg-primary">
      <div className="news container mx-auto flex flex-col pt-20 gap-4 z-50">
        <h1 className="justify-start">
          Latest <span>News</span>
        </h1>
        <hr style={{ width: "100%" }} className="border-secondary mb-5" />
        <div className="flex gap-5">
          {newsData.map((news, index) => (
            <NewsCard key={index} />
          ))}
        </div>
        <div className="flex justify-center items-center align-middle">
          <button className="z-30 mt-10 flex items-center gap-2 rounded-full bg-warning hover:bg-amber-500 px-7 py-3 text-white shadow transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-amber-500/50 hover:text-white font-bold text-xl">
            READ MORE
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
    </div>
  );
};
