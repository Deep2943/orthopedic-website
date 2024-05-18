import React from "react";
import * as Constants from '../config/constants';
import {Link} from 'react-router-dom';
import Layout from "./layout";

export default function Error404() {
  return (
    <Layout pageTitle="Page Not Found">
        <h1>Page Not Found</h1>
        <Link to={Constants.HOME_PAGE_URL}>Go Back to Home</Link>
    </Layout>
  )
}