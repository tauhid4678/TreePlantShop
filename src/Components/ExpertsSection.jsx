const experts = [
  {
    name: "Dr. Sarah Chen",
    role: "Tropical Plant Specialist",
    desc: "With over 15 years of experience in botanical sciences, Dr. Chen helps you create the perfect tropical oasis at home.",
    img: "https://i.pravatar.cc/300?img=47",
  },
  {
    name: "Marcus Williams",
    role: "Indoor Garden Designer",
    desc: "Marcus transforms living spaces with his innovative plant arrangements and sustainable gardening practices.",
    img: "https://i.pravatar.cc/300?img=12",
  },
  {
    name: "Emma Rodriguez",
    role: "Plant Care Educator",
    desc: "Emma teaches thousands of plant parents how to nurture their green friends through her popular workshops and guides.",
    img: "https://i.pravatar.cc/300?img=32",
  },
  {
    name: "David Park",
    role: "Rare Plants Curator",
    desc: "David sources unique and rare indoor plants from around the world, bringing exotic beauty to your doorstep.",
    img: "https://i.pravatar.cc/300?img=8",
  },
];

export default function ExpertsSection() {
  return (
    <section className="bg-[#FBFBF7] py-16">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Heading */}
        <div className="text-center">
          <p className="tracking-widest text-sm font-semibold text-[#8FB7A3] delius-swash-caps-regular">
            OUR TEAM
          </p>

          <h2 className=" delius-swash-caps-regular mt-3 text-4xl md:text-5xl font-semibold text-[#1f3d2b]">
            Meet Our Green Experts
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base md:text-lg bad-script-regular">
            Our passionate plant specialists are here to guide you on your
            journey to becoming a confident plant parent.
          </p>
        </div>

        {/* Experts Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {experts.map((e, idx) => (
            <div key={idx} className="text-center">
              {/* Avatar with ring */}
              <div className="mx-auto w-40 h-40 rounded-full p-1 bg-white shadow-md">
                <div className="w-full h-full rounded-full overflow-hidden ring-4 ring-white">
                  <img
                    src={e.img}
                    alt={e.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <h3 className="mt-7 text-2xl font-semibold text-[#1f3d2b] delius-swash-caps-regular">
                {e.name}
              </h3>

              <p className="mt-2 text-[#C46B4E] font-medium delius-swash-caps-regular">
                {e.role}
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed max-w-xs mx-auto bad-script-regular">
                {e.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
