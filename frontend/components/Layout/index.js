import Header from "../Header";
import tw from "twin.macro";
import styled from "@emotion/styled";

const Main = styled.main`
  ${tw`container mx-auto px-1 pt-3`}
`;

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
}
