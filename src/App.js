import React, { Component } from "react";
import './App.css';
import uniqid from "uniqid";
import Resume from "./components/Resume";

class App extends Component {
    constructor() {
        super();

        this.state = {
            general: {
                name: '',
                email: '',
                phone: '',
            },
            school: {
                schoolName: '',
                major: '',
                grad: ''
            },
            work: {
                name: '',
                title: '',
                start: '',
                finish: '',
                description: ''
            },
            works: [],
            resume: []
        }
    }

    handleGeneralChange = (e) => {
        this.setState({
            general: {
                ...this.state.general,
                [e.target.name]: e.target.value
            },
            school: {
                ...this.state.school,
                [e.target.name]: e.target.value
            }
        });
    };

    handleSchoolChange = (e) => {
        this.setState({
            school: {
                ...this.state.school,
                [e.target.name]: e.target.value
            }
        });
    };

    onSubmitGeneral = (e) => {
        e.preventDefault();
        this.setState({
            resume: this.state.resume.concat(this.state.general),
            general :{
                name: '',
                email: '',
                phone: ''
            },
            school :{
                name: '',
                major: '',
                grad: ''
            }
        });
        console.log("general: ", this.state.resume);
    };

    onSubmitSchool = (e) => {
        e.preventDefault();
        this.setState({
            resume: this.state.resume.concat(this.state.school),
            school :{
                name: '',
                major: '',
                grad: ''
            }
        });
        console.log("school: ", this.state.resume);
    };

    render() {
        const { general, school, work, works, resume } = this.state;

        return (
            <div>
                <Resume resume={resume} />
                <form id="generalInput" onSubmit={this.onSubmitGeneral}>
                    <h2>General Information:</h2>
                    <label htmlFor="name">Name:</label>
                    <input
                        onChange={this.handleGeneralChange}
                        value={general.name}
                        type="text"
                        name="name"
                        id="name"
                    />
                    <label htmlFor="email">Email:</label>
                    <input
                        onChange={this.handleGeneralChange}
                        value={general.email}
                        type="text"
                        name="email"
                        id="email"
                    />
                    <label htmlFor="phone">Phone:</label>
                    <input
                        onChange={this.handleGeneralChange}
                        value={general.phone}
                        type="text"
                        name="phone"
                        id="phone"
                    />
                    <button type="submit">
                        Submit
                    </button>
                </form>
                <form id="schoolInput" onSubmit={this.onSubmitSchool}>
                    <h2>School Information:</h2>
                    <label htmlFor="schoolName">School Name:</label>
                    <input
                        onChange={this.handleSchoolChange}
                        value={school.schoolName}
                        type="text"
                        name="schoolName"
                        id="schoolName"
                    />
                    <label htmlFor="major">Major:</label>
                    <input
                        onChange={this.handleSchoolChange}
                        value={school.major}
                        type="text"
                        name="major"
                        id="major"
                    />
                    <label htmlFor="grad">Graduated:</label>
                    <input
                        onChange={this.handleSchoolChange}
                        value={school.grad}
                        type="text"
                        name="grad"
                        id="grad"
                    />
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default App;