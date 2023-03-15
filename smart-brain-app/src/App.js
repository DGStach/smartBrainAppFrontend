import React, {Component} from 'react';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import ParticlesBg from 'particles-bg'



class App extends Component{
    render(){
        return (
            <div className="App">
                <Navigation/>
                <Logo/>
                <Rank/>
            <ImageLinkForm/>
                <ParticlesBg  type="cobweb" num={300} bg={true} color="#EEEEEE"/>
                {/* <FaceRecognition/>*/}
            </div>
        );
    }
}

export default App;
