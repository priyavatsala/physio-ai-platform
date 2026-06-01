import { useState } from "react";

function BodyModel() {
    const [symptoms, setSymptoms] = useState([]);
    const [selectedSymptom, setSelectedSymptom] = useState("");
    const [videos, setVideos] = useState([]);
    const [doctors, setDoctors] = useState([]);

    const handleBodyPartClick = async (bodyPartId) => {
        try {
            const response = await fetch(
                `http://localhost:8080/api/symptoms/body-part/${bodyPartId}`
            );

            const data = await response.json();
            setSymptoms(data);

            const doctorResponse = await fetch(
                `http://localhost:8080/api/doctors/body-part/${bodyPartId}`
            );

            const doctorData = await doctorResponse.json();
            setDoctors(doctorData);

            setVideos([]);
            setSelectedSymptom("");

        } catch (error) {
            console.error(error);
        }
    };

    const handleSymptomClick = (symptom) => {
        setSelectedSymptom(symptom.name);

        const videoMap = {
            "Pain": ["Knee Pain Relief"],
            "Swelling": ["Knee Swelling Reduction"],
            "Stiffness": ["Knee Mobility Exercise"],

            "Neck Pain": ["Neck Pain Relief Exercise"],
            "Stiff Neck": ["Neck Stretch Routine"],
            "Muscle Strain": ["Neck Mobility Exercise"],

            "Shoulder Pain": ["Shoulder Mobility Exercises"],
            "Frozen Shoulder": ["Frozen Shoulder Therapy"],
            "Rotator Cuff Pain": ["Rotator Cuff Rehabilitation"],

            "Muscle Tightness": ["Upper Back Posture Exercises"],
            "Posture Pain": ["Upper Back Stretching"],

            "Lower Back Pain": ["Lower Back Pain Relief"],
            "Sciatica": ["Sciatica Relief Exercise"],

            "Hip Pain": ["Hip Mobility Exercise"],
            "Hip Stiffness": ["Hip Stretch Routine"],

            "Ankle Pain": ["Ankle Recovery Exercises"],
            "Ankle Sprain": ["Ankle Sprain Rehabilitation"],
            "Ankle Swelling": ["Ankle Mobility Exercise"]
        };

        setVideos(
            (videoMap[symptom.name] || []).map((title, index) => ({
                id: index,
                video: { title }
            }))
        );
    };

    return (
        <div className="space-y-8">

            <div>
                <h1 className="text-4xl font-bold mb-2">
                    Body Assessment
                </h1>

                <p className="text-slate-400">
                    Select a body part to view symptoms,
                    recommended exercises, and doctors.
                </p>
            </div>

            {/* Body Parts */}
            <div className="bg-slate-900 rounded-2xl p-6">

                <h2 className="text-2xl font-semibold mb-4">
                    Select Body Part
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                    <button
                        onClick={() => handleBodyPartClick(2)}
                        className="bg-slate-800 hover:bg-cyan-600 p-4 rounded-xl"
                    >
                        Neck
                    </button>

                    <button
                        onClick={() => handleBodyPartClick(3)}
                        className="bg-slate-800 hover:bg-cyan-600 p-4 rounded-xl"
                    >
                        Shoulder
                    </button>

                    <button
                        onClick={() => handleBodyPartClick(4)}
                        className="bg-slate-800 hover:bg-cyan-600 p-4 rounded-xl"
                    >
                        Upper Back
                    </button>

                    <button
                        onClick={() => handleBodyPartClick(5)}
                        className="bg-slate-800 hover:bg-cyan-600 p-4 rounded-xl"
                    >
                        Lower Back
                    </button>

                    <button
                        onClick={() => handleBodyPartClick(6)}
                        className="bg-slate-800 hover:bg-cyan-600 p-4 rounded-xl"
                    >
                        Hip
                    </button>

                    <button
                        onClick={() => handleBodyPartClick(1)}
                        className="bg-slate-800 hover:bg-cyan-600 p-4 rounded-xl"
                    >
                        Knee
                    </button>

                    <button
                        onClick={() => handleBodyPartClick(7)}
                        className="bg-slate-800 hover:bg-cyan-600 p-4 rounded-xl"
                    >
                        Ankle
                    </button>

                </div>

            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-3 gap-6">

                {/* Symptoms */}
                <div className="bg-slate-900 rounded-2xl p-6">

                    <h2 className="text-2xl font-semibold mb-4">
                        Symptoms
                    </h2>

                    {symptoms.length === 0 ? (
                        <p className="text-slate-400">
                            Select a body part
                        </p>
                    ) : (
                        symptoms.map((symptom) => (
                            <div
                                key={symptom.id}
                                onClick={() => handleSymptomClick(symptom)}
                                className="bg-slate-800 p-3 rounded-lg mb-3 cursor-pointer hover:bg-slate-700"
                            >
                                {symptom.name}
                            </div>
                        ))
                    )}

                </div>

                {/* Videos */}
                <div className="bg-slate-900 rounded-2xl p-6">

                    <h2 className="text-2xl font-semibold mb-4">
                        Recommended Videos
                    </h2>

                    {videos.map((item) => (
                        <div
                            key={item.id}
                            className="bg-slate-800 p-3 rounded-lg mb-3"
                        >
                            {item.video.title}
                        </div>
                    ))}

                </div>

                {/* Doctors */}
                <div className="bg-slate-900 rounded-2xl p-6">

                    <h2 className="text-2xl font-semibold mb-4">
                        Recommended Doctors
                    </h2>

                    {doctors.map((doctor) => (
                        <div
                            key={doctor.id}
                            className="bg-slate-800 p-3 rounded-lg mb-3"
                        >
                            {doctor.fullName}
                        </div>
                    ))}

                </div>

            </div>

            {selectedSymptom && (
                <div className="bg-cyan-950 border border-cyan-700 rounded-xl p-4">
                    <span className="font-semibold">
                        Selected Symptom:
                    </span>{" "}
                    {selectedSymptom}
                </div>
            )}

        </div>
    );
}

export default BodyModel;