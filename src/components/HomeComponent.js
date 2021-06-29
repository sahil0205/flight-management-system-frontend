import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import AirportService from '../services/AirportService';
import ScheduleService from '../services/ScheduleService';
import FooterComponent from './FooterComponent';


class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            source: '',
            destination: '',
            airportList: [],
            scheduleList: []
        }

        this.myChangeHandler = this.myChangeHandler.bind(this);
        this.search = this.search.bind(this);

    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }

    search = (event) => {
        event.preventDefault();
        ScheduleService.viewBySrcAndDest(this.state.source, this.state.destination).then(res => {
            this.setState({ scheduleList: res.data });
            console.log(res.data);
        }).catch(error => {
            alert("No Flights found for given places");
        })
    }

    componentDidMount() {
        AirportService.viewAllAirport().then(res => {
            this.setState({ airportList: res.data });
        })
    }

    render() {
        return (
            <div>
                <HeaderComponent />
                <div className=" home-bg">
                    <Jumbotron fluid>
                        <Container>
                            <p className="intro-para"><h4>Welcome to BookMyFlight, here we provide you excellent flight booking facilities that to at affordable prices and great discounts</h4></p> 
                            <p className="intro-para"><h4>No account is required to search the flights create an account only if you want to book. So why don't you give it a try and visit the places of your dreams.</h4></p>
                            <Form onSubmit={this.search}>
                                <Form.Row>
                                    <Col>
                                        <label>Source</label>
                                        <select className="form-control" name="source" onChange={this.myChangeHandler}>
                                            <option selected>Select source city</option>
                                            {this.state.airportList.map(
                                                airport =>
                                                    <option value={airport.id}>{airport.airportLocation}</option>
                                            )}
                                        </select>
                                    </Col>
                                    <Col>
                                        <label>Destination</label>
                                        <select className="form-control" name="destination" onChange={this.myChangeHandler} >
                                            <option selected>Select destination city</option>
                                            {this.state.airportList.map(
                                                airport =>

                                                    <option value={airport.id}>{airport.airportLocation}</option>
                                            )}
                                        </select>
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col style={{ marginTop: '20px' }}>
                                        <Button variant="success" type="submit">Search</Button>
                                    </Col>
                                </Form.Row>
                            </Form>
                            <Table striped bordered hover style={{ marginTop: '20px' }}>
                                <thead>
                                    <tr>
                                        <th>Departure</th>
                                        <th>Arrival</th>
                                        <th>Flight</th>
                                        <th>Cost per passenger (INR)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.scheduleList.map(schedule =>
                                        <tr>
                                            <td>{new Date(schedule.departure).toLocaleDateString()} {new Date(schedule.departure).toLocaleTimeString()}</td>
                                            <td>{new Date(schedule.arrival).toLocaleDateString()} {new Date(schedule.arrival).toLocaleTimeString()}</td>
                                            <td>{schedule.flight.carrierName}</td>
                                            <td>{schedule.cost}</td>
                                            <td><Button>Book Now</Button></td>
                                        </tr>
                                    )}
                                </tbody>
                            </Table>
                        </Container>
                    </Jumbotron>
                </div>
                <FooterComponent />
            </div>
        );
    }
}

HomeComponent.propTypes = {

};

export default HomeComponent;