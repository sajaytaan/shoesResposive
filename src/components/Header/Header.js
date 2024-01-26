import React from "react";
import styled from "styled-components/macro";

import { WEIGHTS, QUERIES } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href='/sale'>Sale</NavLink>
          <NavLink href='/new'>New&nbsp;Releases</NavLink>
          <NavLink href='/men'>Men</NavLink>
          <NavLink href='/women'>Women</NavLink>
          <NavLink href='/kids'>Kids</NavLink>
          <NavLink href='/collections'>Collections</NavLink>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id='shopping-bag' />
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id='search' />
          </UnstyledButton>
          <UnstyledButton
            onClick={() => {
              setShowMobileMenu(true);
            }}
          >
            <Icon id='menu' />
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media (${QUERIES.tabletAndSmaller}) {
    border-top: 4px solid var(--color-gray-900);
    justify-content: space-between;
    align-items: center;
  }
  @media (${QUERIES.phoneAndSmaller}) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.6vw - 4.75rem, 3rem);
  margin: 0px 48px;

  @media (${QUERIES.tabletAndSmaller}) {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media (${QUERIES.tabletAndSmaller}) {
    display: flex;
    gap: 32px;
  }

  @media (${QUERIES.phoneAndSmaller}) {
    gap: 16px;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  @media (${QUERIES.tabletAndSmaller}) {
    transform: translateX(-2px);
  }
  @media (${QUERIES.phoneAndSmaller}) {
    transform: translateX(-1px);
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media (${QUERIES.tabletAndSmaller}) {
    flex: revert;
  }
`;

const Filler = styled.div`
  flex: 1;

  @media (${QUERIES.tabletAndSmaller}) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
