import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

class R049_ReactstrapNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: false };
    //collapsed가 true면 감춰둔걸 보여줌
  }
  toggle = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };
  render() {
    return (
      <div>
        <Navbar color="faded" light>
          {/* NavbarBrand는 필수 처음에 무조건 나오는 것 */}
          <NavbarBrand href="/" className="mr-auto">
            Navbar
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} className="mr-2" />
          <Collapse isOpen={this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="#">react</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="http://example.com">200</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default R049_ReactstrapNavbar;
