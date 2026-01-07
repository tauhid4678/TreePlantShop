import { useMemo, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import { TfiShoppingCart } from "react-icons/tfi";
import { CiClock1 } from "react-icons/ci";
import { FaStarHalfAlt } from "react-icons/fa";

export default function PlantDetails() {
  const plants = useLoaderData();
  const { id } = useParams();
  const { user } = useAuth();

  const [showForm, setShowForm] = useState(false);

  const plant = useMemo(() => {
    return plants.find((p) => String(p.plantId) === String(id));
  }, [plants, id]);

  if (!plant) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-[#FBFBF7]">
        <p className="text-gray-600 bad-script-regular  ">Plant not found.</p>
      </div>
    );
  }

  const { plantName, image, price, rating, category, stock, description } =
    plant;

  const handleConsultationSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const date = form.date.value;
    const message = form.message.value;

    toast.success("Consultation booked successfully!");
    setShowForm(false);
    form.reset();
  };

  return (
    <div className="bg-[#FBFBF7]">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-10 py-10">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-3xl overflow-hidden shadow-sm bg-white">
            <img
              src={image}
              alt={plantName}
              className="w-full h-[520px] object-cover"
            />
          </div>

          <div>
            <div className="flex flex-wrap gap-3 bad-script-regular ">
              <span className="px-4 py-2 rounded-full bg-[#1f3d2b] text-white text-sm font-medium ">
                {category || "Indoor Plant"}
              </span>
              <span className="px-4 py-2 flex items-center gap-2 rounded-full bg-white border border-gray-200 text-gray-700 text-sm font-medium">
                <FaStarHalfAlt className="fill-amber-300" /> {rating}
              </span>
              <span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 text-sm font-medium">
                Stock: {stock ?? "N/A"}
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-semibold  delius-swash-caps-regular">
              {plantName}
            </h1>

            <p className="mt-4 text-gray-600 leading-relaxed bad-script-regular ">
              {description || "No description available."}
            </p>

            {/* price + cart row */}
            <div className="mt-8 flex items-center gap-6 delius-swash-caps-regular">
              <p className="text-5xl font-semibold text-[#1f3d2b]">${price}</p>

              <button
                type="button"
                onClick={() => toast.success("Added to cart (UI demo)!")}
                className="h-14 px-10 delius-swash-caps-regular rounded-2xl bg-[#1f3d2b] text-white font-semibold flex items-center justify-center gap-3 hover:bg-[#183226] transition"
              >
                <span>
                  <TfiShoppingCart />
                </span>{" "}
                Add to Cart
              </button>
            </div>

            {/* Consultation card */}
            <div className="mt-10 rounded-3xl bg-[#F3F0E8] p-8 border border-[#E7E1D5]">
              {!showForm ? (
                <>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">
                      <CiClock1 />
                    </span>
                    <h3 className="text-2xl font-semibold text-[#1f3d2b] delius-swash-caps-regular">
                      Book a Consultation
                    </h3>
                  </div>

                  <p className="mt-3 text-gray-600 bad-script-regular ">
                    Get personalized advice from our plant experts about caring
                    for your <span className="font-semibold">{plantName}</span>.
                  </p>

                  <button
                    type="button"
                    onClick={() => setShowForm(true)}
                    className="delius-swash-caps-regular mt-6 px-8 py-3 rounded-2xl bg-[#9BC49B] text-[#1f3d2b] font-semibold hover:opacity-90 transition"
                  >
                    Schedule Now
                  </button>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">
                      <CiClock1 />
                    </span>
                    <h3 className="text-2xl font-semibold delius-swash-caps-regulars text-[#1f3d2b]">
                      Book a Consultation
                    </h3>
                  </div>

                  <form onSubmit={handleConsultationSubmit} className="mt-6">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm bad-script-regular  font-medium text-[#1f3d2b]">
                          Your Name
                        </label>
                        <input
                          name="name"
                          type="text"
                          defaultValue={user?.displayName || ""}
                          placeholder="Your name"
                          className="mt-2 bad-script-regular  w-full px-4 py-3 rounded-xl border border-[#E3DCCF] bg-[#FBFAF6] focus:outline-none"
                          required
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium bad-script-regular  text-[#1f3d2b]">
                          Email
                        </label>
                        <input
                          name="email"
                          type="email"
                          defaultValue={user?.email || ""}
                          placeholder="you@example.com"
                          className="bad-script-regular  mt-2 w-full px-4 py-3 rounded-xl border border-[#E3DCCF] bg-[#FBFAF6] focus:outline-none"
                          required
                        />
                      </div>

                      <div>
                        <label className="bad-script-regular  text-sm font-medium text-[#1f3d2b]">
                          Phone
                        </label>
                        <input
                          name="phone"
                          type="tel"
                          placeholder="01XXXXXXXXX"
                          className="mt-2 bad-script-regular  w-full px-4 py-3 rounded-xl border border-[#E3DCCF] bg-[#FBFAF6] focus:outline-none"
                          required
                        />
                      </div>

                      <div>
                        <label className="bad-script-regular text-sm font-medium text-[#1f3d2b]">
                          Preferred Date
                        </label>
                        <input
                          name="date"
                          type="date"
                          className="mt-2 bad-script-regular  w-full px-4 py-3 rounded-xl border border-[#E3DCCF] bg-[#FBFAF6] focus:outline-none"
                          required
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="text-sm bad-script-regular font-medium text-[#1f3d2b]">
                          Message (Optional)
                        </label>
                        <textarea
                          name="message"
                          rows="4"
                          placeholder="Tell us about your plant care needs..."
                          className="mt-2 bad-script-regular  w-full px-4 py-3 rounded-xl border border-[#E3DCCF] bg-[#FBFAF6] focus:outline-none resize-none"
                        />
                      </div>
                    </div>

                    <div className="mt-6 flex gap-4">
                      <button
                        type="submit"
                        className="px-8 delius-swash-caps-regular py-3 rounded-2xl bg-[#9BC49B] text-[#1f3d2b] font-semibold hover:opacity-90 transition"
                      >
                        Book Consultation
                      </button>

                      <button
                        type="button"
                        onClick={() => setShowForm(false)}
                        className="px-8 py-3  rounded-2xl border border-[#E3DCCF] bg-[#FBFAF6] text-[#1f3d2b] font-semibold hover:bg-white transition"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
