import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import { Leaf, MailPlus, Lock, Eye, EyeOff, Camera } from "lucide-react";
import { RxAvatar } from "react-icons/rx";
import { FcGoogle } from "react-icons/fc";
import { GiLindenLeaf } from "react-icons/gi";

export default function Register() {
  const { createUser, googleSignIn, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/";

  const [showPass, setShowPass] = useState(false);

  const validatePassword = (password) => {
    if (password.length < 6) return "Password must be at least 6 characters.";
    if (!/[A-Z]/.test(password))
      return "Password must contain at least 1 uppercase letter.";
    if (!/[a-z]/.test(password))
      return "Password must contain at least 1 lowercase letter.";
    return null;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const photo = form.photo.value.trim();
    const password = form.password.value;

    const errorMsg = validatePassword(password);
    if (errorMsg) {
      toast.error(errorMsg);
      return;
    }

    try {
      const result = await createUser(email, password);

      await updateUserProfile(name, photo || "");

      toast.success("Account created successfully!");
      form.reset();

      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err?.message || "Registration failed");
    }
  };

  const handleGoogle = async () => {
    try {
      await googleSignIn();
      toast.success("Google sign up successful!");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err?.message || "Google sign up failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBF7]">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* LEFT PANEL */}
        <div className="hidden lg:flex items-center justify-center bg-gradient-to-b from-[#dfeee1] to-[#cfe2d1] px-10">
          <div className="text-center max-w-lg">
            <div className="mx-auto w-20 h-20 rounded-full bg-white/70 flex items-center justify-center shadow text-green-700">
              <span className="text-4xl">
                <GiLindenLeaf />
              </span>
            </div>

            <h2 className="mt-10 text-5xl font-semibold delius-swash-caps-regular ">
              Start Your Plant Journey
            </h2>

            <p className="mt-6 text-lg text-gray-700 leading-relaxed bad-script-regular ">
              Create an account to explore our collection, book consultations,
              and become a confident plant parent.
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md">
            <h2 className="mt-8 text-4xl font-semibold delius-swash-caps-regular text-center">
              Create Account
            </h2>
            <p className="mt-2 text-gray-600 text-center bad-script-regular">
              Join our community of plant lovers
            </p>

            <form onSubmit={handleRegister} className="mt-10 space-y-6">
              {/* Full Name */}
              <div>
                <label className="text-sm font-medium text-[#1f3d2b] delius-swash-caps-regular">
                  Full Name
                </label>
                <div className="mt-2 relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <RxAvatar />
                  </span>
                  <input
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-transparent focus:outline-none focus:border-[#1f3d2b] bad-script-regular"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium ">Email Address</label>
                <div className="mt-2 relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <MailPlus />
                  </span>
                  <input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="bad-script-regular w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-transparent focus:outline-none "
                    required
                  />
                </div>
              </div>

              {/* Photo URL */}
              <div>
                <label className="text-sm font-medium text-[#1f3d2b] delius-swash-caps-regular">
                  Photo URL (Optional)
                </label>
                <div className="mt-2 relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <Camera />
                  </span>
                  <input
                    name="photo"
                    type="url"
                    placeholder="https://example.com/photo.jpg"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-transparent focus:outline-none focus:border-[#1f3d2b] bad-script-regular"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="text-sm font-medium text-[#1f3d2b]">
                  Password
                </label>
                <div className="mt-2 relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <Lock />
                  </span>
                  <input
                    name="password"
                    type={showPass ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-12 py-3 rounded-xl border border-gray-200 bg-transparent focus:outline-none focus:border-[#1f3d2b]"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 delius-swash-caps-regular"
                    aria-label="Toggle password visibility"
                  >
                    {showPass ? <EyeOff /> : <Eye />}
                  </button>
                </div>

                {/* Small hint (optional) */}
                <p className="mt-2 text-xs text-gray-500 bad-script-regular">
                  Password must be 6+ characters with at least 1 uppercase and 1
                  lowercase letter.
                </p>
              </div>

              {/* Create account */}
              <button
                type="submit"
                className="delius-swash-caps-regular w-full py-3 rounded-xl bg-[#1f3d2b] text-white font-semibold hover:bg-[#1a3325] transition"
              >
                Create Account
              </button>

              {/* Divider */}
              <div className="flex items-center gap-3">
                <div className="h-px bg-gray-200 flex-1" />
                <p className="text-sm text-gray-500 bad-script-regular">
                  Or continue with
                </p>
                <div className="h-px bg-gray-200 flex-1" />
              </div>

              {/* Google */}
              <button
                type="button"
                onClick={handleGoogle}
                className="w-full py-3 rounded-xl border border-gray-200 bg-transparent font-semibold flex items-center justify-center gap-3 hover:bg-white transition delius-swash-caps-regular"
              >
                <span className="text-lg">
                  <FcGoogle />
                </span>
                Continue with Google
              </button>

              <p className="text-center text-sm text-gray-600 bad-script-regular">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-semibold  hover:underline delius-swash-caps-regular"
                >
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
