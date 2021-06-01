import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const IndexPage = () => {
  return (
    <Layout pageTitle="Ploteus | PaaS">
      <h1>Ploteus</h1>
      <Link to="/about">About</Link>
    </Layout>
  )
}

export default IndexPage
