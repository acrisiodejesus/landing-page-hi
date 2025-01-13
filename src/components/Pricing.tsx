export default function Pricing() {
  return (
    <section className="bg-gray-50 py-16 px-5">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">A Price To Suit Everyone</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          commodo ligula eget dolor.
        </p>
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="text-4xl font-bold mb-4">$40</div>
          <p className="text-gray-600 mb-6">UI Design Kit</p>
          <button className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 w-full">
            Purchase Now
          </button>
        </div>
      </div>
    </section>
  );
}
