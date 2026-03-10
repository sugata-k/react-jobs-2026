const BASE_URL = '/api/jobs';

export const getJobs = async () => {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error('Failed to fetch jobs');
  return res.json();
};

export const getRecentJobs = async (limit = 3) => {
  const res = await fetch(`${BASE_URL}?_per_page=${limit}&_page=1`);
  if (!res.ok) throw new Error('Failed to fetch recent jobs');
  const data = await res.json();
  return data.data;
};

export const getJob = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) throw new Error(`Failed to fetch job ${id}`);
  return res.json();
};

export const addJob = async (newJob) => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newJob),
  });
  if (!res.ok) throw new Error('Failed to add job');
  return res.json();
};

export const updateJob = async (updatedJob) => {
  const res = await fetch(`${BASE_URL}/${updatedJob.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedJob),
  });
  if (!res.ok) throw new Error('Failed to update job');
  return res.json();
};

export const deleteJob = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Failed to delete job');
};
