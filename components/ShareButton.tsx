"use client";

import useShare from "@/hooks/useShare";

const ShareDocumentButtons = ({
  url,
  title,
  description,
}: {
  url: string;
  title: string;
  description: string;
}) => {
  const { copy, share } = useShare();

  return (
    <div className="action-cont flex flex-wrap gap-3">
      <button className="btn " onClick={() => share(url, title, description)}>
        Share
      </button>
      <button className="btn " onClick={() => copy(url)}>
        Copy Link
      </button>
    </div>
  );
};

export default ShareDocumentButtons;
