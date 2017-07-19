import React, {Component} from 'react'

// Components Route
import { NavLink as RouterNavLink } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom'

// Components Bootstrap v4
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

// Components
import ModelAddCampaign from '../components/ModalAddCampaign'

// Logo
import logo from '../images/logo.png'

export default class Header extends Component {
  constructor(props) {
    super(props)

    // State do modal AddCampaign
    this.state = {
      isOpen: false,
      modal: false,
      size: 'md'
    }
    // Bind das funções
    this.toggle = this.toggle.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
  }
  // Função para toggle do menu da NavBar em dispositivos móveis
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  // Função para toggle do modal AddCampaign
  toggleModal() {
    this.setState({
      modal: !this.state.modal
    })
  }

  render() {
    const brand = () => <NavLink className="navbar-brand" tag={RouterLink} to="/"><img src={logo} className="logo" alt="Logo" /></NavLink>

    return (
      <div>
        <Navbar color="primary" inverse toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand tag={brand} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#" onClick={this.toggleModal}>Add campaign</NavLink>
                <ModelAddCampaign modal={this.state.modal} size={this.state.size} toggle={this.toggleModal}/>
              </NavItem>
              <NavItem>
                <RouterNavLink to={'/manage/campaigns'} className="nav-link" activeClassName="active">Manage campaigns</RouterNavLink> 
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}