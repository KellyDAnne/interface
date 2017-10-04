import React, { Component } from 'react';
import { Nav, NavItem, Col } from "react-bootstrap"

class Menu extends Component {
render() {
  return (
    <div className="Menu">
        <Col lg={3} md={3} sm={12} xsHidden>
            <Nav bsStyle="pills" stacked activeKey={1}>
                <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
                <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
                <NavItem eventKey={3} >NavItem 3 content</NavItem>
            </Nav>
        </Col>
        <Col lgHidden smHidden mdHidden>
        3 traits
        </Col>
    </div>
  );
}
}

export default Menu;
