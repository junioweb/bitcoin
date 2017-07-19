import React, {Component} from 'react'

// Components Route
import {Link as RouterLink} from 'react-router-dom'
import {NavLink as RouterNavLink} from 'react-router-dom'

// Components Bootstrap v4
import { Row, Col, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap'

// Components
import TableManageCampaigns from '../components/TableManageCampaigns'

// Icons
import MdKeyboardArrowLeft from 'react-icons/lib/md/keyboard-arrow-left'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <Breadcrumb className="mt-3">
              <BreadcrumbItem><RouterNavLink to="/home">Home</RouterNavLink></BreadcrumbItem>
              <BreadcrumbItem><RouterNavLink to="/manage/campaigns" replace>Manage</RouterNavLink></BreadcrumbItem>
              <BreadcrumbItem active>Campaigns</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="mr-auto p-2"><Button color="secondary" size="sm" tag={RouterLink} to="/home"><MdKeyboardArrowLeft /></Button> Manage Campaigns</div>
            <Row>
              <Col>
                <TableManageCampaigns />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}