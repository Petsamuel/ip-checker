interface Props {
  text: string;
}

function Home({ text }: Props) {
  return <div>{text} Something Different </div>;
}

export default Home;
