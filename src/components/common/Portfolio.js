import React, {Component} from 'react';
import PortfolioItem from './PortfolioItem';


const portfolio = [
    {
        title: 'Title',
        subtitle: 'Lorem ipsum',
    },
    {
        title: 'Title',
        subtitle: 'Lorem ipsum',
    },
    {
        title: 'Title',
        subtitle: 'Lorem ipsum',
    },
]


class Portfolio extends Component {
    render(){
        return(
            <div>
                <section className="page-section bg-light" id="portfolio">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Portfolio</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <div className="row">
                            {portfolio.map((portfolio, index) => {
                                return <PortfolioItem {...portfolio} key={index} />
                            })}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Portfolio;