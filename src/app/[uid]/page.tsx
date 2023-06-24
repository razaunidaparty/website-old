import { createClient } from "@/prismicio";

export default async function Page({ params }: any) {
  const client = createClient();

  const page = await client.getByUID("page", params.uid);

  return <h1>{page.uid}</h1>;
}
