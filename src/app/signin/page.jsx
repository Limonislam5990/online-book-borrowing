"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "../lib/auth-client";


const SignIn = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields.");
      setLoading(false);
      return;
    }

    const { data, error: authError } = await authClient.signIn.email({
      email: formData.email,
      password: formData.password,
    });

    if (authError) {
      setError(authError.message || "Invalid email or password.");
      setLoading(false);
    } else {
      alert("Login Successful!");
      router.push("/");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/"
      });
    } catch (err) {
      console.error("Google authentication error:", err);
      setError("Google authentication failed.");
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-amber-50/30 p-8 rounded-2xl border border-amber-100 shadow-sm space-y-6">
        
        <div className="text-center">
          <h2 className="text-3xl font-black text-slate-800">
            Welcome <span className="text-orange-600">Back</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500">
            Login to your MangoBook account to continue
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 text-xs sm:text-sm p-3 rounded-lg text-center font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-1">Email</label>
            <input type="email" name="email" placeholder="name@example.com" value={formData.email} onChange={handleChange} className="input input-bordered w-full bg-white border-amber-200 text-slate-800 focus:border-orange-500 focus:outline-none" />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-1">Password</label>
            <input type="password" name="password" placeholder="••••••••" value={formData.password} onChange={handleChange} className="input input-bordered w-full bg-white border-amber-200 text-slate-800 focus:border-orange-500 focus:outline-none" />
          </div>

          <button type="submit" disabled={loading} className="btn btn-block bg-orange-600 hover:bg-orange-700 text-white font-bold uppercase tracking-wider border-none rounded-xl mt-2">
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="divider text-slate-400 text-xs uppercase tracking-wider font-semibold">OR</div>

        <button onClick={handleGoogleLogin} className="btn btn-block bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-sm font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2">
          Continue with Google
        </button>

        <p className="text-center text-xs sm:text-sm text-slate-600 pt-2">
          New to MangoBook? <Link href="/signup" className="text-orange-600 font-bold hover:underline">Register Now</Link>
        </p>

      </div>
    </div>
  );
};

export default SignIn;
