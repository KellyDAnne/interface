import React, { Component } from 'react';
import { Button, Row, Col, PageHeader, Image, MenuItem, DropdownButton, ButtonToolbar } from "react-bootstrap"
import Menu from './Menu'

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <PageHeader>
            <Row>
                 <Col lg={3} sm={3} md={4} xs={6}>
                    <Image src="logo2.png" responsive rounded/>
                </Col>
                <Col lg={9} sm={9} md={8} xsHidden>
                    My first site
                </Col>
                <Col lgHidden mdHidden smHidden xs={6}>
                    <ButtonToolbar>
                        <DropdownButton bsStyle="default" title="Menu" noCaret id="dropdown-no-caret">
                          <MenuItem eventKey="1">Item 1</MenuItem>
                          <MenuItem eventKey="2">Item 2</MenuItem>
                          <MenuItem eventKey="3">Item 3</MenuItem>
                          <MenuItem divider />
                          <MenuItem eventKey="4">Se déconnecter</MenuItem>
                        </DropdownButton>
                      </ButtonToolbar>
                </Col>
            </Row>
        </PageHeader>
      </div>
    );
  }
}

export default Header;
