import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import { ProductDetails } from "../../components/Product";
import { InferGetStaticPaths } from "../../components/InferGetStaticPaths";
import Link from "next/link";

const ProductIdPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  if (!data) {
    return <div>Coś poszło nie tak...</div>;
  }
  return (
    <div>
      <Link href={`/products`}>
        <a>Wróć na stronę główną...</a>
      </Link>
      <ProductDetails
        data={{
          id: data.id,
          title: data.title,
          thumbnailUrl: data.image,
          thumbnailAlt: data.title,
          description: data.description,
          rating: data.rating.rate,
        }}
      />
    </div>
  );
};

export default ProductIdPage;

export const getStaticPaths = async () => {
  const res = await fetch(`https://fakestoreapi.com/products/`);
  const data: StoreApiResponse[] = await res.json();
  return {
    paths: data.map((product) => {
      return {
        params: {
          productId: product.id.toString(),
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: InferGetStaticPaths<typeof getStaticPaths>) => {
  if (!params?.productId) {
    return {
      props: {},
      notFound: true,
    };
  }

  const res = await fetch(
    `https://fakestoreapi.com/products/${params?.productId}`
  );
  const data: StoreApiResponse | null = await res.json();

  return {
    props: {
      data,
    },
  };
};

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
