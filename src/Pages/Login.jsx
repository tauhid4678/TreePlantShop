import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import { MailPlus, Lock, Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { GiLindenLeaf } from "react-icons/gi";
export default function Login() {
  const { signIn, googleSignIn, resetPassword } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/";

  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const emailVal = form.email.value;
    const passVal = form.password.value;

    try {
      await signIn(emailVal, passVal);
      toast.success("Login successful!");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err?.message || "Login failed");
    }
  };

  const handleGoogle = async () => {
    try {
      await googleSignIn();
      toast.success("Google login successful!");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err?.message || "Google login failed");
    }
  };

  const handleForgot = async () => {
    if (!email) {
      toast.error("Please type your email first.");
      return;
    }
    try {
      await resetPassword(email);
      toast.success("Password reset email sent! Check your inbox.");
    } catch (err) {
      toast.error(err?.message || "Reset failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBF7]">
      <div className="grid lg:grid-cols-2 min-h-screen">
        <div className="flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md">
            <h2 className="mt-10 text-4xl font-semibold  delius-swash-caps-regular">
              Welcome Back
            </h2>
            <p className="mt-2 text-gray-600 bad-script-regular">
              Sign in to continue your plant journey
            </p>

            <form onSubmit={handleLogin} className="mt-10 space-y-6">
              {/* Email */}
              <div>
                <label className="text-sm font-medium delius-swash-caps-regular">
                  Email Address
                </label>
                <div className="mt-2 relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 ">
                    <MailPlus />
                  </span>
                  <input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-transparent focus:outline-none focus:border-[#1f3d2b]"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between delius-swash-caps-regular">
                  <label className="text-sm font-medium text-[#1f3d2b] ">
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={handleForgot}
                    className="text-sm text-[#1f3d2b] hover:underline bad-script-regular"
                  >
                    Forgot Password?
                  </button>
                </div>

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
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
                    aria-label="Toggle password visibility"
                  >
                    {showPass ? <Eye /> : <EyeOff />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className=" delius-swash-caps-regular w-full py-3 rounded-xl bg-green-400 font-semibold hover:bg-green-900 hover:text-white transition"
              >
                Sign In
              </button>

              <div className="flex items-center gap-3">
                <div className="h-px bg-gray-200 flex-1" />
                <p className="text-sm text-gray-500 bad-script-regular ">
                  Or continue with
                </p>
                <div className="h-px bg-gray-200 flex-1" />
              </div>

              <button
                type="button"
                onClick={handleGoogle}
                className="w-full py-3 rounded-xl border border-gray-200 bg-transparent font-semibold flex items-center justify-center gap-3 hover:bg-white transition delius-swash-caps-regular"
              >
                <span className="text-lg delius-swash-caps-regular ">
                  <FcGoogle />
                </span>
                Continue with Google
              </button>

              <p className="text-center text-sm text-gray-600 bad-script-regular">
                Don&apos;t have an account?{" "}
                <Link
                  to="/register"
                  className="font-semibold text-[#1f3d2b] hover:underline delius-swash-caps-regular"
                >
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center bg-gradient-to-b from-[#204636] to-[#183629] text-white px-10">
          <div className="text-center max-w-lg">
            <div className="mx-auto w-20 h-20 rounded-full bg-white text-green-700 flex items-center justify-center">
              <GiLindenLeaf size={35} />
            </div>

            <h3 className="mt-8 text-5xl font-semibold delius-swash-caps-regular">
              Nurture Your Green Space
            </h3>

            <p className="mt-5 text-lg text-white/80 leading-relaxed bad-script-regular ">
              Join thousands of plant lovers creating beautiful, healthy homes
              with GreenNest.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
