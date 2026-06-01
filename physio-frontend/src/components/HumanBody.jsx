import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
    const model = useGLTF("/models/human_body.glb");

    model.scene.traverse((obj) => {
        console.log(obj.type, obj.name);
    });
    return (
        <primitive
            object={model.scene}
            scale={2}
            position={[0, -2, 0]}
        />
    );
}

function HumanBody() {
    return (
        <div className="h-[600px] bg-slate-900 rounded-2xl">

            <Canvas camera={{ position: [0, 1, 5] }}>

                <ambientLight intensity={2} />

                <directionalLight
                    position={[2, 2, 2]}
                    intensity={2}
                />

                <Model />

                <OrbitControls />

            </Canvas>

        </div>
    );
}

export default HumanBody;