import React from 'react'

const About = () => {
    return (
        <div>
            <section id='about'>
                <div className='container my-5 py-5'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <img src='/assets/about.png' alt='about' className='w-75 mt-5' />
                        </div>
                        <div className='col-md-6'>
                            <h3 className='fs-5 mb-0'>About Us</h3>
                            <h1 className='display-6 mb-2'>Who <b>We</b> Are</h1>
                            <hr className='w-50' />
                            <p className='lead  mb-4'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere animi quos, mollitia nemo molestias inventore
                                nihil numquam ipsa earum quam optio iure libero sequi labore suscipit. Deleniti nesciunt commodi aspernatur,
                                fugiat quidem eligendi impedit corrupti quibusdam. Consectetur minima ipsa quasi, eius ab aperiam sed vel ut
                                itaque sint impedit repudiandae!.

                            </p>
                            <button className='btn btn-primary rounded-pill px-4 py-2'>Get Stated</button>
                            <button className='btn btn-outline-primary rounded-pill px-4 py-2 ms-2'>Contact Us</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About