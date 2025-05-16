import ContentDisplay from "@/components/ContentDisplay";

const SubContentPage = async ({ params }) => {
  const { subContentId } = await params;
  return (
    <div>
      <ContentDisplay id={subContentId} />
    </div>
  );
};

export default SubContentPage;
