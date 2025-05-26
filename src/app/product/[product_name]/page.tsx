// ✅ DO NOT add 'use client'
interface ProductPageProps {
  params: {
    product_name: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const { product_name } = params;

  return (
    <>
      <p>Product Name:</p>
      <p>{product_name}</p>
    </>
  );
}
