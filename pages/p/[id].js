import fetch from "isomorphic-unfetch";

const Post = props => (
  <div>
    <h1>{props.value.name}</h1>
    {props.value.image ? <img src={props.value.image} /> : null}
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
