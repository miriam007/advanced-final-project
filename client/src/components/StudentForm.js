import React, {Component} from 'react';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

class StudentForm extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            body: [
                {AboutMe: ''},
                {LearningStyle: ''},
                {Weaknesses: ''},
                {Strengths: ''}
            ]
        }
    };
    // handleSubmit(event){
    //     event.preventDefault();
    //     this.props.onFormSubmit({
    //         title: this.state.title,
    //         body: [
    //             {AboutMe: this.state.AboutMe},
    //             {LearningStyle: this.state.LearningStyle},
    //             {Weaknesses: this.state.Weaknesses},
    //             {Strengths: this.state.Strengths}
    //         ]
    //     })
    // }
    render(){
        return(
            // <form onSubmit={this.handleSubmit.bind(this)}>
            <form>
                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>What class are you in?</ControlLabel>
                    <FormControl componentClass="select" placeholder="Choose your class">
                        <option value="select">select</option>
                        <option value="other">Intro to Web</option>
                        <option value="other">JavaScript Intermediate</option>
                        <option value="other">JavaScript Advanced</option>
                        <option value="other">C# .NET Intermediate</option>
                        <option value="other">C# .NET Advanced</option>
                        <option value="other">UX/UI Intermediate</option>
                        <option value="other">UX/UI Advanced</option>
                    </FormControl>
                </FormGroup>
                <FormGroup className="form">
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>About Me</ControlLabel>
                        <FormControl 
                            componentClass="textarea" 
                            placeholder="Tell us about yourself." 
                            type="text"
                            name="body"
                            onChange={e=>
                                {this.setState({[e.target.name]: e.target.value})}
                            }
                            value={this.state.AboutMe}
                        />
                    </FormGroup>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Learning Style</ControlLabel>
                        <FormControl 
                            componentClass="textarea" 
                            placeholder="How do you learn best?" 
                            type="text"
                            name="body"
                            onChange={e=>
                                {this.setState({[e.target.name]: e.target.value})}
                            }
                            value={this.state.LearningStyle}
                        />
                    </FormGroup>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Weaknesses</ControlLabel>
                        <FormControl 
                            componentClass="textarea" 
                            placeholder="What do you want to work on?" 
                            type="text"
                            name="body"
                            onChange={e=>
                                {this.setState({[e.target.name]: e.target.value})}
                            }
                            value={this.state.Weaknesses}
                        />
                    </FormGroup>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Strengths</ControlLabel>
                        <FormControl 
                            componentClass="textarea" 
                            placeholder="What areas do you excel in?" 
                            type="text"
                            name="body"
                            onChange={e=>
                                {this.setState({[e.target.name]: e.target.value})}
                            }
                            value={this.state.Strengths}
                        />
                    </FormGroup>
                    <Button type="submit" className="submitFormButton"></Button>
                    </FormGroup>
            </form>
        )
    }

}



export default StudentForm;