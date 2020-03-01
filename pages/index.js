import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Index = props => (
  <div>
    <h1>Rick And Morty</h1>
    <ul>
      {props.value.map(character => (
        <li key={character.id}>
          {/*
              <Link href="/p/[id]" as={`/p/${show.id}`}>
              
            </Link>
          */}
          <a>{character.name}</a>
          <img src={character.image} />
        </li>
      ))}
    </ul>
  </div>
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
