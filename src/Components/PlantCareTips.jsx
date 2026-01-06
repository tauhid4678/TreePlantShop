import { Droplets, Sun, Thermometer, Leaf } from "lucide-react";

const tips = [
  {
    icon: Droplets,
    title: "Watering Wisdom",
    desc: "Most indoor plants prefer to dry out slightly between waterings. Check the top inch of soil before watering.",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Sun,
    title: "Light Requirements",
    desc: "Place plants according to their light needs. Most tropicals love bright, indirect light near east or west-facing windows.",
    bg: "bg-yellow-50",
    iconColor: "text-yellow-600",
  },
  {
    icon: Thermometer,
    title: "Temperature Tips",
    desc: "Keep plants away from drafts and heat sources. Most thrive between 60–75°F (15–24°C).",
    bg: "bg-pink-50",
    iconColor: "text-pink-600",
  },
  {
    icon: Leaf,
    title: "Feeding Schedule",
    desc: "Feed your plants monthly during spring and summer with a balanced liquid fertilizer. Reduce in winter.",
    bg: "bg-green-50",
    iconColor: "text-green-700",
  },
];

export default function PlantCareTips() {
  return (
    <section className="bg-[#FBFBF7] py-16">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Heading */}
        <div className="text-center">
          <p className="tracking-widest text-sm font-semibold text-[#C46B4E] delius-swash-caps-regular">
            EXPERT ADVICE
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-[#1f3d2b] delius-swash-caps-regular">
            Plant Care Tips
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base md:text-lg bad-script-regular">
            Essential guidance to help your indoor plants thrive and bring
            lasting beauty to your home.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tips.map((t, idx) => {
            const Icon = t.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white shadow-sm hover:shadow-md transition p-8"
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${t.bg} flex items-center justify-center`}
                >
                  <Icon className={`w-6 h-6 ${t.iconColor}`} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[#1f3d2b] delius-swash-caps-regular">
                  {t.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed bad-script-regular">
                  {t.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
