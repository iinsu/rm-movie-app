import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Seo from "../components/Seo";

const Wrapper = styled.div``;
const Movie = styled.div``;
const MovieImg = styled(Image)``;
const MovieTitle = styled(Link)``;

const fetchMovies = async () => {
  const response = await fetch(``);
  const json = await response.json();
  const { results } = json;
  return results;
};

export default function Home() {
  return (
    <Wrapper>
      <Seo title="Home" />
      <h1>메인 페이지</h1>
    </Wrapper>
  );
}
