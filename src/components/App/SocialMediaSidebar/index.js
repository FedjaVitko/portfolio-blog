import React from 'react';

import './main.css';

class SocialMediaSidebar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            visible: true
        }
    }

    setVisibility = () => {
        this.setState({
            visible: true
        })
    }

    onClick = () => {
        window.open('http://www.facebook.com/sharer.php?u=https://fedor-vitkovskiy.netlify.com',
                    'targetWindow',
                    'toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=250'); 
        return false;
    }

    render() {
        if (this.state.visible) {
            return (<aside id="sticky-social">
                <ul>
                    <li><a onClick={this.onClick}  href="http://www.facebook.com/sharer.php?u=https://fedor-vitkovskiy.netlify.com" className="entypo-facebook" target="_blank"><span>Facebook</span></a></li>
                    <li><a href="#" className="entypo-twitter" target="_blank"><span>Twitter</span></a></li>
                    <li><a href="#" className="entypo-gplus" target="_blank"><span>Google+</span></a></li>
                    <li><a href="#" className="entypo-linkedin" target="_blank"><span>LinkedIn</span></a></li>
                    <li><a href="#" className="entypo-instagrem" target="_blank"><span>Instagram</span></a></li>
                </ul>
            </aside>
            )
        } else {
            return <h1>Not Visible</h1>
        }
    }
}

export default SocialMediaSidebar;