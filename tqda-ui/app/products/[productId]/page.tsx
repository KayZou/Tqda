interface Props {
  params: { productId: string };
}

export default async function ProductPage({ params }: Props) {
  return <>{params.productId}</>;
}
