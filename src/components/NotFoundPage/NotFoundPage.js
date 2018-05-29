import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="not-found-page">
    <h1 className="heading">
      404 - Page not found
      <br />
      <Link className="button" to="/">Back to home page</Link>
    </h1>
  </div>
);

export default NotFoundPage;
