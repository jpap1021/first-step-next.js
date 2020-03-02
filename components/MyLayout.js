import Header from "./Header";

const layoutStyle = {
  border: "1px solid #DDD",
  textAlign: "center"
};

export default function Layout(props) {
  return (
    <div style={layoutStyle}>
      <Header />
      {props.children}
    </div>
  );
}
