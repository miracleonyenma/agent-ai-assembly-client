"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL;

const ProjectForm = () => {
  const router = useRouter();

  const [projectId, setProjectId] = useState("");
  const [memberId, setMemberId] = useState("");

  const baseUrl = `${APP_URL}/projects/${projectId}/${memberId}`;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(baseUrl);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="projectId" className="block mb-2">
          Project ID
        </label>
        <input
          type="text"
          id="projectId"
          name="projectId"
          required
          className="form-input"
          placeholder="Enter project ID"
          value={projectId}
          onChange={(e) => setProjectId(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="memberId" className="block mb-2">
          Member ID
        </label>
        <input
          type="text"
          id="memberId"
          name="memberId"
          required
          className="form-input"
          placeholder="Enter member ID"
          value={memberId}
          onChange={(e) => setMemberId(e.target.value)}
        />
      </div>
      <button type="submit" className="btn primary">
        Go to Project
      </button>
    </form>
  );
};

export default ProjectForm;
