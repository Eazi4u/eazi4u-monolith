import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Event from './Event';
import './interviews.css';
import { MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol } from "mdbreact";


class InterviewScheduler extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,

      events: [
        // {
        //   id: 1,
        //   time: "10:00",
        //   title: "Interview with candidate A",
        //   location: "Boardroom",
        //   description: "Senior Java role"
        // },

        // {
        //   id: 2,
        //   time: "10:30",
        //   title: "Interview with candidate B",
        //   location: "Boardroom"
        // },

        // {
        //   id: 3,
        //   time: "11:00",
        //   title: "Interview with candidate C"
        // },
        // {
        //   id: 4,
        //   time: "11:30",
        //   title: "Interview with candidate D",
        //   location: "Boardroom",
        //   description:
        //     "Junior NodeJS/React Developer role"
        // }
      ]
    }
  }

  toogleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  handleDelete = eventId => {
    const events = this.state.events.filter(e => e.id !== eventId);
    this.setState({ events });
  };

  handleInputChange = inputName => value => {
    const nextValue = value;
    this.setState({
      [inputName]: nextValue
    });
  };

  addEvent = () => {
    var arr = [...this.state.events];

    arr.push({
      id: arr.length ? arr[arr.length - 1].id + 1 : 1,
      time: this.state.time,
      title: this.state.title,
      location: this.state.location,
      description: this.state.description,
      value: this.var > 5 ? "Its's grater then 5" : "Its lower or equal 5"
    });

    this.setState({ events: arr });
    this.setState({
      time: "",
      title: "",
      location: "",
      description: ""
    });
  };

  render() {

    return (
      
      <React.Fragment>
        <br/><br/><br/>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="9" className="mb-r">
              <h2 className="text-uppercase my-3">Today:</h2>
              <div id="schedule-items">
                {this.state.events.map(event => (
                  <Event
                    key={event.id}
                    id={event.id}
                    time={event.time}
                    title={event.title}
                    location={event.location}
                    description={event.description}
                    onDelete={this.handleDelete}
                  />
                ))}
              </div>
              <MDBRow className="mb-4">
                <MDBCol xl="3" md="6" className="mx-auto text-center">
                  <MDBBtn color="info" rounded onClick={this.toogleModal}>
                    New Event
                      </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol md="3">
              <h3 className="text-uppercase my-3">Schedule</h3>
              <h6 className="my-3">
                It's going to be a busy day today. You have{" "}
                <b>{this.state.events.length} events </b> today.
                  </h6>
              <h1 className="my-3">
                <MDBRow>
                  <MDBCol xs="3" className="text-center">
                    <MDBIcon icon="sun" fixed />
                  </MDBCol>
                  <MDBCol xs="9">Sunny</MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol xs="3" className="text-center">
                    <MDBIcon icon="thermometer-three-quarters" fixed />
                  </MDBCol>
                  <MDBCol xs="9">23°C</MDBCol>
                </MDBRow>
              </h1>
              <p>
                Don't forget your sunglasses. Today will be dry and sunny, becoming
                warm in the afternoon with temperatures of between 20 and 25
                degrees.
                  </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBModal isOpen={this.state.modal} onClick={this.toggleModal}>
          <MDBModalHeader
            className="text-center"
            titleClass="w-100 font-weight-bold"
          >
            Schedule an Interview
            <button type="button" class="close" aria-label="Close" onClick={this.toogleModal}>
              <span aria-hidden="true">×</span>
            </button>
          </MDBModalHeader>
          <MDBModalBody align="left">
            <form className="mx-3 grey-text">

              <MDBInput
                icon="clock"
                name="time"
                label="Time"
                hint="Set event time e.g 12:30"
                group
                type="text"
                getValue={this.handleInputChange("time")}
              />
              <MDBInput
                icon="edit"
                name="title"
                label="Title"
                hint="Event title"
                group
                type="text"
                getValue={this.handleInputChange("title")}
              />
              <MDBInput
                icon="map"
                name="location"
                label="Location (optional)"
                hint= "Location"
                group
                type="text"
                getValue={this.handleInputChange("location")}
              />
              <MDBInput
                icon="sticky-note"
                name="description"
                label="Description (optional)"
                hint= "Description"
                group
                type="textarea"
                getValue={this.handleInputChange("description")}
              />
            </form>
          </MDBModalBody>
          <MDBModalFooter className="justify-content-center">
            <MDBBtn
              color="info"
              onClick={() => {
                this.toogleModal();
                this.addEvent();
              }}
            >
              Add
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </React.Fragment>
    );
  }
}

export default InterviewScheduler;