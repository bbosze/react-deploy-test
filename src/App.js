import React, { Component } from 'react';
import logo from './logo.svg';
import { Card, Icon, Button, Header, Image, Modal } from 'semantic-ui-react'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="welcome">Welcome to React</h1>
          <Card>
            <Image src='https://images-na.ssl-images-amazon.com/images/I/41tg9EEffxL._SL500_AC_SS350_.jpg' />
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Meta>
                <span className='date'>Joined in 2015</span>
              </Card.Meta>
              <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                miafasz bazmeg
              </a>
            </Card.Content>
          </Card>
          <Modal trigger={<Button className="modalbutton">NYOMD MEG</Button>}>
            <Modal.Header>Select a Photo</Modal.Header>
            <Modal.Content image>
              <Image wrapped size='medium' src='https://images-na.ssl-images-amazon.com/images/I/41tg9EEffxL._SL500_AC_SS350_.jpg' />
              <Modal.Description>
                <Header>Default Profile Image</Header>
                <p>We've found the following gravatar image associated with your e-mail address.</p>
                <p>Is it okay to use this photo?</p>
              </Modal.Description>
            </Modal.Content>
          </Modal>
      </div>
    );
  }
}

export default App;
