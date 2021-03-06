import React, {Component} from 'react';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

class TutorForm extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            body: [
                {AboutMe: ''},
                {TeachingStyle: ''},
                {Strengths: ''},
                {ContactMe: ''}
            ]
        }
    };
    // handleSubmit(event){
    //     event.preventDefault();
    //     this.props.onFormSubmit({
    //         title: this.state.title,
    //         body: [
    //             {AboutMe: this.state.AboutMe},
    //             {TeachingStyle: this.state.TeachingStyle},
    //             {Strenghts: this.state.Strenghts},
    //             {ContactMe: this.state.ContactMe}
    //         ]
    //     })
    // }
    render(){
        return(
            // <form onSubmit={this.handleSubmit.bind(this)}>
            <form>
                <FormGroup controlId="formControlsSelectMultiple">
                    <ControlLabel>What class or classes can you help with?</ControlLabel>
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
                        <ControlLabel>Teaching Style</ControlLabel>
                        <FormControl 
                            componentClass="textarea" 
                            placeholder="What ways have you found it helpful to learn?" 
                            type="text"
                            name="body"
                            onChange={e=>
                                {this.setState({[e.target.name]: e.target.value})}
                            }
                            value={this.state.TeachingStyle}
                        />
                    </FormGroup>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Strenghts</ControlLabel>
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
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Contact Me</ControlLabel>
                        <FormControl 
                            componentClass="textarea" 
                            placeholder="How would you like students to communicate with you?" 
                            type="text"
                            name="body"
                            onChange={e=>
                                {this.setState({[e.target.name]: e.target.value})}
                            }
                            value={this.state.ContactMe}
                        />
                    </FormGroup>
                    <Button type="submit" className="submitFormButton"></Button>
                    </FormGroup>
            </form>
        )
    }

}



export default TutorForm;