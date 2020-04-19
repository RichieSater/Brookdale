import React from 'react'
import { Label, Table } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'

const equipmentRoute = {
  '1': '/N95',
  '2': '/FaceShield',
  '3': '/Gown',
  '4': '/shoe',
}

const Equipment = (props) => {
  const history = useHistory()
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Equipment</Table.HeaderCell>
          <Table.HeaderCell>Quantity</Table.HeaderCell>
          <Table.HeaderCell>Link</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {props.data.map((row) => {
          const { id, equipment, quantity_needed, link } = row
          return (
            <Table.Row
              key={id}
              onClick={() => history.push(equipmentRoute[id])}
            >
              <Table.Cell>
                <Label ribbon>{equipment}</Label>
              </Table.Cell>
              <Table.Cell>{quantity_needed}</Table.Cell>
              <Table.Cell>{link}</Table.Cell>
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table>
  )
}

export default Equipment
