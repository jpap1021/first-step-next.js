import fetch from "isomorphic-unfetch";
import Layout from "../../components/MyLayout";

const Post = props => (
  <Layout>
    {props.value.image ? <img src={props.value.image} /> : null}
    <h3>Summary</h3>
    <ul>
      <li>Name: {props.value.name}</li>
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
  </Layout>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const value = await res.json();

  console.log(`Fetched show: ${JSON.stringify(value)}`);

  return { value };
};

export default Post;
