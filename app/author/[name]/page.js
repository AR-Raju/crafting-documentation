import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByAuthor } from "@/utils/doc-util";

const AuthorPage = async ({ params }) => {
  const docs = getDocuments();
  const { name } = await params;
  const matchedDocument = getDocumentsByAuthor(docs, name);
  return (
    <div>
      <ContentDisplay id={matchedDocument[0].id} />
    </div>
  );
};

export default AuthorPage;
