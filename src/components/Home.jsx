
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { Component } from 'react';
import axios from 'axios'

class Home extends Component {

    state = {
        pic: "",
        email: "",
        company: "",
        skill: "",
        average: ""

    }
    componentDidMount(){
        this.getData()
    }
    getData(){
        axios.get('https://www.hatchways.io/api/assessment/students')
            .then((response) => {

                const studentsArray = (response.data.students)
                studentsArray.email = this.state.email
                studentsArray.forEach





            ;
            })



            .catch((error) => {
                // handle error
                console.log(error);
            })
    }

    render() {
        return (
            <Row className="Home">
                <Col md={8} sm={12}>
                    { this.state.pic && <img className="pic" src={this.state.pic} alt={this.state.pic}/> }
                    { this.state.email && <h1 className="display-1 font-weight-bolder">{this.state.email}</h1> }
                    { this.state.company && <h3 className="display-4 font-weight-light">{this.state.company}</h3> }
                    { this.state.skill && <h3 className="lead font-weight-light">{this.state.skill}</h3> }
                    { this.state.average && <h3 className="lead font-weight-light">{this.state.average}</h3> }
                </Col>
            </Row>
        )
    }
}

export default Home;
