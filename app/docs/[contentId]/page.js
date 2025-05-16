import ContentDisplay from "@/components/ContentDisplay";

const ContentPage = async ({ params }) => {
  const { contentId } = await params;
  return (
    <div>
      <ContentDisplay id={contentId} />
    </div>
  );
};

export default ContentPage;
