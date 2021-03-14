import Link from "next/link";
// import styled from "styled-components";
import tw from "twin.macro";
import styled from "@emotion/styled";

const HeaderContainer = styled.div`
  /* ${tw`container mx-auto`} */
  background-color: red;
`;
export default function Header() {
  return (
    <header>
      <HeaderContainer>
        <div>
          <Link href="/">
            <a>Blog.</a>
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/login">
                <a>Login</a>
              </Link>
            </li>
            <li>
              <Link href="/signup">
                <a>Sign up</a>
              </Link>
            </li>
          </ul>
        </nav>
      </HeaderContainer>
    </header>
  );
}
