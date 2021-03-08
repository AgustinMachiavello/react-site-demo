import React, {Component} from 'react';

// Components
import Header from '../common/Header';
import Services from '../common/Services';
import Portfolio from '../common/Portfolio';


class Home extends Component {

    render() {
        return (
            <div>
                <Header 
                    title="Welcome!"
                    subtitle="It's nice to see you"
                    buttonText="Tell me more"
                    link="/services"
                    showButton={true}
                    image="/assets/img/header-bg.jpg"
                />
                <Services />
                <Portfolio />
            </div>
        )
    }

}

export default Home;