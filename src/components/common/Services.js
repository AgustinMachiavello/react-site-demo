import React, {Component} from 'react';

import SingleService from './SingleService';

const services = [
    {
        title: 'E-commerce',
        description: 'lormem ipsum',
        icon: 'fa-shopping-cart',
    },
    {
        title: 'Responsive design',
        description: 'lormem ipsum',
        icon: 'fa-laptop',
    },
    {
        title: 'Web security',
        description: 'lormem ipsum',
        icon: 'fa-lock',
    },
]

class Services extends Component {

    render() {
        return(
            <div>
                <section className="page-section" id="services">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Services</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <div className="row text-center">
                            {services.map((service, index) => {
                                return <SingleService {...service} key={index}/>
                            })}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Services;