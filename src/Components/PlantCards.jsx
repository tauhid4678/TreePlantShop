import { Link } from "react-router-dom";
import { Star } from "lucide-react";
export default function PlantCard({ plant }) {
  const {
    plantId,
    plantName,
    price,
    rating,
    image,
    category,
    careLevel = "Easy",
  } = plant;

  return (
    <div className="w-full max-w-sm rounded-2xl overflow-hidden bg-[#f7f6f2] shadow-md hover:shadow-xl delius-swash-caps-regular transition">
      {/* Image Section */}
      <div className="relative h-72">
        <img
          src={image}
          alt={plantName}
          className="w-full h-full object-cover"
        />

        {/* Top badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="px-3 py-1 text-xs rounded-full bg-[#3f5f55] text-white">
            {category}
          </span>
        </div>

        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 text-xs rounded-full bg-[#8fb7a3] text-black">
            {careLevel}
          </span>
        </div>

        {/* Overlay button */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/25 opacity-0 hover:opacity-100 transition">
          <Link
            to={`/plants/${plantId}`}
            className="px-5 py-2 rounded-xl bg-[#3f5f55] text-white font-medium"
          >
            View Details
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <Star className="fill-yellow-500 text-amber-500"></Star>
          <span>{rating}</span>
        </div>

        <h3 className="mt-1 text-xl font-semibold text-[#1f3d2b]">
          {plantName}
        </h3>

        <p className="mt-1 text-2xl font-bold text-[#1f3d2b]">${price}</p>
      </div>
    </div>
  );
}
