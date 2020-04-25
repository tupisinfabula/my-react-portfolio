import React, {Component} from 'react';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import LifeStyle from './Components/LifeStyle';
import Portfolio from './Components/Portfolio';
import Footer from './Components/Footer';

class App extends Component {

    getResumeData() {
        $.ajax({
            url: '/resumeData.json',
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({resumeData: data});
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
            }
        });
    }

    componentDidMount() {
        this.getResumeData();
    }

    render() {
        return (
            <div className="App">
                <Header data={this.state.resumeData.main}/>
                <About data={this.state.resumeData.main}/>
                <Resume data={this.state.resumeData.resume}/>
                <LifeStyle data={this.state.resumeData.lifeStyle}/>
                <Portfolio data={this.state.resumeData.portfolio}/>
                <Footer data={this.state.resumeData.main}/>
            </div>
        );
    }
}

export default App;
