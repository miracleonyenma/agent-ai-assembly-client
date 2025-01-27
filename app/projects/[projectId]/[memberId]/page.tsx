import ErrorPage from "@/components/Error/Page";
import getProjectDocuments from "@/utils/document/getDocuments";
import Link from "next/link";
// import Markdown from "react-markdown";
// import remarkGfm from "remark-gfm";

const handleGetDocuments = async (projectId: string, memberId: string) => {
  const data = await getProjectDocuments({
    pagination: {
      page: 1,
      limit: 20,
    },
    filter: {
      project: projectId,
      member: memberId,
    },
  });

  console.log(
    "🚀 ~ file: page.tsx ~ line 18 ~ handleGetDocuments ~ data",
    data
  );

  return data.projectDocuments;
};

const DocumentsPage = async ({
  params,
}: {
  params: Promise<{ memberId: string; projectId: string }>;
}) => {
  const memberId = (await params).memberId;
  const projectId = (await params).projectId;

  console.log(
    "🚀 ~ file: page.tsx ~ line 24 ~ DocumentsPage ~ projectId",
    projectId
  );
  console.log(
    "🚀 ~ file: page.tsx ~ line 25 ~ DocumentsPage ~ memberId",
    memberId
  );

  try {
    const documents = await handleGetDocuments(projectId, memberId);
    console.log(
      "🚀 ~ file: page.tsx ~ line 30 ~ DocumentsPage ~ documents",
      documents
    );

    const project = documents?.data?.[0]?.project;
    if (!documents)
      return <ErrorPage error={new Error("Documents not found")} />;
    return (
      <main className="site-section">
        <div className="wrapper">
          <section className="site-section">
            <div className="wrapper flex flex-col gap-y-4">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Your Task Document for {project?.name}
              </h1>
              <p>{project?.description}</p>
            </div>
          </section>
          <section className="site-section">
            <div className="wrapper">
              {/* list of documents */}
              <ul className="">
                {documents?.data?.map((document) => (
                  <li key={document?.id}>
                    <article className="prose dark:prose-invert max-w-full p-6 flex flex-col gap-y-8 bg-gray-100 dark:bg-gray-800 rounded-xl">
                      <Link
                        href={`/${memberId}/${document?.id}`}
                        className="btn"
                      >
                        View document
                      </Link>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: document?.html || "",
                        }}
                      />
                    </article>
                    <div className="flex justify-between">
                      <div className="flex flex-col">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {document?.member?.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {document?.member?.email}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {document?.member?.projectRole}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </main>
    );
  } catch (error) {
    console.log("🔴 error", error);

    return <ErrorPage error={error as Error} />;
  }
};

export default DocumentsPage;
