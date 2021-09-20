import React, { Fragment } from 'react';
 
const Contact = ({history}) => (
   
  <Fragment>
    <h1>Contact</h1>
    <button onClick={() => history.push('/') } >Go to home</button>
    <div className="containerForm">
      <h3>Want to get in touch?</h3>
      
      <h5>Fill in the form below and I will get back to you</h5>
      <form>
        <input name="Name" placeholder="Name"/>
        <br/>
        <input name="Email" placeholder="Email"/>
        <br/>
        <textarea name="Text" placeholder="Text" rows="5" cols="80"/>
        <br/>
        <button >Submit</button>
      </form>
       <footer>©By Mikaela Fryklund</footer>
    </div>
    
  </Fragment>
  );
export default Contact;
