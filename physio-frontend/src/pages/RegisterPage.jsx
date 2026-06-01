import { useState } from "react";

function RegisterPage() {

    const [role, setRole] = useState("PATIENT");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        qualification: "",
        specialization: "",
        experience: "",
        bodyPartId: 1
    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handlePatientRegister = async () => {

        if (formData.password !== formData.confirmPassword) {

            alert("Passwords do not match");
            return;
        }

        try {

            const response = await fetch(
                "http://localhost:8080/api/users/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: formData.name,
                        email: formData.email,
                        password: formData.password,
                        role: "PATIENT"
                    })
                }
            );

            if (response.ok) {

                alert("Patient Registered Successfully");
                window.location.href = "/login";
            }
            else {

                alert("Registration Failed");
            }

        }
        catch (error) {

            console.error(error);
            alert("Server Error");
        }
    };

    const handleDoctorRegister = async () => {

        if (formData.password !== formData.confirmPassword) {

            alert("Passwords do not match");
            return;
        }

        try {

            const response = await fetch(
                "http://localhost:8080/api/doctors/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        fullName: formData.name,
                        email: formData.email,
                        password: formData.password,
                        qualification: formData.qualification,
                        specialization: formData.specialization,
                        experience: Number(formData.experience),
                        bodyPartId: Number(formData.bodyPartId)
                    })
                }
            );

            if (response.ok) {

                alert(
                    "Doctor Registered Successfully. Waiting For Admin Verification."
                );

                window.location.href = "/login";
            }
            else {

                const errorText = await response.text();

                console.log(errorText);

                alert("Doctor Registration Failed");
            }

        }
        catch (error) {

            console.error(error);
            alert("Server Error");
        }
    };

    return (

        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 flex items-center justify-center px-6">

            <div className="w-full max-w-2xl bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">

                <h1 className="text-4xl font-bold text-white text-center">
                    Create Account
                </h1>

                <p className="text-center text-slate-400 mt-2">
                    Join PhysioAI Platform
                </p>

                <div className="mt-8">

                    <label className="text-slate-300 block mb-2">
                        Register As
                    </label>

                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full p-3 rounded-xl bg-slate-900 text-white"
                    >
                        <option value="PATIENT">
                            Patient
                        </option>

                        <option value="DOCTOR">
                            Doctor
                        </option>
                    </select>

                </div>

                <div className="space-y-4 mt-6">

                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        onChange={handleChange}
                        className="w-full p-3 rounded-xl bg-slate-900 text-white"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        className="w-full p-3 rounded-xl bg-slate-900 text-white"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        className="w-full p-3 rounded-xl bg-slate-900 text-white"
                    />

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        onChange={handleChange}
                        className="w-full p-3 rounded-xl bg-slate-900 text-white"
                    />

                    {role === "DOCTOR" && (

                        <>
                            <input
                                type="text"
                                name="qualification"
                                placeholder="Qualification"
                                onChange={handleChange}
                                className="w-full p-3 rounded-xl bg-slate-900 text-white"
                            />

                            <input
                                type="text"
                                name="specialization"
                                placeholder="Specialization"
                                onChange={handleChange}
                                className="w-full p-3 rounded-xl bg-slate-900 text-white"
                            />

                            <input
                                type="number"
                                name="experience"
                                placeholder="Years Of Experience"
                                onChange={handleChange}
                                className="w-full p-3 rounded-xl bg-slate-900 text-white"
                            />

                            <select
                                name="bodyPartId"
                                onChange={handleChange}
                                className="w-full p-3 rounded-xl bg-slate-900 text-white"
                            >
                                <option value="1">Knee</option>
                                <option value="2">Neck</option>
                                <option value="3">Shoulder</option>
                                <option value="4">Upper Back</option>
                                <option value="5">Lower Back</option>
                                <option value="6">Hip</option>
                                <option value="7">Ankle</option>
                            </select>
                        </>
                    )}

                    <button
                        onClick={
                            role === "PATIENT"
                                ? handlePatientRegister
                                : handleDoctorRegister
                        }
                        className="w-full bg-cyan-600 hover:bg-cyan-700 transition-all duration-300 text-white p-3 rounded-xl font-semibold"
                    >
                        Create Account
                    </button>

                    <button
                        onClick={() =>
                            window.location.href = "/login"
                        }
                        className="w-full text-cyan-400 hover:text-cyan-300"
                    >
                        Already have an account? Login
                    </button>

                </div>

            </div>

        </div>
    );
}

export default RegisterPage;