import Layout from "../components/Layout";
import HumanBody from "../components/HumanBody";
import BodyModel from "../components/BodyModel";

function AssessmentPage() {
    return (
        <Layout>

            <HumanBody />

            <div className="mt-8">
                <BodyModel />
            </div>

        </Layout>
    );
}

export default AssessmentPage;