import React, { useState } from 'react'


const Contact = () => {

    const [msg, setMsg] = useState({
        name: "",
        email: "",
        message: ""
    });

    // handle inputs
    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setMsg({ ...msg, [name]: value })
    }

    // Handle Submit
    const handleSubmit = async (event) => {
        event.preventDefault();

        // object destructuring
        //store object Data into variable
        const { name, email, message } = msg;
        try {

            //It is submitted on port 3000 by efault    
            // which is front end but we need to
            // submit it on back end whih is on 
            // port 3001. so we need Proxy

            const res = await fetch('http://localhost:3001/message', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, message
                })
            })
            if (res.status === 400 || !res) {
                window.alert("Messsage not sent. Try Again later")
            } else {
                window.alert("Message sent");
                setMsg({
                    name: "",
                    email: "",
                    message: ""
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <section id='contact'>
                <div className='container my-5 py-5'>
                    <div className='row mb-5'>
                        <div className='col-12'>
                            <h3 className='fs-5 mb-0 text-center'>Contact Us</h3>
                            <h1 className='display-6 text-center mb-4'>Have Some <b>Question?</b></h1>
                            <hr className='w-25 mx-auto' />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <img src='/assets/contact-us.png' alt='Contact' className='w-75 ' />
                        </div>
                        <div className='col-md-6'>

                            <form onSubmit={handleSubmit} method="POST">
                                <div className="mb-3">
                                    <label for="name" className="form-label">Your Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Txpe your name" name='name' value={msg.name} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name='email' value={msg.email} onChange={handleChange} />

                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" className="form-label">Your Message</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" name='message' value={msg.message} onChange={handleChange} ></textarea>
                                </div>
                                <button type='submit ' className='btn btn-outline-primary rounded-pill px-4' >
                                    Send Message <i className='fa fa-paper-plane ms-2'></i>
                                </button>
                            </form>
                        </div>
                    </div>

                </div>

            </section>
        </div>
    )
}

export default Contact