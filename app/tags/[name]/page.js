import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByTag } from "@/utils/doc-util";

const TagsPage = async ({ params }) => {
  const { name } = await params;
  const docs = getDocuments();
  const matchedDocument = getDocumentsByTag(docs, name);
  return (
    <div>
      <ContentDisplay id={matchedDocument[0].id} />
    </div>
  );
};

export default TagsPage;
