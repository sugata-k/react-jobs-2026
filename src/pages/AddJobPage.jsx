import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import JobForm from "../components/JobForm";

const AddJobPage = ({ addJobSubmit }) => {
    const navigate = useNavigate();

    const handleSubmit = async (jobData) => {
        await addJobSubmit(jobData);
        toast.success('Job added successfully');
        navigate('/jobs');
    };

    return <JobForm onSubmit={handleSubmit} submitLabel="Add Job" />;
};

export default AddJobPage;