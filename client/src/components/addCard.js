import React from 'react';
import styled from 'styled-components';

import { CardWrapper, CardHeader, CardBody } from './miniCard';
import bgImage from '../images/City_Illustration.svg';
import addIcon from '../images/2-layers.svg';

const AddCard = (props) => {
  const { toggleSearch } = props;

  return (
    <CardWrapper style={{
      backgroundImage: `url(${bgImage})`,
      backgroundPosition: 'bottom',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
    }}
    >
      <CardHeader>
      Add City
      </CardHeader>
      <CardBody>
        <AddButton onClick={toggleSearch} />
      </CardBody>
    </CardWrapper>
  );
};

const AddButton = styled.button`
width: 130px;
height: 130px;
box-shadow: 0 3px 6px rgba(51, 51, 51, 0.1);
background-color: #f5f8ff;
border-radius: 50%;
border: 0px;
background-image: url(${addIcon});
background-position: center;
background-repeat: no-repeat;

&:hover {
  cursor: pointer;
}
`;

export default AddCard;
