import { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import Typewriter from 'typewriter-effect';

const newsItems = [
  {
    title: "NASA and SpaceX Crew-10 docks at ISS, set to bring back stuck astronauts Sunita Williams and Butch Wilmore",
    image: "src/images/SpaceX-NASA-Crew-10-Mission.jpg",
    link: "",
  },
  {
    title: "Researchers develop innovative method for secure operations on encrypted data without decryption",
    image: "src/images/cloud-compute.jpg",
    link: "https://techxplore.com/news/2025-03-method-encrypted-decryption.html",
  },
  {
    title: "‘India an important market for sales and R&D’: HP CEO Enrique Lores",
    image: "src/images/Tech-feature-images152.webp",
    link: "https://indianexpress.com/article/technology/tech-news-technology/india-important-market-sales-rd-hp-ceo-enrique-lores-9893861/",
  },
  {
    title: "Nvidia CEO Huang says chipmaker well positioned for shift in AI",
    image: "src/images/Nvidia.webp",
    link: "https://indianexpress.com/article/technology/artificial-intelligence/nvidia-ceo-huang-chipmaker-shift-in-ai-9893921/",
  },
  {
    title: "Oracle to offer cloud and AI services to Singapore military",
    image: "src/images/119190849.webp",
    link: "https://timesofindia.indiatimes.com/technology/tech-news/oracle-to-offer-cloud-and-ai-services-to-singapore-military/articleshow/119190876.cms",
  },
];

export default function NewsSection() {
  useEffect(() => {
    const swiperInstance = new Swiper(".swiper", {
      slidesPerView: 1,
      spaceBetween: 50,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        640: { slidesPerView: 1 },
        1024: { slidesPerView: 2 },
        1280: { slidesPerView: 3 },
      },
    });

    return () => {
      swiperInstance.destroy(true, true);
    };
  }, []);

  return (
    <section id="NEWS" className="relative px-4 overflow-hidden">
      {/* Top Gradient Shape */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          className="relative left-1/2 aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:w-[72rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      {/* Radial Background & Content */}
      <div className="relative z-0 w-full min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-100 via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 px-6 py-24 sm:py-32 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="pb-10 text-4xl font-semibold text-gray-800 dark:text-white">
            <Typewriter
              options={{
                strings: ['Shaping your future with artificial intelligence.'],
                autoStart: true,
                loop: true,
                delay: 25,
              }}
            />
          </h1>
          <p className="text-left text-4xl ml-8 py-3 mt-15 text-gray-900 dark:text-white">News</p>
        </div>

        {/* Swiper Slider */}
        <div className="swiper w-full -mt-12">
          <div className="swiper-wrapper">
            {newsItems.map((item, idx) => (
              <div className="swiper-slide" key={idx}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/20 rounded shadow hover:shadow-lg transition overflow-hidden min-w-0"
                >
                  <img
                    src={item.image}
                    alt="news"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-base font-semibold text-gray-800 dark:text-white">
                      {item.title}
                    </h2>
                  </div>
                </a>
              </div>
            ))}
          </div>

          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>

        {/* CTA Box */}
        <div className="mt-24 px-4">
          <div className="flex items-center justify-between flex-wrap bg-gray-100 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/20 shadow-md rounded-lg p-6 max-w-5xl mx-auto">
            <p className="text-black dark:text-white font-bold">
              Stay updated with the latest news and breakthroughs in AI and technology. Shaping the future of innovation!
            </p>
            <a
              href="https://www.techtimes.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-4 md:mt-0 ml-0 md:ml-4 px-8 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Go
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Shape */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -bottom-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-bottom-80"
      >
        <div
          className="relative left-1/2 aspect-[1155/678] w-[36rem] -translate-x-1/2 -rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:w-[72rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </section>
  );
}
