import { useState } from "react";
import Layout from "../components/Layout";
import HumanBody from "../components/HumanBody";

function AssessmentPage() {

    const [bodyPart, setBodyPart] = useState("");

    const [videos, setVideos] = useState([]);

    const [doctors, setDoctors] = useState([]);

    const bodyPartMap = {
        Knee: 1,
        Neck: 2,
        Shoulder: 3,
        "Upper Back": 4,
        "Lower Back": 5,
        Hip: 6,
        Ankle: 7
    };

    const loadRecommendations = async (selectedPart) => {

        setBodyPart(selectedPart);

        try {

            const videoResponse = await fetch(
                `http://localhost:8080/api/videos/body-part/${selectedPart}`
            );

            const videoData =
                await videoResponse.json();

            setVideos(videoData);

            const doctorResponse = await fetch(
                `http://localhost:8080/api/doctors/body-part/${bodyPartMap[selectedPart]}`
            );

            const doctorData =
                await doctorResponse.json();

            setDoctors(doctorData);

        }
        catch (error) {

            console.error(error);
        }
    };

    return (

        <Layout>

            <div className="grid md:grid-cols-2 gap-8">

                <HumanBody />

                <div>

                    <h2 className="text-2xl font-bold mb-4">
                        Select Body Part
                    </h2>

                    <div className="grid grid-cols-2 gap-3">

                        {[
                            "Knee",
                            "Neck",
                            "Shoulder",
                            "Upper Back",
                            "Lower Back",
                            "Hip",
                            "Ankle"
                        ].map((part) => (

                            <button
                                key={part}
                                onClick={() =>
                                    loadRecommendations(part)
                                }
                                className="bg-cyan-700 p-3 rounded-xl"
                            >
                                {part}
                            </button>

                        ))}

                    </div>

                </div>

            </div>

            {bodyPart && (

                <div className="mt-10">

                    <h2 className="text-3xl font-bold mb-6">
                        Recommendations for {bodyPart}
                    </h2>

                    <h3 className="text-2xl mb-4">
                        Doctors
                    </h3>

                    <div className="grid gap-4">

                        {doctors.map((doctor) => (

                            <div
                                key={doctor.id}
                                className="bg-slate-800 p-4 rounded-xl"
                            >
                                <h4>{doctor.fullName}</h4>
                                <p>{doctor.specialization}</p>
                                <p>{doctor.qualification}</p>
                            </div>

                        ))}

                    </div>

                    <h3 className="text-2xl mt-8 mb-4">
                        Videos
                    </h3>

                    <div className="grid gap-4">

                        {videos.map((video) => (

                            <div
                                key={video.id}
                                className="bg-slate-800 p-4 rounded-xl"
                            >

                                <h4>{video.title}</h4>

                                <p>
                                    {video.description}
                                </p>

                                <a
                                    href={video.videoUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-cyan-400"
                                >
                                    Watch Video
                                </a>

                            </div>

                        ))}

                    </div>

                </div>

            )}

        </Layout>
    );
}

export default AssessmentPage;