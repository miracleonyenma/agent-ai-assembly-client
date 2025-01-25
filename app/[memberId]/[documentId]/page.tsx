import ErrorPage from "@/components/Error/Page";
import getProjectDocument from "@/utils/document/getDocument";
// import Markdown from "react-markdown";
// import remarkGfm from "remark-gfm";

const handleGetDocument = async (documentId: string, memberId: string) => {
  const data = await getProjectDocument({
    id: documentId,
    memberId,
  });

  return data.projectDocument;
};

const DocumentPage = async ({
  params,
}: {
  params: Promise<{ memberId: string; documentId: string }>;
}) => {
  const memberId = (await params).memberId;
  const documentId = (await params).documentId;

  try {
    const document = await handleGetDocument(documentId, memberId);
    if (!document) return <ErrorPage error={new Error("Document not found")} />;
    return (
      <article className="site-section">
        <div className="wrapper">
          <header>
            <div className="wrapper flex flex-col gap-y-4">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                {document?.project?.name}
              </h1>
              <p>{document?.project?.description}</p>
            </div>
          </header>
          <div className="prose dark:prose-invert max-w-full py-6">
            {/* <Markdown remarkPlugins={[remarkGfm]}>
              {document?.markdown}
            </Markdown> */}
            <div dangerouslySetInnerHTML={{ __html: document?.html || "" }} />
          </div>
        </div>
      </article>
    );
  } catch (error) {
    console.log("🔴 error", error);

    return <ErrorPage error={error as Error} />;
  }
};

export default DocumentPage;
