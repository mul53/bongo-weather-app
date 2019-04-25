import React from 'react';
import styled from 'styled-components';

import logo from '../images/Path_2.jpg';

const Navbar = () => (
  <NavbarWrapper>
    <Brand>
      <Logo src={logo} />
      <BrandText>Minimus</BrandText>
    </Brand>
  </NavbarWrapper>
);

const NavbarWrapper = styled.div`
background-color: white;
display: flex;
padding: 10px 30px;
justify-content: space-between;
margin-bottom: 25px;
`;

const Brand = styled.div`
display: flex;
align-items: center;
`;

const BrandText = styled.div`
font-family: "Segoe UI SemiBold";
display: inline-block;
margin-left: 20px;
font-size: 20px;
color: #432c85;
`;

const Logo = styled.img`
height: 30px;
`;

export default Navbar;
