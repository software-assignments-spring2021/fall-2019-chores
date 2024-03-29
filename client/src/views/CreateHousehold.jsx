import React, { Component } from 'react';
import {
   Col,
   Container,
   FormControl,
   FormGroup,
   FormLabel,
   Row,
} from 'react-bootstrap';

import { states } from '../helpers';
import logo from '../assets/img/logo.png';

import LinkedButton from '../components/LinkedButton';
import Card from '../components/Card';
import FormInputs from '../components/FormInputs';
import HomePage from '../views/HomePage';
import UserCard from '../components/UserCard';

class CreateHousehold extends Component {
   constructor(props) {
      super(props);
      this.state = {
         householdID: {},
         personID: {},
         title: '',
      };

      this.handleTitleChange = this.handleTitleChange.bind(this);
      this.sendData = this.sendData.bind(this);
   }

   handleTitleChange(event) {
      this.setState({ title: event.target.value });
   }

   async sendData() {
      fetch('http://localhost:3001/api/household/', {
         method: 'post',
         body: JSON.stringify({
            title: this.title,
         }),
         headers: {
            'Content-Type': 'application/json',
            Origin: 'http://localhost:3001',
         },
      })
         .then(res => res.json())
         .then(status => {
            if (status.success === false) {
               //show failure page
            } else {
               this.setState({ householdID: status.id });
               fetch('/api/person', {
                  method: 'put',
                  body: JSON.stringify([
                     {
                        id: this.state.personID,
                     },
                     {
                        id: this.state.householdID,
                     },
                  ]),
                  headers: {
                     'Content-Type': 'application/json',
                  },
               })
                  .then(res => res.json())
                  .then(status => {
                     if (status.success === false) {
                        //show failure page
                     } else {
                        //show success page
                     }
                  });
            }
         });
   }

   render() {
      const household = { ...this.state };
      const user = { ...this.props.location.user };
      return (
         <div id="signup" className="signup">
            <div className="logo">
               <div className="simple-text logo-mini">
                  <div className="logo-img">
                     <img src={logo} alt="logo_image" />
                  </div>
               </div>
               <div className="simple-text logo-normal">HouseKeeper</div>
            </div>
            <div className="content">
               <Container fluid>
                  <Row>
                     <Col md={{ span: 5, offset: 3 }}>
                        <Card
                           title="Create Household"
                           lineBreak
                           content={
                              <form>
                                 <FormInputs
                                    cols={['col-md-12']}
                                    properties={[
                                       {
                                          as: 'input',
                                          bsPrefix: 'form-control',
                                          label: 'Household Name',
                                          placeholder: 'Name Your Household',
                                          required: true,
                                          size: 'sm',
                                          type: 'text',
                                          value: this.state.title,
                                          onChange: this.handleTitleChange,
                                       },
                                    ]}
                                 />
                                 <LinkedButton
                                    pathname="/home"
                                    user={user}
                                    household={household}
                                    buttonText="Create Household"
                                    block
                                 />
                                 <div className="clearfix" />
                              </form>
                           }
                        />
                     </Col>
                  </Row>
               </Container>
            </div>
         </div>
      );
   }
}

export default CreateHousehold;
