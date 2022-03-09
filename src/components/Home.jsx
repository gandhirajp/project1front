import React from 'react'
import { NavLink } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Services from './Services'

const Home = () => {
    return (
        <div>
            <section id='home'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-8 mt-5'>
                            <h1 className='display-4 fw-bolder mb-4 text-center text-white'>
                                Fells The Fresh Business Gandhiraj
                            </h1>
                            <p className='lead text-center fs-4 mb-5 text-white'>
                                lorem the Gandhiraj is the famous actor an singer and music director</p>
                            <div className='buttons d-flex justify-content-center'>
                                <NavLink to="/contact" className='btn btn-light px-4 py-2 me-4 rounded-pill'>Get Quote</NavLink>
                                <NavLink to='/service' className='btn btn-outline-light px-4 py-2  rounded-pill'>Our Service</NavLink>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <About></About>
            <Services></Services>
            <Contact></Contact>
        </div>
    )
}

export default Home