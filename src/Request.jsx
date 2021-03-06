import React, { Component } from 'react';
import { Modal, Button, Row, Input, Icon, Col} from 'react-materialize';

class Request extends Component{

  render(){
      return(
        <div style={{backgroundColor: '#546e7a'}}>
          <div className="card-panel blue-grey darken-3">
            <Row>
              <Col s={2}>
                <img className="circle responsive-img" src={this.props.image}/>
              </Col>
              <Col s={8}>
                <h2>{this.props.firstName} {this.props.lastName}</h2>
                </Col>
              <Col s={2}>
                <Button className="waves-red" onClick={() => {this.props.acceptFriend(this.props.id); this.props.acceptOrDeny(this.props.counter)}}>ACCEPT</Button>
                <Button onClick={() => {this.props.denyFriend(this.props.id); this.props.acceptOrDeny(this.props.counter)}}>DENY</Button>
              </Col>
            </Row>
          </div>
        </div>
      )
    }
  }

export default Request
