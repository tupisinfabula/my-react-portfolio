import React, { Component } from 'react';
import ResumePdf from '../Documents/seilaTupone.pdf';

class About extends Component {
    render() {

        if(this.props.data){
            var name = this.props.data.name;
            var profilepic= "/images/"+this.props.data.image;
            var bio = this.props.data.bio;
            var city = this.props.data.address.city;
            var state = this.props.data.address.state;
            var email = this.props.data.email;
        }

        return (
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic"  src={process.env.PUBLIC_URL + profilepic} alt="Seila Tupone Profile Pic" />
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>

                        <p>{bio}</p>
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>{name}</span><br />
                                    <span> {city}, {state} </span><br />
                                    <span>{email}</span>
                                </p>
                            </div>
                            <div className="columns download">
                                <p>
                                    <a href={ResumePdf} className="button" target = "_blank" rel="noopener noreferrer"><i className="fa fa-download"></i>Download Resume</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default About;
