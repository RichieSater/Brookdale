import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

export default class MenuView extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item
          name="Supplies Needed"
          active={activeItem === 'Supplies Needed'}
          onClick={this.handleItemClick}
        >
          Supplies Needed
        </Menu.Item>

        <Menu.Item
          name="3D Printers"
          active={activeItem === '3D Printers'}
          onClick={this.handleItemClick}
        >
          3D Printers
        </Menu.Item>

        <Menu.Item
          name="GoFundMe"
          active={activeItem === 'GoFundMe'}
          href="https://www.gofundme.com/f/feed-our-doctors"
        >
          Feed Our Doctors
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item
            name="login"
            active={activeItem === 'login'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}
