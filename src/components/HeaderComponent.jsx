import React from 'react'
import { Header, Heading } from 'grommet'

const HeaderComponent = () => {
  return (
    <Header gap="small" background={{ color: "black", opacity: "weak" }}>
      <Heading level="1">The BMI Calculator</Heading>
      <Heading level="3">| In Metric and Imperial system | </Heading>
    </Header>
  );
}

export default HeaderComponent