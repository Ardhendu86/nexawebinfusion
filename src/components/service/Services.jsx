import React from "react";

function Services() {
  const services = [
    { title: "Web Development", desc: "Modern and scalable web applications." },
    { title: "Mobile Apps", desc: "Cross-platform mobile solutions." },
    { title: "Cloud Services", desc: "Secure and reliable cloud solutions." }
  ];

  return (
    <section id="services" className="p-12 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
