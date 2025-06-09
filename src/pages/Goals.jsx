function Goals() {
  // Mock translation function for demonstration
  const t = (key) => {
    const translations = {
      "goals_page.title": "I Nostri Obiettivi",
      "goals_page.goal_1":
        "Promuovere una crescita economica duratura, inclusiva e sostenibile, la piena e produttiva occupazione e un lavoro dignitoso per tutti.",
      "goals_page.goal_2":
        "Costruire infrastrutture resilienti, promuovere l'industrializzazione inclusiva e sostenibile e favorire l'innovazione.",
      "goals_page.goal_3":
        "Ridurre le disuguaglianze all'interno dei piccoli Paesi.",
    };
    return translations[key] || key;
  };

  const goals = [
    {
      id: 1,
      image:
        "https://e4k4c4x9.delivery.rocketcdn.me/it/wp-content/uploads/sites/3/2019/03/SDG-icon-IT-RGB-08.jpg",
      alt: "Obiettivo 8 - Lavoro dignitoso e crescita economica",
      translationKey: "goals_page.goal_1",
    },
    {
      id: 2,
      image:
        "https://e4k4c4x9.delivery.rocketcdn.me/it/wp-content/uploads/sites/3/2019/03/SDG-icon-IT-RGB-09.jpg",
      alt: "Obiettivo 9 - Imprese, innovazione e infrastrutture",
      translationKey: "goals_page.goal_2",
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3c0TqKGHnyrptqP_NRiPY6_eESR-gFP_3Hg&s",
      alt: "Obiettivo 10 - Ridurre le disuguaglianze",
      translationKey: "goals_page.goal_3",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t("goals_page.title")}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            I nostri obiettivi per un futuro sostenibile e inclusivo
          </p>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {goals.map((goal, index) => (
            <div
              key={goal.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2"
              style={{
                animationDelay: `${index * 150}ms`,
                animation: "fadeInUp 0.6s ease-out forwards",
              }}
            >
              {/* Image Container */}
              <div className="relative p-6 bg-gradient-to-br from-gray-50 to-white">
                <div className="relative overflow-hidden rounded-xl bg-white shadow-inner">
                  <div className="w-full h-48 flex items-center justify-center">
                    <img
                      src={goal.image}
                      alt={goal.alt}
                      className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500 p-4"
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    <div
                      className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-blue-100 to-green-100"
                      style={{ display: "none" }}
                    >
                      <div className="text-center p-4">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-2xl">
                            {goal.id === 1 ? "8" : goal.id === 2 ? "9" : "10"}
                          </span>
                        </div>
                        <h3 className="font-semibold text-gray-700 text-sm">
                          {goal.id === 1
                            ? "Lavoro Dignitoso"
                            : goal.id === 2
                            ? "Innovazione"
                            : "Riduzione Disuguaglianze"}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-2">
                <div className="flex items-start">
                  <div className="w-2 h-12 bg-gradient-to-b from-blue-500 to-green-500 rounded-full mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {t(goal.translationKey)}
                  </p>
                </div>
              </div>

              {/* Hover Effect Indicator */}
              <div className="h-1 bg-gradient-to-r from-blue-500 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a href="/about">
            <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold py-4 px-8 rounded-full hover:from-blue-700 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Scopri di più sui nostri obiettivi
            </button>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Goals;
