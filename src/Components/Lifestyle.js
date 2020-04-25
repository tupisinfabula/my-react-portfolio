import React, { Component } from 'react';

class Lifestyle extends Component {
    render() {

        if(this.props.data){
            var lifestyle = this.props.data.lifestyle.map(function(lifestyle){
                return  <li key={lifestyle.user}>
                    <blockquote>
                        <p>{lifestyle.text}</p>
                        <cite>{lifestyle.user}</cite>
                    </blockquote>
                </li>
            })
        }

        return (
            <section id="testimonials">
                <div className="text-container">
                    <div className="row">

                        <div className="two columns header-col">
                            <h1><span>Client Testimonials</span></h1>
                        </div>

                        <div className="ten columns flex-container">
                            <ul className="slides">
                                {lifestyle}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Lifestyle;
