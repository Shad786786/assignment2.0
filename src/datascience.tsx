import { FC } from "react";

const WebDesignSection: FC = () => {
  return (
      <>
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Image on Left */}
        <div className="flex justify-center md:justify-start">
          <img 
            src="src/images/—Pngtree—data science artificial intelligence concept_15458795.png" 
            alt="Web Design Visual" 
            className="rounded w-full max-w-xxxl md:max-w-lg lg:max-w-xl"
          />
        </div>

        {/* Text Content on Right */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-900">Data Science</h2>
         <p className="text-gray-600 text-lg">
  Data Science is transforming the way organizations interpret and utilize data. With ever-increasing volumes of information, it has become essential to extract meaningful insights that drive smart business decisions.
</p>
<p className="text-gray-600 text-lg">
  Leveraging machine learning, artificial intelligence, and advanced statistical models, Data Science uncovers hidden patterns, trends, and predictive analytics that offer a competitive edge in every industry.
</p>
<p className="text-gray-600 text-lg">
  From automating processes to building intelligent systems, Data Science empowers professionals to solve complex problems efficiently. Continuous learning and staying updated with cutting-edge tools are vital in this dynamic field.
</p>

          <button className="bg-pink-600 hover:bg-pink-500 text-white font-semibold px-6 py-3 rounded-full transition">
            Learn More
          </button>
        </div>

      </div>
    </section>
    
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">Web Development</h2>
          <p className="text-gray-600 text-lg">
  Web development is a dynamic field where creativity meets technology. The web is constantly evolving, with new design trends, frameworks, and tools emerging every year.
</p>
<p className="text-gray-600 text-lg">
  From responsive layouts to interactive applications, modern web development focuses on delivering seamless user experiences across all devices. Developers use cutting-edge technologies like React, Tailwind CSS, and Node.js to craft fast, scalable, and visually appealing websites.
</p>
<p className="text-gray-600 text-lg">
  Continuous learning and adapting to new web standards is crucial. With a vast ecosystem of resources and communities, web developers are always equipped to stay ahead of the curve, turning innovative ideas into digital realities.
</p>

          <button className="bg-pink-600 hover:bg-pink-500 text-white font-semibold px-6 py-3 rounded-full transition">
            Learn More
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
      </>
  );
};

export default WebDesignSection;
