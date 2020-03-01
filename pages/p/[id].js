import fetch from "isomorphic-unfetch";

const Post = props => (
  <div>
    <h1>{props.show.name}</h1>
    {props.show.image ? <img src={props.show.image} /> : null}
  </div>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${JSON.stringify(show)}`);

  return { show };
};

export default Post;
