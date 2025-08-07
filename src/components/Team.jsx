import React from "react";

function Team() {
  const members = [
    { name: "Arjun Patel", role: "CEO" },
    { name: "Neha Sharma", role: "CTO" },
    { name: "Rahul Verma", role: "Lead Developer" }
  ];

  return (
    <section id="team" className="p-12 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {members.map((member, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
