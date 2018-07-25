import React, { Component } from 'react';
import './App.css';
import { Home, About, Rooms, Contact, Navigation } from './components';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super()
    this.state = {
      rooms: [
        {
          name: 'Rasta Blessing Room',
          description: 'This is the entire first level of the Rasta building. The private veranda provides an outdoor spot to relax and meet other guests at the yard.',
          amenities: ['Veranda', 'Ceiling Fan', 'Bathroom with Shower', 'Second Story']
        },
        {
          name: 'Rasta Treehouse Room',
          description: 'This is the entire second level of the Rasta building. The private veranda provides amazing views of the top of the trees and the neighborhood.',
          amenities: ['Veranda', 'Ceiling Fan', 'Bathroom with Shower', 'First Story']
        },
        {
          name: 'Blue and White House',
          description: 'This is a freestanding 1 bedroom house on the property. This is a great option for long term guests or those wanting a kitchen to do a little cooking.',
          amenities: ['Veranda', 'Ceiling Fan', 'Bathroom with Shower', 'Kitchen']
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/rooms' render={(props) => <Rooms {...props} rooms={this.state.rooms} />} />
        <Route path='/contact' component={Contact} />
      </div>
    );
  }
}

export default App;
