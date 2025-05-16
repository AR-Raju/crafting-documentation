import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByCategory } from "@/utils/doc-util";

const CategoreisPage = async ({ params }) => {
  const { name } = await params;

  const docs = getDocuments();
  const matchedDocuments = getDocumentsByCategory(docs, name);
  return (
    <div>
      <ContentDisplay id={matchedDocuments[0].id} />
    </div>
  );
};

export default CategoreisPage;
