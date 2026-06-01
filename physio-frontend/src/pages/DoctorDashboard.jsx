import { useEffect, useState } from "react";

function DoctorDashboard() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [videoUrl, setVideoUrl] = useState("");
    const [bodyPart, setBodyPart] = useState("");
    const [tags, setTags] = useState("");

    const [videos, setVideos] = useState([]);

    const doctorEmail =
        localStorage.getItem("userEmail");

    useEffect(() => {

        loadVideos();

    }, []);

    const loadVideos = async () => {

        const response = await fetch(
            `http://localhost:8080/api/videos/doctor/${doctorEmail}`
        );

        const data = await response.json();

        setVideos(data);
    };

    const uploadVideo = async (e) => {

        e.preventDefault();

        const response = await fetch(
            "http://localhost:8080/api/videos/upload",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title,
                    description,
                    videoUrl,
                    bodyPart,
                    tags,
                    status: "PENDING",
                    uploadedBy: doctorEmail
                })
            }
        );

        if (response.ok) {

            alert(
                "Video submitted for admin approval"
            );

            setTitle("");
            setDescription("");
            setVideoUrl("");
            setBodyPart("");
            setTags("");

            loadVideos();
        }
    };

    return (

        <div className="min-h-screen bg-slate-950 text-white p-10">

            <h1 className="text-4xl font-bold mb-8">
                Doctor Dashboard
            </h1>

            <div className="bg-slate-900 p-8 rounded-3xl max-w-3xl">

                <h2 className="text-2xl mb-6">
                    Upload Exercise Video
                </h2>

                <form
                    onSubmit={uploadVideo}
                    className="space-y-4"
                >

                    <input
                        type="text"
                        placeholder="Video Title"
                        value={title}
                        onChange={(e) =>
                            setTitle(e.target.value)
                        }
                        className="w-full p-3 rounded bg-slate-800"
                    />

                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={(e) =>
                            setDescription(e.target.value)
                        }
                        className="w-full p-3 rounded bg-slate-800"
                    />

                    <input
                        type="text"
                        placeholder="YouTube URL"
                        value={videoUrl}
                        onChange={(e) =>
                            setVideoUrl(e.target.value)
                        }
                        className="w-full p-3 rounded bg-slate-800"
                    />

                    <input
                        type="text"
                        placeholder="Body Part"
                        value={bodyPart}
                        onChange={(e) =>
                            setBodyPart(e.target.value)
                        }
                        className="w-full p-3 rounded bg-slate-800"
                    />

                    <input
                        type="text"
                        placeholder="Tags"
                        value={tags}
                        onChange={(e) =>
                            setTags(e.target.value)
                        }
                        className="w-full p-3 rounded bg-slate-800"
                    />

                    <button
                        type="submit"
                        className="bg-cyan-600 px-8 py-3 rounded-xl"
                    >
                        Upload Video
                    </button>

                </form>

            </div>

            <div className="mt-12">

                <h2 className="text-3xl font-bold mb-6">
                    My Uploaded Videos
                </h2>

                <div className="grid gap-4">

                    {videos.map((video) => (

                        <div
                            key={video.id}
                            className="bg-slate-900 p-5 rounded-xl"
                        >

                            <h3 className="text-xl font-semibold">
                                {video.title}
                            </h3>

                            <p>
                                {video.bodyPart}
                            </p>

                            <p>
                                Status:
                                <span
                                    className={
                                        video.status === "APPROVED"
                                            ? "text-green-400 ml-2"
                                            : "text-yellow-400 ml-2"
                                    }
                                >
                                    {video.status}
                                </span>
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </div>

    );
}

export default DoctorDashboard;