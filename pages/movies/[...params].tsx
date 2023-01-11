import Image from "next/image";
import styled from "styled-components";
import Seo from "../../components/Seo";

interface MovieInfoType {
  params: string;
  results: any;
}

const Wrapper = styled.div``;
const ImgWrapper = styled.div``;
const MovieInfo = styled.div``;

const Detail = ({ params, results }: MovieInfoType) => {
  const title = params;
  const { data } = results.queries[0].state;
  return (
    <Wrapper>
      <Seo title={title} />
      <ImgWrapper>
        <Image src={"#"} alt="Poster" priority width={500} height={700} />
      </ImgWrapper>
      <h4>{title}</h4>
      <MovieInfo>{data.overview}</MovieInfo>
    </Wrapper>
  );
};

export default Detail;
