import { Mail } from 'lucide-react';

export default function Team() {
  const coaches = [
    {
      name: 'Tobi',
      role: 'Haupttrainerin',
      qualification: 'Diplom-Trainerin, UEFA B-Lizenz',
      specialization: 'Youth & Juniors',
      image: '/image.png',
    },
    {
      name: 'Michael',
      role: 'Co-Trainer',
      qualification: 'Staatlich geprüfter Trainer',
      specialization: 'Rookies & Mini-Volleyer',
      image: '/image.png',
    },
    {
      name: 'Lisa',
      role: 'Nachwuchstrainerin',
      qualification: 'C-Trainer-Lizenz',
      specialization: 'Mini-Volleyer & Ballschule',
      image: '/image.png',
    },
  ];

  return (
    <section id="team" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Unser Trainerteam
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Professionell, erfahren und mit viel Herz dabei – unser Team sorgt für optimale Betreuung und Förderung.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {coaches.map((coach, index) => (
            <div key={index} className="flex flex-col">
              <div className="aspect-square rounded-2xl shadow-lg overflow-hidden mb-6">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{coach.name}</h3>
                <p className="text-red-600 font-semibold text-sm mb-2">{coach.role}</p>
                <p className="text-gray-600 text-sm mb-2">{coach.qualification}</p>
                <p className="text-gray-600 text-sm">{coach.specialization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
