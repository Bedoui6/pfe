import img1 from "./images/WebSite-03.png";
import img2 from "./images/WebSite-04.png";
const FeaturesSection = () => {
  return (
    <div id="features">
      <section className="bg-white py-16 px-4 md:px-16 relative top-[80px]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Text Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Helps your child <span className="text-blue-600">learn and love Islam</span>
            </h2>
            <p className="font-semibold mt-2">Fun, bite-sized lessons, with a gamified experience</p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li className="flex items-center gap-2">10 academic levels per subject</li>
              <li className="flex items-center gap-2">5,000+ interactive micro-lessons</li>
              <li className="flex items-center gap-2">Learning gets rewarded with coins, gems, and trophies</li>
              <li className="flex items-center gap-2">Spaced repetition for better retention</li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src={img1}
              alt="Learning Kid"
            />
          </div>
        </div>
      </section>

      <section className="bg-white-100 py-16 px-4 md:px-16 relative top-[80px]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
          <img
              src={img2}
              alt="Learning Kid"
            />
          </div>

          {/* Right Text Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              A learning experience <span className="text-purple-600">your child will love</span>
            </h2>
            <p className="font-semibold mt-2">Engaging and interactive for maximum enjoyment</p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li className="flex items-center gap-2">Daily challenges & progress tracking</li>
              <li className="flex items-center gap-2">Designed by education experts</li>
              <li className="flex items-center gap-2">Personalized learning paths</li>
              <li className="flex items-center gap-2">Safe & ad-free environment</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesSection;
