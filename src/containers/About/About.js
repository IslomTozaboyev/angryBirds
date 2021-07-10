import React from 'react';
import Container from '../../components/container';
import Title from '../../components/Title';
import "./About.css";
import AboutCard from '../../components/AboutCard';
import BoxPhotos from '../../components/boxPhotos/boxPhotos';
import TextPhotos from '../../components/textPhotos/textPhotos';
import Enterprice from '../Enterprice/Enterprice';

const data = [
    {
        title:"Why Frameer",
        subtitle: "Easily bring designs to life with code, then share them with teammates.",
        button: "View Pricing",
        button2:"Get started",
    },
    {
        title:"Subscribe Today",
        subtitle: "Get 20% off when you choose our yearly subscription plan.",
        button:"See Features",
        button2:"Get started",
    },
]


class About extends React.Component{
    render() {
        return <section>
            <Container>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-12">
                    <Title heading="Get ahead of the pack." subtitle="Framer is the best way to create interactive designs from start to finish."/>
                    </div>
               </div>
                <div className="row d-flex justify-content-center align-items-center text-center">
                <TextPhotos/>
               </div>
            </Container>

            <BoxPhotos>
                <div className="row mt-5">
                    {
                        data.map((value, i) => {
                            return     <div className="col-sm-12 col-md-6  mt-4 d-flex justify-content-center align-items-center">
                            <AboutCard title={value.title} subtitle={value.subtitle} button1={value.button} button2={value.button2} />
                         </div>
                        })
                    }
                </div>
            </BoxPhotos>

        </section>
    }
}
export default About;