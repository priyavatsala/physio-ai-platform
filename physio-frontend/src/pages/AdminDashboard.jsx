import { useEffect, useState } from "react";

function AdminDashboard() {

    const [doctors, setDoctors] = useState([]);
    const [videos, setVideos] = useState([]);

    useEffect(() => {

        loadDoctors();
        loadVideos();

    }, []);

    const loadDoctors = async () => {

        const response = await fetch(
            "http://localhost:8080/api/admin/pending-doctors"
        );

        const data = await response.json();

        setDoctors(data);
    };

    const loadVideos = async () => {

        const response = await fetch(
            "http://localhost:8080/api/videos/pending"
        );

        const data = await response.json();

        setVideos(data);
    };

    const approveDoctor = async (id) => {

        await fetch(
            `http://localhost:8080/api/admin/approve-doctor/${id}`,
            {
                method: "PUT"
            }
        );

        loadDoctors();
    };

    const approveVideo = async (id) => {

        await fetch(
            `http://localhost:8080/api/videos/approve/${id}`,
            {
                method: "PUT"
            }
        );

        loadVideos();
    };

    return (

        <div className="min-h-screen bg-slate-950 text-white p-10">

            <h1 className="text-4xl font-bold mb-10">
                Admin Dashboard
            </h1>

            {/* Pending Doctors */}

            <h2 className="text-3xl font-semibold mb-6">
                Pending Doctors
            </h2>

            <div className="grid gap-6 mb-12">

                {doctors.length === 0 && (
                    <p className="text-slate-400">
                        No pending doctors
                    </p>
                )}

                {doctors.map((doctor) => (

                    <div
                        key={doctor.id}
                        className="bg-slate-900 rounded-2xl p-6 border border-slate-800"
                    >

                        <h3 className="text-2xl font-semibold">
                            {doctor.fullName}
                        </h3>

                        <p>{doctor.email}</p>

                        <p>{doctor.qualification}</p>

                        <p>{doctor.specialization}</p>

                        <button
                            onClick={() =>
                                approveDoctor(doctor.id)
                            }
                            className="mt-4 bg-green-600 px-6 py-2 rounded-xl"
                        >
                            Approve Doctor
                        </button>

                    </div>

                ))}

            </div>

            {/* Pending Videos */}

            <h2 className="text-3xl font-semibold mb-6">
                Pending Videos
            </h2>

            <div className="grid gap-6">

                {videos.length === 0 && (
                    <p className="text-slate-400">
                        No pending videos
                    </p>
                )}

                {videos.map((video) => (

                    <div
                        key={video.id}
                        className="bg-slate-900 rounded-2xl p-6 border border-slate-800"
                    >

                        <h3 className="text-2xl font-semibold">
                            {video.title}
                        </h3>

                        <p>{video.bodyPart}</p>

                        <p>{video.description}</p>

                        <p className="text-cyan-400">
                            {video.videoUrl}
                        </p>

                        <button
                            onClick={() =>
                                approveVideo(video.id)
                            }
                            className="mt-4 bg-blue-600 px-6 py-2 rounded-xl"
                        >
                            Approve Video
                        </button>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default AdminDashboard;