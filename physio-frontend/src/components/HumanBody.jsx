import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";

function Model() {

    const model = useGLTF(
        "/models/human_body.glb"
    );

    const modelRef = useRef();

    useFrame((state) => {

        if (modelRef.current) {

            // Slow rotation
            modelRef.current.rotation.y += 0.002;

            // Floating animation
            modelRef.current.position.y =
                Math.sin(
                    state.clock.elapsedTime * 0.8
                ) * 0.08 - 1.8;
        }
    });

    return (

        <primitive
            ref={modelRef}
            object={model.scene}
            scale={1}
            position={[0, -1.8, 0]}
        />

    );
}

function HumanBody() {

    return (

        <div
            className="
                h-[650px]
                rounded-3xl
                overflow-hidden
                bg-gradient-to-br
                from-slate-950
                via-slate-900
                to-cyan-950
                border
                border-cyan-500/20
                shadow-[0_0_50px_rgba(6,182,212,0.2)]
            "
        >

            <Canvas
                camera={{
                    position: [0, 0.8, 8],
                    fov: 40
                }}
            >

                <fog
                    attach="fog"
                    args={["#020617", 8, 18]}
                />

                <ambientLight intensity={3} />

                <directionalLight
                    position={[5, 5, 5]}
                    intensity={4}
                />

                <pointLight
                    position={[-5, 3, 5]}
                    intensity={2}
                />

                <Model />

                <OrbitControls
                    enablePan={false}
                    enableZoom={false}
                    minPolarAngle={
                        Math.PI / 2.2
                    }
                    maxPolarAngle={
                        Math.PI / 1.8
                    }
                />

            </Canvas>

        </div>

    );
}

export default HumanBody;