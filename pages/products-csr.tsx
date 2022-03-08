import { InferGetStaticPropsType } from "next";
import { useQuery } from "react-query";
import { ProductListItem } from "../components/Product";

const getProducts = async () => {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data: StoreApiResponse[] = await res.json();
  return data;
};

const ProductsCSRPage = () => {
  const { data, isLoading, error } = useQuery("products", getProducts);

  if (isLoading) {
    return <div>Ładowanie, proszę czekać...</div>;
  }

  if (!data || error) {
    return <div>Coś poszło nie tak...</div>;
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {data.map((product) => {
        return (
          <li key={product.id} className="shadow-xl border-2">
            <ProductListItem
              data={{
                id: product.id,
                title: product.title,
                thumbnailUrl: product.image,
                thumbnailAlt: product.title,
              }}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ProductsCSRPage;

interface StoreApiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
