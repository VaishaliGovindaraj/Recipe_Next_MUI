// ✅ DO NOT add 'use client'
type Params = Promise<{ product_name: string }>;

export default async function Page({ params }: { params: Params }) {
const {product_name} = await params;


  return (
    <div>
      <h1>Product</h1>
      <p>{product_name}</p>
    </div>
  );
}
