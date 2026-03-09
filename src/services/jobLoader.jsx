const jobLoader = async ({ params }) => {
    const apiUrl = `/api/jobs/${params.id}`;
    const res = await fetch(apiUrl);
    const data = res.json();
    return data;
}

export default jobLoader;