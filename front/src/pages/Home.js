import React from 'react';
import styled from 'styled-components';

import { Map, Menu, Clima } from '../components';

const Page = styled.main`
  margin: 0 auto;
  position: relative;
`;

export default function Home() {
  return (
    <Page>
      <Map />
      <Menu />
      <Clima />
    </Page>
  );
}
