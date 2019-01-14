import React from "react";
import adventureTimeHeader from "../../images/adventureTimeHeader.jpg"

const headerStyle = {
    backgroundImage: `url(${adventureTimeHeader})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    width: "100vw",
    height: "calc(100vw * .535)",
    position: "relative"
}

const divStyle  = {
    position: "absolute",
    bottom: `0`
}

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            divWidth: 0
        }
        this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
        this.setState({
            divWidth: this.divRef.offsetWidth
        });
    }

    componentWillUnmount() {
        window.removeEventListener();
    }

    handleResize = function() {
        if (window.innerHeight > 510) {
            this.setState({
                divWidth: this.divRef.offsetWidth
            });
        }
    }

    render(){
        return(
            <header style={(this.state.divWidth > 510)? headerStyle: null}>
                {this.state.divWidth <= 510 &&
                    <img src={adventureTimeHeader} alt="Adventure Time opening scene with Finn the Human motioning toward the Adventure Time logo and Jack the Dog lying at his feet."/>
                }
                <div id="headerText" ref={(elem) => this.divRef = elem} style={(this.state.divWidth > 510)? divStyle: null}>
                    <h1>Cicky Game</h1>
                    <p>Try your hand at funnest memory game you'll ever see. Start the game by clicking or tapping on a character card below.</p>
                </div>
            </header>
        );
    }
}

export default Header;
