import {gql, useQuery} from "@apollo/client";

const BOOKS = gql(`
  query {
    test {
      title
      author
    }
  }
`);

function Books() {
  const { loading, error, data } = useQuery(BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return data.test.map(({ title, author }: { title: string, author: string }) => (
    <div key={title}>
      <p>{author} : {title}</p>
    </div>
  ));
}

export default Books;
