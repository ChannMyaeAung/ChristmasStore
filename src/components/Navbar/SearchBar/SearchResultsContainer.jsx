import { products } from "../../Products/productdata";
import SearchResults from "./SearchResults";

export default function SearchResultsContainer({
  searchValue,
  setSearchValue,
}) {
  const results = products.filter((product) =>
    product.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  if (searchValue === "") return;

  return (
    <div className="fixed z-50 w-11/12 px-4 py-6 mx-auto bg-white border rounded-lg shadow-lg h-fit top-40">
      <div className="flex items-center justify-between mb-4">
        <h3>Products</h3>
        <span>({results.length})</span>
      </div>

      <div className="grid gap-4">
        {results.map((product) => (
          <SearchResults
            key={product.id}
            product={product}
            setSearchValue={setSearchValue}
          />
        ))}
      </div>
    </div>
  );
}
