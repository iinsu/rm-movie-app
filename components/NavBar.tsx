import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const Wrapper = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  gap: 10px;
  padding-top: 20px;
  padding-bottom: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  .active {
    color: tomato;
  }
`;

const Logo = styled.div`
  position: relative;
  height: 100%;
`;

const LogoImg = styled(Image)`
  max-width: 100px;
  margin-bottom: 5px;
  height: auto !important;
  position: relative !important;
`;

const LinkBox = styled.div`
  display: flex;
  gap: 10px;
`;

const LinkTab = styled(Link)`
  font-weight: 100px;
  margin-bottom: 5px;
`;

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
        <LinkTab
          href={"/about"}
          className={(router.pathname === "/about" && "active") || undefined}
        >
          About
        </LinkTab>
      </LinkBox>
    </Wrapper>
  );
};

export default NavBar;
