import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../components/pagenot-found.css'
const PageNotfound = () => 
  {
      return (
          <div className="page-not-found">
            <h3 className="pagenot-found-text">oops !!! Page not found</h3>
          </div>
      )
  }

export default PageNotfound;