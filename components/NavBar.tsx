import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const Wrapper = styled.nav`
  .active {
    color: tomato;
  }
`;
const Logo = styled.div``;
const LogoImg = styled(Image)``;
const LinkBox = styled.div``;
const LinkTab = styled(Link)``;

const NavBar = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <Logo>
        <LogoImg src="/vercel.svg" priority fill sizes="20%" alt="Logo" />
      </Logo>
      <LinkBox>
        <LinkTab
          href={"/"}
          className={(router.pathname === "/" && "active") || undefined}
        >
          Home
        </LinkTab>
      </LinkBox>
    </Wrapper>
  );
};

export default NavBar;
