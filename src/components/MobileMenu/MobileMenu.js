/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <CloseButton onClick={onDismiss}>
          <Icon id='close' />
        </CloseButton>
        <Filler />
        <NavLinks>
          <a href='/sale'>Sale</a>
          <a href='/new'>New&nbsp;Releases</a>
          <a href='/men'>Men</a>
          <a href='/women'>Women</a>
          <a href='/kids'>Kids</a>
          <a href='/collections'>Collections</a>
        </NavLinks>

        <Footer>
          <a href='/terms'>Terms and Conditions</a>
          <a href='/privacy'>Privacy Policy</a>
          <a href='/contact'>Contact Us</a>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: var(--color-backdrop);
  display: flex;
  justify-content: flex-end;
`;

const Content = styled(DialogContent)`
  background: white;
  height: 100vh;
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 32px;
`;

const NavLinks = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;

  & a {
    font-size: ${18 / 16}rem;
    color: var(--color-gray-900);
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;

    &:first-child {
      color: var(--color-secondary);
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;

  flex: 1;
  justify-content: flex-end;

  & a {
    font-size: ${14 / 16}rem;
    color: var(--color-gray-700);
    text-decoration: none;
  }
`;

const Filler = styled.div`
  flex: 1;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

export default MobileMenu;
