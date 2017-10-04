import React, { Component } from 'react';
import { Button, Row, Col, PageHeader } from "react-bootstrap"

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <PageHeader>My first site</PageHeader>
      </div>
    );
  }
}

export default Header;
