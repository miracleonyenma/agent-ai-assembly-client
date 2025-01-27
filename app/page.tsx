import ProjectForm from "@/components/ProjectForm";
import Link from "next/link";

export default function Home() {
  return (
    <main className="site-main">
      <header className="site-section">
        <div className="wrapper text-center flex flex-col gap-4 items-center justify-center">
          <h1 className="text-3xl font-bold lg:text-5xl">Agents Assembly</h1>
          <p>View your project task document and reports</p>
          <Link
            href="https://agent.ai/agent/avengers_assemble"
            className="btn primary"
          >
            Manage your project
          </Link>
        </div>
      </header>
      <section className="site-section">
        <div className="wrapper !max-w-lg">
          <ProjectForm />
        </div>
      </section>
    </main>
  );
}
