import { FC } from "react";

const WebDesignSection: FC = () => {
  return (
    <>
      {/* Web Development Section */}
      <section className="w-full py-20 px-6 bg-white dark:bg-gray-900 transition-colors duration-500">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Web Development</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Web development as a study field encompasses the learning of designing, building, and maintaining websites and web applications.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Students explore a wide range of topics such as HTML, CSS, JavaScript, front-end frameworks like React or Angular, and back-end technologies like Node.js, Express, and databases. They also delve into responsive design, user experience (UX), and performance optimization.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              As the internet continues to grow, the demand for skilled web developers remains strong. Studying web development not only opens doors to exciting career opportunities but also fosters problem-solving, critical thinking, and collaboration skills essential in today’s tech-driven world.
            </p>

            <button className="bg-pink-600 hover:bg-pink-500 text-white font-semibold px-6 py-3 rounded-full transition">
              <a href="https://www.geeksforgeeks.org/web-tech/web-development/" target="_blank" >Learn More</a>
            </button>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="src/images/—Pngtree—a conceptual illustration of web_13313953.jpg"
              alt="Web Design Visual"
              className="rounded w-full max-w-xxl"
            />
          </div>
        </div>
      </section>

      {/* Data Science Section */}
      <section className="w-full py-20 px-6 bg-white dark:bg-gray-900 transition-colors duration-500">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image on Left */}
          <div className="flex justify-center md:justify-start">
            <img
              src="src/images/4269.jpg_wh860.jpg"
              alt="Data Science Visual"
              className="rounded w-full max-w-xxl md:max-w-lg lg:max-w-xl"
            />
          </div>

          {/* Text Content on Right */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Data Science</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Data Science is transforming the way organizations interpret and utilize data. With ever-increasing volumes of information, it has become essential to extract meaningful insights that drive smart business decisions.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Leveraging machine learning, artificial intelligence, and advanced statistical models, Data Science uncovers hidden patterns, trends, and predictive analytics that offer a competitive edge in every industry.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              From automating processes to building intelligent systems, Data Science empowers professionals to solve complex problems efficiently. Continuous learning and staying updated with cutting-edge tools are vital in this dynamic field.
            </p>

            <button className="bg-pink-600 hover:bg-pink-500 text-white font-semibold px-6 py-3 rounded-full transition">
              <a href="https://www.geeksforgeeks.org/data-science/data-science/" target="_blank">Learn More</a>
            </button>
          </div>
        </div>
      </section>

      {/* Artificial Intelligence Section */}
      <section className="w-full py-20 px-6 bg-white dark:bg-gray-900 transition-colors duration-500">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Artificial Intelligence</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Artificial Intelligence is revolutionizing industries by enabling machines to mimic human intelligence. From smart assistants to self-driving cars, AI is at the core of innovations shaping the future.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Powered by algorithms and vast data, AI systems learn, adapt, and make intelligent decisions. Machine Learning and Deep Learning are key branches that empower AI to evolve rapidly.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              As AI continues to evolve, it opens endless possibilities for automation, predictive analytics, and personalized user experiences across diverse sectors.
            </p>

            <button className="bg-pink-600 hover:bg-pink-500 text-white font-semibold px-6 py-3 rounded-full transition">
              <a href="https://www.geeksforgeeks.org/artificial-intelligence/what-is-artificial-intelligence-ai/" target="_blank">Learn More</a>
            </button>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="src/images/pxfuel.jpg"
              alt="Artificial Intelligence Visual"
              className="rounded w-full max-w-xxl"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default WebDesignSection;
