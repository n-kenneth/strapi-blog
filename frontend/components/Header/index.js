import Link from "next/link";
import tw from "twin.macro";
import styled from "@emotion/styled";
import useUser from "../../hooks/useUser";
import { useEffect } from "react";

const HeaderContainer = styled.div`
  ${tw`bg-gray-100 shadow-md`}
`;
const HeaderInner = styled.div`
  ${tw`container mx-auto flex flex-wrap py-5`}
`;

const Logo = styled.div`
  a {
    ${tw`text-2xl font-bold text-gray-900`}
  }
`;

const Nav = styled.nav`
  ${tw`ml-auto`}
  ul {
    ${tw`flex items-center`}
    li {
      ${tw`px-1.5`}
    }
    a {
      ${tw`text-gray-900 text-lg`}
    }
  }
`;

export default function Header() {
  const { user, logout } = useUser();
  return (
    <HeaderContainer>
      <HeaderInner>
        <Logo>
          <Link href="/">
            <a>Blog.</a>
          </Link>
        </Logo>
        <Nav>
          <ul>
            {user?.isLoggedIn ? (
              <>
                <li>
                  <span>{user.username}</span>
                </li>
                <li onClick={logout}>
                  <span>Logout</span>
                </li>
              </>
            ) : (
              <>
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
              </>
            )}
          </ul>
        </Nav>
      </HeaderInner>
    </HeaderContainer>
  );
}
