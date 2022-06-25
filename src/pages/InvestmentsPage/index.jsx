import Header from "../../components/Header";
import Main from "../../components/Main";
import { apiBackend } from "../../api/api";
import Investment from "../../components/Investment";

export default function InvestmentsPage() {
  const investments = apiBackend();

  return (
    <>
      <Header title="React Investments v1.0.0" />
      <Main>
        <ul>
          {investments.map((investment) => {
            return <Investment key={investment.id} investment={investment} />;
          })}
        </ul>
      </Main>
    </>
  );
}
