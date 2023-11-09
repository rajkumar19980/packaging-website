import emailjs from "emailjs-com";
import React, { Fragment } from 'react'

const Mailer = () => {
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_737y0mb','template_w0djodu',e.target,'pBlgT580D2PlH_RQ1')
        .then(res=>{
          console.log(res)
        })
        .catch(err=>console.log(err))
    }
  return (
    <Fragment>
<div className="container">
            <h1>form</h1>
            <form action="" onSubmit={sendEmail}>
                <label htmlFor="">name</label>
                <input type="text" name="from_name" />

                <label htmlFor="">Email</label>
                <input type="email" name="from_name" />

                <label htmlFor="">message</label>
                <textarea name="message" id="" cols="10" rows="4"></textarea>
                <input type="submit" value="send" />
            </form>
        </div>
    </Fragment>
  )
}

export default Mailer
