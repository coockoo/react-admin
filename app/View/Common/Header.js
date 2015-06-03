import React from 'react';
import {Link} from 'react-router';
import Compile from '../../Component/Compile';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <h1>
                    <Link to="dashboard">
                        <Compile>{this.props.title}</Compile>
                    </Link>
                </h1>
            </header>
        )
    }
}

export default Header;
