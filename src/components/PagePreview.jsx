export const PagePreview = ({ data = [] }) => {
  return (
    <>
      <h2>Page preview</h2>
      {data?.products?.map((currentData) => {
        const { thumbnail, title, id } = currentData;
        return (
          <div key={id}>
            <span>{id}</span>
            {"  "}
            <span>{title}</span>
          </div>
        );
      })}
    </>
  );
};
