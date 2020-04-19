import React, { useState } from 'react'
import { Label, Table, Button } from 'semantic-ui-react'
import axios from 'axios'

const EquipmentUpdate = (props) => {
  const initialQuantites = props.data.reduce(
    (acc, { id, quantity_needed }) => ({
      ...acc,
      [id]: parseInt(quantity_needed),
    }),
    {}
  )

  const [quantities, updateQuantities] = useState(initialQuantites)

  const handleSubmit = async () => {
    const payload = Object.entries(quantities).map(([id, quantity_needed]) => ({
      id,
      quantity: quantity_needed,
    }))
    try {
      axios.put('http://localhost:3001/update', payload)
      alert('updated!')
    } catch (e) {
      alert('Something went wrong')
    }
  }

  return (
    <>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Equipment</Table.HeaderCell>
            <Table.HeaderCell>Quantity</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {props.data.map((row) => {
            const { id, equipment } = row
            return (
              <Table.Row key={id}>
                <Table.Cell>
                  <Label ribbon>{equipment}</Label>
                </Table.Cell>
                <Table.Cell>
                  <input
                    value={quantities[id]}
                    onChange={(e) =>
                      updateQuantities({ ...quantities, [id]: e.target.value })
                    }
                  />
                </Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
      <Button onClick={handleSubmit}>Submit</Button>
    </>
  )
}

export default EquipmentUpdate
