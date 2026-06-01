import { useState } from "react";

function Chatbot() {
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState(null);

    const sendMessage = async () => {
        try {
            const res = await fetch("http://localhost:8080/api/chatbot", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message: message,
                }),
            });

            const data = await res.json();
            setResponse(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div style={{ padding: "40px" }}>
            <h1>PhysioAI Chatbot</h1>

            <input
                type="text"
                placeholder="Describe your problem..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{
                    padding: "10px",
                    width: "400px",
                    marginRight: "10px",
                }}
            />

            <button onClick={sendMessage}>
                Send
            </button>

            {response && (
                <div style={{ marginTop: "30px" }}>
                    <h3>{response.message}</h3>

                    <ul>
                        {response.recommendations.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Chatbot;