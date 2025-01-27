import { toast } from "sonner";

const useCopyLink = () => {
  const handleCopyLink: (link: string, name?: string) => void = async (
    link,
    name = "Link",
  ) => {
    try {
      await navigator.clipboard.writeText(link);

      toast.success("Copied Successfully");
    } catch (error) {
      console.error(`Error copying ${name}`, error);
      toast.error("Copy Failed.");
    }
  };

  return { handleCopyLink };
};

export default useCopyLink;
