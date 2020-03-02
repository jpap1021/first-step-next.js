import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Layout from "../components/MyLayout";

const Index = props => (
  <Layout>
    <ul>
      {props.value.map(character => (
        <li key={character.id}>
          <Link href="/p/[id]" as={`/p/${character.id}`}>
            <img src={character.image} />
          </Link>
          <Link href="/p/[id]" as={`/p/${character.id}`}>
            <a>{character.name}</a>
          </Link>
        </li>
      ))}
    </ul>
    <style jsx>{`
      ul {
        display: flex;
        flex-wrap: wrap;
      }

      li {
        display: flex;
        flex-direction: column;
        margin: 20px;
      }

      a {
        text-decoration: none;
        text-align: center;
      }
    `}</style>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch("https://rickandmortyapi.com/api/character/?page=1");
  const data = await res.json();

  let value = [];

  data.results.map(element => {
    value.push(element);
  });
  return { value };
};

export default Index;
