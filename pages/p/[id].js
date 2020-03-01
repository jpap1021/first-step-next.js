import fetch from "isomorphic-unfetch";

const Post = props => (
  <div>
    <h1>{props.value.name}</h1>
    {props.value.image ? <img src={props.value.image} /> : null}
    <h3>Sumary</h3>
    <ul>
      <li>Status: {props.value.status} </li>
      <li>Specie: {props.value.species} </li>
      <li>Gender: {props.value.gender}</li>
    </ul>
    <style jsx>
      {`
        div {
          text-align: center;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
      `}
    </style>
  </div>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const value = await res.json();

  console.log(`Fetched show: ${JSON.stringify(value)}`);

  return { value };
};

export default Post;
