import { useMemo, useState } from "react";
import { useLoaderData } from "react-router-dom";
import PlantCards from "../Components/PlantCards";
import { Search } from "lucide-react";

export default function Plants() {
  const plants = useLoaderData();

  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // categories from data
  const categories = useMemo(() => {
    const set = new Set(plants.map((p) => p.category).filter(Boolean));
    return ["All", ...Array.from(set)];
  }, [plants]);

  // search + filter
  const filteredPlants = useMemo(() => {
    const q = query.trim().toLowerCase();

    return plants.filter((p) => {
      const matchCategory =
        activeCategory === "All" ? true : p.category === activeCategory;

      const matchSearch =
        !q ||
        p.plantName?.toLowerCase().includes(q) ||
        p.category?.toLowerCase().includes(q);

      return matchCategory && matchSearch;
    });
  }, [plants, activeCategory, query]);

  return (
    <div className="bg-[#FBFBF7]">
      {/* Top banner */}
      <div className="bg-[#ECEBE6]">
        <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-10 py-16 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold delius-swash-caps-regular">
            Our Plant Collection
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-base sm:text-lg bad-script-regular">
            Explore our carefully curated selection of indoor plants, each
            chosen for their beauty and ease of care.
          </p>
        </div>
      </div>

      {/* Search + Categories */}
      <div className="border-b border-gray-200 bg-[#FBFBF7] bad-script-regular">
        <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-10 py-6">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
            {/* Search */}
            <div className="w-full lg:w-[360px]">
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <Search />
                </span>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  type="text"
                  placeholder="Search plants..."
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-transparent focus:outline-none focus:border-[#1f3d2b]"
                />
              </div>
            </div>

            {/* Category pills */}
            <div className="flex flex-wrap gap-3 lg:justify-end">
              {categories.map((cat) => {
                const active = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={
                      active
                        ? "px-5 py-2 rounded-full bg-[#1f3d2b] text-white font-medium"
                        : "px-5 py-2 rounded-full border border-gray-200 text-gray-700 bg-transparent hover:bg-white"
                    }
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Cards grid */}
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-10 py-10">
        {filteredPlants.length === 0 ? (
          <div className="text-center py-20 text-gray-600">
            No plants found.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {filteredPlants.map((plant) => (
              <PlantCards key={plant.plantId} plant={plant} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
