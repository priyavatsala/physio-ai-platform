import Layout from "../components/Layout";

function Home() {
    return (
        <Layout>

            <div className="text-center mt-20">

                <h1 className="text-6xl font-bold text-cyan-400 mb-6">
                    PhysioAI
                </h1>

                <p className="text-xl text-slate-400 mb-10">
                    AI Powered Physiotherapy Assistant
                </p>

                <div className="grid md:grid-cols-3 gap-6">

                    <div className="bg-slate-900 p-8 rounded-2xl">
                        <h2 className="text-2xl font-bold mb-3">
                            🤖 AI Chatbot
                        </h2>

                        <p className="text-slate-400">
                            Describe symptoms and get guidance.
                        </p>
                    </div>

                    <div className="bg-slate-900 p-8 rounded-2xl">
                        <h2 className="text-2xl font-bold mb-3">
                            🧍 Body Assessment
                        </h2>

                        <p className="text-slate-400">
                            Select body parts and view symptoms.
                        </p>
                    </div>

                    <div className="bg-slate-900 p-8 rounded-2xl">
                        <h2 className="text-2xl font-bold mb-3">
                            👨‍⚕️ Doctor Recommendations
                        </h2>

                        <p className="text-slate-400">
                            Get specialist recommendations.
                        </p>
                    </div>

                </div>

            </div>

        </Layout>
    );
}

export default Home;