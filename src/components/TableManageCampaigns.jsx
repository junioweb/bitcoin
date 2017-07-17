import React, {Component} from 'react'

// Components Bootstrap v4
import { Table, Button } from 'reactstrap'

// Icons
import MdDelete from 'react-icons/lib/md/delete'

export default class TableManageCampaigns extends Component {
  render() {
    return (
      <Table responsive hover size="sm">
        <thead className="thead-inverse">
          <tr>
            <th></th>
            <th>Campaign</th>
            <th className="text-center">Wallets</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <Button color="danger" size="sm"><MdDelete /></Button>
            </th>
            <td>Mark</td>
            <td className="text-center">3</td>
          </tr>
          <tr>
            <th scope="row">
              <Button color="danger" size="sm"><MdDelete /></Button>
            </th>
            <td>Jacob</td>
            <td className="text-center">2</td>
          </tr>
          <tr>
            <th scope="row">
              <Button color="danger" size="sm"><MdDelete /></Button>
            </th>
            <td>Larry</td>
            <td className="text-center">5</td>
          </tr>
        </tbody>
      </Table>
    )
  }
}