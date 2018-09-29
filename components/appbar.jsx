// import React from 'react';
import { Navbar, Container } from 'react-bulma-components';
import styled from 'styled-components';
import './appbar.sass';
import CreateForm from './createForm';

const Tru = styled.h1`
  font-weight: 700;
  font-size: 1.5em;
`;

const FormWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;
`;

const Appbar = ({ postHandler }) => (
  <Navbar transparent>
    <Container>
      <Navbar.Item>
        <Tru>Tru</Tru>
      </Navbar.Item>
      <FormWrapper>
        <CreateForm postHandler={postHandler} />
      </FormWrapper>
    </Container>
  </Navbar>
);

export default Appbar;
