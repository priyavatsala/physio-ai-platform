import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import * as THREE from "three";

function Model() {

    const { scene } = useGLTF(
        "/models/human_body.glb"
    );

    const modelRef = useRef();

    useEffect(() => {

        const box = new THREE.Box3()
            .setFromObject(scene);

        const center = box.getCenter(
            new THREE.Vector3()
        );

        scene.position.x -= center.x;
        scene.position.y -= center.y;
        scene.position.z -= center.z;

    }, [scene]);

    useFrame((state) => {

        if (modelRef.current) {

            modelRef.current.rotation.y += 0.002;

            modelRef.current.position.y =
                Math.sin(
                    state.clock.elapsedTime
                ) * 0.08;
        }

    });

    return (

        <primitive
            ref={modelRef}
            object={scene}
            scale={0.55}
        />

    );
}

function HumanBody() {

    return (

        <div
            className="
                h-[800px]
                bg-slate-900
                rounded-3xl
                border
                border-cyan-900
                shadow-[0_0_50px_rgba(6,182,212,0.15)]
            "
        >

            <Canvas
                camera={{
                    position: [0, 0, 10],
                    fov: 55
                }}
            >

                <ambientLight intensity={2.5} />

                <directionalLight
                    position={[5, 5, 5]}
                    intensity={2}
                />

                <directionalLight
                    position={[-5, 5, 5]}
                    intensity={1.5}
                />

                <directionalLight
                    position={[0, -5, 5]}
                    intensity={1}
                />

                <Model />

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    minPolarAngle={Math.PI / 2}
                    maxPolarAngle={Math.PI / 2}
                />

            </Canvas>

        </div>

    );
}

export default HumanBody;