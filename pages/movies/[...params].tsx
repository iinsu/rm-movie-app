import Seo from "../../components/Seo";

interface MovieInfoType {
  params: string;
  results: any;
}

const Detail = ({ params, results }: MovieInfoType) => {
  const title = params;
  const { data } = results.queries[0].state;
  return (
    <div>
      <Seo title={title} />
    </div>
  );
};

export default Detail;
