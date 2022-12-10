import AddNote from "../components/AddNote";
import PageTemplate from "./PageTemplate";

const AddNotePage = () => {
  return (
    <PageTemplate pageTitle={"Adding Notes"} showBanner={false}>
      <AddNote />
    </PageTemplate>
  );
};

export default AddNotePage;
