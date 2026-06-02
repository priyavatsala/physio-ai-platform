import { useState } from "react";

function Chatbot() {

    const [message, setMessage] = useState("");
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);

    const quickQuestions = [
        "Knee pain",
        "Neck pain",
        "Shoulder pain",
        "Lower back pain",
        "Posture improvement",
        "Best physiotherapy exercises"
    ];

    const sendMessage = async (customMessage = null) => {

        const msg = customMessage || message;

        if (!msg.trim()) return;

        setLoading(true);

        try {

            const res = await fetch(
                "http://localhost:8080/api/chatbot",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        message: msg,
                    }),
                }
            );

            const data = await res.json();

            setResponse(data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);
        }
    };

    return (

        <div className="min-h-screen bg-slate-950 text-white p-8">

            <div className="max-w-5xl mx-auto">

                {/* Header */}

                <div className="text-center mb-8">

                    <h1 className="text-5xl font-bold mb-3">
                        PhysioAI Assistant
                    </h1>

                    <p className="text-slate-400 text-lg">
                        AI Powered Physiotherapy Guidance
                    </p>

                    <div className="flex justify-center items-center mt-4">

                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-2"></div>

                        <span className="text-green-400">
                            Online
                        </span>

                    </div>

                </div>

                {/* Welcome Card */}

                <div className="bg-slate-900 rounded-3xl p-6 border border-cyan-500/20 shadow-[0_0_40px_rgba(6,182,212,0.1)]">

                    <h2 className="text-2xl font-semibold mb-4">
                        Welcome to PhysioAI
                    </h2>

                    <p className="text-slate-400">
                        Ask about physiotherapy, pain management,
                        rehabilitation exercises, posture correction,
                        injury recovery and more.
                    </p>

                </div>

                {/* Quick Questions */}

                <div className="mt-8">

                    <h3 className="text-xl font-semibold mb-4">
                        Quick Questions
                    </h3>

                    <div className="flex flex-wrap gap-3">

                        {quickQuestions.map((question) => (

                            <button
                                key={question}
                                onClick={() => {
                                    setMessage(question);
                                    sendMessage(question);
                                }}
                                className="
                                    bg-slate-800
                                    hover:bg-cyan-600
                                    px-4
                                    py-2
                                    rounded-xl
                                    transition
                                "
                            >
                                {question}
                            </button>

                        ))}

                    </div>

                </div>

                {/* Chat Input */}

                <div className="mt-8 bg-slate-900 rounded-3xl p-6">

                    <div className="flex gap-4">

                        <input
                            type="text"
                            placeholder="Describe your problem..."
                            value={message}
                            onChange={(e) =>
                                setMessage(e.target.value)
                            }
                            className="
                                flex-1
                                p-4
                                rounded-xl
                                bg-slate-800
                                border
                                border-slate-700
                                outline-none
                            "
                        />

                        <button
                            onClick={() => sendMessage()}
                            className="
                                bg-cyan-600
                                hover:bg-cyan-500
                                px-8
                                rounded-xl
                                transition
                            "
                        >
                            Send
                        </button>

                    </div>

                </div>

                {/* Response */}

                {loading && (

                    <div className="mt-8 bg-slate-900 p-6 rounded-2xl">

                        <p className="text-cyan-400">
                            PhysioAI is thinking...
                        </p>

                    </div>

                )}

                {response && (

                    <div className="mt-8">

                        <div className="bg-slate-900 p-6 rounded-3xl border border-cyan-500/20">

                            <h2 className="text-2xl font-semibold mb-4">
                                AI Response
                            </h2>

                            <p className="text-slate-300 mb-6">
                                {response.message}
                            </p>

                            <h3 className="text-xl font-semibold mb-3">
                                Recommendations
                            </h3>

                            <ul className="space-y-3">

                                {response.recommendations.map(
                                    (item, index) => (

                                        <li
                                            key={index}
                                            className="
                                                bg-slate-800
                                                p-4
                                                rounded-xl
                                            "
                                        >
                                            {item}
                                        </li>

                                    )
                                )}

                            </ul>

                        </div>

                    </div>

                )}

            </div>

        </div>

    );
}

export default Chatbot;