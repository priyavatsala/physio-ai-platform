import { useNavigate } from "react-router-dom";
import LogoutButton from "../components/LogoutButton";

function Dashboard() {

    const navigate = useNavigate();

    const name =
        localStorage.getItem("userName");

    return (

        <div className="min-h-screen bg-slate-950 text-white">

            {/* Header */}

            <div className="flex justify-between items-center p-8 border-b border-slate-800">

                <div>

                    <h1 className="text-4xl font-bold">
                        Welcome, {name}
                    </h1>

                    <p className="text-slate-400 mt-2">
                        Patient Dashboard
                    </p>

                </div>

                <LogoutButton />

            </div>

            {/* Cards */}

            <div className="p-8">

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                    <div
                        onClick={() =>
                            navigate("/assessment")
                        }
                        className="
                            bg-slate-900
                            p-6
                            rounded-2xl
                            cursor-pointer
                            hover:bg-slate-800
                            transition
                        "
                    >
                        <h2 className="text-xl font-semibold">
                            AI Assessment
                        </h2>

                        <p className="text-slate-400 mt-3">
                            Analyze pain areas and receive recommendations.
                        </p>
                    </div>

                    <div
                        onClick={() =>
                            navigate("/chatbot")
                        }
                        className="
                            bg-slate-900
                            p-6
                            rounded-2xl
                            cursor-pointer
                            hover:bg-slate-800
                            transition
                        "
                    >
                        <h2 className="text-xl font-semibold">
                            AI Chatbot
                        </h2>

                        <p className="text-slate-400 mt-3">
                            Ask physiotherapy related questions.
                        </p>
                    </div>

                    <div
                        onClick={() =>
                            navigate("/assessment")
                        }
                        className="
                            bg-slate-900
                            p-6
                            rounded-2xl
                            cursor-pointer
                            hover:bg-slate-800
                            transition
                        "
                    >
                        <h2 className="text-xl font-semibold">
                            Recommended Doctors
                        </h2>

                        <p className="text-slate-400 mt-3">
                            View verified physiotherapists.
                        </p>
                    </div>

                    <div
                        onClick={() =>
                            navigate("/assessment")
                        }
                        className="
                            bg-slate-900
                            p-6
                            rounded-2xl
                            cursor-pointer
                            hover:bg-slate-800
                            transition
                        "
                    >
                        <h2 className="text-xl font-semibold">
                            Exercise Library
                        </h2>

                        <p className="text-slate-400 mt-3">
                            Browse approved rehabilitation videos.
                        </p>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Dashboard;