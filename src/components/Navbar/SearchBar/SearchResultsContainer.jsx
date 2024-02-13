import CandyCane from "../../../assets/candy_cane.png";
import { products } from "../../Products/productdata";

export default function SearchResultsContainer({ searchValue }) {
  const results = products.filter((product) =>
    product.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  console.log(results);

  return (
    <div className="fixed z-50 w-11/12 px-4 py-6 mx-auto bg-white border rounded-lg shadow-lg h-fit top-40">
      <div className="flex items-center justify-between mb-4">
        <h3>Products</h3>
        <span>({results.length})</span>
      </div>

      <div className="grid gap-4">
        {results.map((product) => (
          <div className="flex items-center justify-between p-3 rounded-lg shadow-lg bg-slate-200">
            <div className="flex items-center gap-3">
              <figure className="w-12 h-12 bg-white rounded-lg">
                <img
                  src={product.img}
                  alt={product.title}
                  className="object-contain w-full h-full"
                />
              </figure>
              <h4 className="font-semibold">{product.title}</h4>
            </div>
            <span className="font-medium">${product.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
