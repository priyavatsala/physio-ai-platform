import { useState } from "react";

function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [selectedRole, setSelectedRole] = useState("PATIENT");

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const response = await fetch(
                "http://localhost:8080/api/users/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email,
                        password
                    })
                }
            );

            const data = await response.json();

            if (data.message !== "Login successful") {

                alert(data.message);
                return;
            }

            if (data.role !== selectedRole) {

                alert(
                    `This account belongs to ${data.role}`
                );

                return;
            }

            localStorage.setItem(
                "userRole",
                data.role
            );

            localStorage.setItem(
                "userEmail",
                data.email
            );

            localStorage.setItem(
                "userName",
                data.name
            );

            if (data.role === "PATIENT") {

                window.location.href =
                    "/home";
            }

            else if (data.role === "DOCTOR") {

                window.location.href =
                    "/doctor-dashboard";
            }

            else if (data.role === "ADMIN") {

                window.location.href =
                    "/admin-dashboard";
            }

        }
        catch (error) {

            console.error(error);

            alert("Login Failed");
        }
    };

    return (

        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 overflow-hidden">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.15),transparent_35%)]" />

            <div className="relative min-h-screen flex items-center justify-center px-6">

                <div className="grid lg:grid-cols-2 gap-12 items-center w-full max-w-7xl">

                    <div className="hidden lg:flex flex-col justify-center">

                        <h1 className="text-6xl font-bold text-white">
                            PhysioAI
                        </h1>

                        <p className="text-cyan-300 text-xl mt-4">
                            Intelligent Physiotherapy Platform
                        </p>

                        <p className="text-slate-400 mt-6 text-lg leading-relaxed max-w-xl">
                            Transform rehabilitation through AI-powered assessment,
                            personalized recovery guidance, expert physiotherapy
                            support and intelligent health tracking.
                        </p>

                        <div className="mt-12 grid grid-cols-2 gap-4 max-w-2xl">

                            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5">
                                <h3 className="text-white font-semibold text-lg">
                                    AI Assessment
                                </h3>

                                <p className="text-slate-400 text-sm mt-2">
                                    Analyze symptoms and identify affected body
                                    regions using intelligent physiotherapy tools.
                                </p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5">
                                <h3 className="text-white font-semibold text-lg">
                                    Recovery Plans
                                </h3>

                                <p className="text-slate-400 text-sm mt-2">
                                    Personalized rehabilitation guidance based
                                    on your condition.
                                </p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5">
                                <h3 className="text-white font-semibold text-lg">
                                    Verified Doctors
                                </h3>

                                <p className="text-slate-400 text-sm mt-2">
                                    Connect with trusted physiotherapists
                                    verified by the platform.
                                </p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5">
                                <h3 className="text-white font-semibold text-lg">
                                    Exercise Library
                                </h3>

                                <p className="text-slate-400 text-sm mt-2">
                                    Guided exercises and recovery videos
                                    curated by professionals.
                                </p>
                            </div>

                        </div>

                    </div>

                    <div className="flex justify-center">

                        <div
                            className="
                                w-full
                                max-w-md
                                bg-white/10
                                backdrop-blur-xl
                                border
                                border-white/10
                                rounded-3xl
                                p-8
                                shadow-[0_0_50px_rgba(6,182,212,0.15)]
                            "
                        >

                            <div className="mb-8">

                                <h2 className="text-3xl font-bold text-white">
                                    Welcome Back
                                </h2>

                                <p className="text-slate-400 mt-2">
                                    Sign in to continue to PhysioAI
                                </p>

                            </div>

                            <form
                                onSubmit={handleLogin}
                                className="space-y-5"
                            >

                                <div>

                                    <label className="text-slate-300 block mb-2">
                                        Login As
                                    </label>

                                    <select
                                        value={selectedRole}
                                        onChange={(e) =>
                                            setSelectedRole(
                                                e.target.value
                                            )
                                        }
                                        className="
                                            w-full
                                            p-3
                                            rounded-xl
                                            bg-slate-900/70
                                            text-white
                                            border
                                            border-slate-700
                                        "
                                    >

                                        <option value="PATIENT">
                                            Patient
                                        </option>

                                        <option value="DOCTOR">
                                            Doctor
                                        </option>

                                        <option value="ADMIN">
                                            Admin
                                        </option>

                                    </select>

                                </div>

                                <div>

                                    <label className="text-slate-300 block mb-2">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(
                                                e.target.value
                                            )
                                        }
                                        placeholder="Enter your email"
                                        className="
                                            w-full
                                            p-3
                                            rounded-xl
                                            bg-slate-900/70
                                            text-white
                                            border
                                            border-slate-700
                                        "
                                    />

                                </div>

                                <div>

                                    <label className="text-slate-300 block mb-2">
                                        Password
                                    </label>

                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(
                                                e.target.value
                                            )
                                        }
                                        placeholder="Enter your password"
                                        className="
                                            w-full
                                            p-3
                                            rounded-xl
                                            bg-slate-900/70
                                            text-white
                                            border
                                            border-slate-700
                                        "
                                    />

                                </div>

                                <button
                                    type="submit"
                                    className="
                                        w-full
                                        bg-cyan-600
                                        hover:bg-cyan-700
                                        transition
                                        text-white
                                        p-3
                                        rounded-xl
                                        font-semibold
                                    "
                                >
                                    Sign In
                                </button>

                            </form>

                            <div className="mt-8 text-center">

                                <p className="text-slate-400">
                                    New to PhysioAI?
                                </p>

                                <button
                                    onClick={() =>
                                        window.location.href = "/register"
                                    }
                                    className="
        mt-2
        text-cyan-400
        hover:text-cyan-300
    "
                                >
                                    Create Account
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default LoginPage;