import React from "react";
import { useLoaderData } from "react-router-dom";
import PlantCards from "../Components/PlantCards";
import HeroSlider from "../Components/HeroSlider";
import PlantCareTips from "../Components/PlantCareTips";
import ExpertsSection from "../Components/ExpertsSection";

export default function Home() {
  const plants = useLoaderData();
  const topplants = plants.slice(0, 6);

  return (
    <div className="bg-[#FBFBF7]">
      {/* ===== HERO SLIDER ===== */}
      <HeroSlider></HeroSlider>

      {/* ===== TOP RATED PLANTS ===== */}
      <section className="flex flex-col items-center">
        <div className="w-full max-w-screen-xl px-4 sm:px-6 md:px-10">
          <div className="text-center py-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1f3d2b] delius-swash-caps-regular">
              Top Rated Indoor Plants
            </h1>
            <p className="py-4 text-sm sm:text-base md:text-lg bad-script-regular text-gray-700 max-w-3xl mx-auto">
              Discover our most loved plants, carefully selected for their
              beauty, air-purifying qualities, and ease of care.
            </p>
          </div>

          {/* Premium cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {topplants.map((plant) => (
              <PlantCards key={plant.plantId} plant={plant} />
            ))}
          </div>
        </div>

        {/* See More Button */}
        <div className="py-12">
          <button
            onClick={() => window.open("/plants", "_blank")}
            className="w-44 h-12 flex items-center justify-center gap-2 bg-green-200 text-black font-bold rounded-xl hover:scale-105 transition hover:bg-green-600 hover:text-white delius-swash-caps-regular"
          >
            View All Plants
          </button>
        </div>
      </section>

      <PlantCareTips></PlantCareTips>
      <ExpertsSection></ExpertsSection>
    </div>
  );
}
