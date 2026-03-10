import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import JobForm from "../components/JobForm";

const EditJobPage = ({ updateJobSubmit }) => {
    const { id } = useParams();
    const job = useLoaderData();
    const navigate = useNavigate();

    const handleSubmit = async (jobData) => {
        await updateJobSubmit({ id, ...jobData });
        toast.success('Job updated successfully');
        navigate(`/jobs/${id}`);
    };

    return <JobForm initialValues={job} onSubmit={handleSubmit} submitLabel="Update Job" />;
};

export default EditJobPage;
