import { Link } from "react-router-dom";

function Layout({ children }) {
    return (
        <div className="min-h-screen bg-slate-950 text-white">

            {/* Navbar */}
            <header className="h-16 border-b border-slate-800 flex items-center px-6">
                <h1 className="text-2xl font-bold text-cyan-400">
                    PhysioAI
                </h1>
            </header>

            <div className="flex">

                {/* Sidebar */}
                <aside className="w-64 min-h-[calc(100vh-64px)] border-r border-slate-800 p-5">

                    <nav className="flex flex-col gap-4">

                        <Link
                            to="/"
                            className="p-3 rounded-lg hover:bg-slate-800"
                        >
                            🏠 Home
                        </Link>

                        <Link
                            to="/chatbot"
                            className="p-3 rounded-lg hover:bg-slate-800"
                        >
                            🤖 Chatbot
                        </Link>

                        <Link
                            to="/assessment"
                            className="p-3 rounded-lg hover:bg-slate-800"
                        >
                            🧍 Assessment
                        </Link>

                    </nav>

                </aside>

                {/* Main Content */}
                <main className="flex-1 p-8">
                    {children}
                </main>

            </div>

        </div>
    );
}

export default Layout;