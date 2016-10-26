import React, { PropTypes } from 'react'
import { IndexLink } from 'react-router'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const App = (props) => {
  return (
    <div>
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <IndexLink to='/'>
                My Game List
              </IndexLink>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to='/boardgames'>
                <NavItem>Boardgames</NavItem>
              </LinkContainer>
              <LinkContainer to='/players'>
                <NavItem>Players</NavItem>
              </LinkContainer>
              <LinkContainer to='/about'>
                <NavItem>About</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      {props.children}
    </div>
  )
}

App.propTypes = {
  children: PropTypes.element
}

export default App
