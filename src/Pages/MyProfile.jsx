import { useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import { RxAvatar } from "react-icons/rx";
import { IoIosMailOpen } from "react-icons/io";

export default function MyProfile() {
  const { user, updateUserProfile } = useAuth();

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await updateUserProfile(name, photo);
      toast.success("Profile updated!");
      setIsEditing(false);
    } catch (err) {
      toast.error(err?.message || "Update failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBF7] flex flex-col items-center px-4 py-12">
      <h1 className="delius-swash-caps-regular text-4xl sm:text-5xl font-semibold text-[#1f3d2b] mb-10">
        My Profile
      </h1>

      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sm:p-10">
        {/* Avatar */}
        <div className="flex flex-col items-center text-center">
          <div className="w-32 h-32 rounded-full ring-4 ring-[#dfeee1] overflow-hidden bg-gray-100">
            <img
              src={
                user?.photoURL ||
                "https://i.ibb.co/3s7Jm6q/user-placeholder.png"
              }
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="delius-swash-caps-regular mt-6 text-2xl sm:text-3xl font-semibold text-[#1f3d2b] uppercase">
            {user?.displayName || "Unknown User"}
          </h2>
          <p className="bad-script-regular text-gray-600">
            {user?.email || "No email"}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex items-center gap-4 bg-[#F3F0E8] rounded-2xl p-5 border border-[#E7E1D5]">
            <div className="w-12 h-12 rounded-xl bg-[#dfeee1] flex items-center justify-center">
              <span className="text-xl">
                <RxAvatar />
              </span>
            </div>
            <div>
              <p className="text-sm text-gray-600 bad-script-regular ">Name</p>
              <p className="font-semibold bad-script-regular  text-[#1f3d2b]">
                {user?.displayName || "N/A"}
              </p>
            </div>
          </div>

          {/* Email card */}
          <div className="flex bad-script-regular items-center gap-4 bg-[#F3F0E8] rounded-2xl p-5 border border-[#E7E1D5]">
            <div className="w-12 h-12 rounded-xl bg-[#dfeee1] flex items-center justify-center">
              <span className="text-xl">
                <IoIosMailOpen />
              </span>
            </div>
            <div>
              <p className="text-sm text-gray-600">Email</p>
              <p className="font-semibold text-[#1f3d2b]">
                {user?.email || "N/A"}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="px-8 delius-swash-caps-regular  py-3 rounded-2xl bg-[#9BC49B] text-[#1f3d2b] font-semibold hover:opacity-90 transition"
            >
              Edit Profile
            </button>
          ) : (
            <form onSubmit={handleUpdate} className="space-y-5">
              <div className="grid sm:grid-cols-2 bad-script-regular  gap-5">
                <div>
                  <label className="text-sm font-medium text-[#1f3d2b]">
                    Full Name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FBFBF7] focus:outline-none focus:border-[#1f3d2b]"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-[#1f3d2b]">
                    Photo URL
                  </label>
                  <input
                    value={photo}
                    onChange={(e) => setPhoto(e.target.value)}
                    type="url"
                    placeholder="https://example.com/photo.jpg"
                    className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FBFBF7] focus:outline-none focus:border-[#1f3d2b]"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className=" delius-swash-caps-regular px-8 py-3 rounded-2xl bg-[#1f3d2b] text-white font-semibold hover:bg-[#183226] transition"
                >
                  Save Changes
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsEditing(false);
                    setName(user?.displayName || "");
                    setPhoto(user?.photoURL || "");
                  }}
                  className=" delius-swash-caps-regular px-8 py-3 rounded-2xl border border-gray-200 bg-white text-[#1f3d2b] font-semibold hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
