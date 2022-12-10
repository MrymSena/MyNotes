const PageTemplate = ({ pageTitle, children}) => {
  return (
    <>
      <h1>{pageTitle}</h1>
      <hr />
     
      <div className="col-10"></div>
      {children}
    </>
  );
};

export default PageTemplate;
