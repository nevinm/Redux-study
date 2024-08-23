import { useEffect } from "react";
import { useState } from "react";
import { PagePreview } from "./PagePreview";
import { Pagination } from "./Pagination";

const buildURL = (limit = 10, skip = 0) =>
  `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

export const PaginationContainer = () => {
  const [productData, setProductData] = useState();
  const { total, limit = 10 } = productData || {};
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async (url, options) => {
    const rawData = await fetch(url, options);
    const parsedData = await rawData.json();
    setProductData(parsedData);
  };

  useEffect(() => {
    const skip = (currentPage - 1) * limit;
    const controller = new AbortController();
    fetchData(buildURL(limit, skip), {
      signal: controller.signal,
    });

    return () => controller.abort();
  }, [currentPage, limit]);

  const handlePaginationClick = (pageNum) => {
    setCurrentPage(pageNum);
  };

  if (!productData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <PagePreview data={productData} />
      <Pagination
        currentPage={currentPage}
        total={total}
        pageSize={limit}
        onClick={handlePaginationClick}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
