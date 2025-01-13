export default function Hero() {
  return (
    <section className="bg-gray-50 px-5 py-16 ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Introduce Your Product Quickly & Effectively
          </h1>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            commodo ligula eget dolor. Aenean massa.
          </p>
          <div className="space-x-4">
            <button className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800">
              Purchase $40
            </button>
            <button className="bg-white text-gray-800 px-6 py-2 rounded-md border hover:bg-gray-50">
              Learn More
            </button>
          </div>
        </div>
        <div className="relative h-[50vh]">
          <img
            src="/designer_1.png"
            alt="Product illustration"
            className="object-contain h-[50vh]"
          />
        </div>
      </div>
    </section>
  );
}
