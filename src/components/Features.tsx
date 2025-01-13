export default function Features() {
  const features = [
    {
      title: "Light, Fast & Powerful",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/undraw_happy_news_hxmt.png",
    },
    {
      title: "Light, Fast & Powerful",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "undraw_social_influencer_sgsv.png",
    },
    {
      title: "Light, Fast & Powerful",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "undraw_mention_6k5d.png",
    },
  ];

  return (
    <section className="py-16 px-5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Light, Fast & Powerful
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <img
                src={feature.image}
                alt={feature.title}
                className="mx-auto mb-6"
              />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
