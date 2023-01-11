import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Seo from "../components/Seo";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
  gap: 20px;
  h4 {
    font-size: 18px;
    text-align: center;
  }
`;

const Movie = styled.div`
  position: relative;
`;

const MovieImg = styled(Image)`
  max-width: 100%;
  border-radius: 12px;
  height: auto !important;
  position: relative !important;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05) translateY(-10px);
  }
`;

const MovieTitle = styled(Link)`
  position: relative;
  cursor: pointer;
  font-weight: bold;
`;

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
