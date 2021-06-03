/* eslint-disable react/no-unused-state */
/* eslint-disable no-alert */
import React, { Component } from 'react';

class Apply extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      phone: '',
      message: '',
    };
  }

  editFname = (event) => {
    this.setState({
      fname: event.target.value,
    });
  }

  editLname = (event) => {
    this.setState({
      lname: event.target.value,
    });
  }

  editEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  }

  editPhone = (event) => {
    this.setState({
      phone: event.target.value,
    });
  }

  editMessage = (event) => {
    this.setState({
      message: event.target.value,
    });
  }

  submitApplication = () => {
    if (this.state.fname !== ''
      && this.state.lname !== ''
      && this.state.email !== ''
      && this.state.phone !== '') {
      this.setState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        message: '',
      });
      alert(`Thank you, ${this.state.fname}, for your application!`);
    } else {
      alert('Please fill in all required fields!');
    }
  }

  render() {
    return (
      <section className="apply">
        <h1>Apply Now</h1>
        <form onSubmit={this.handleSubmit}>
          <textarea placeholder="First Name *" onChange={this.editFname} value={this.state.fname} />
          <textarea placeholder="Last Name *" onChange={this.editLname} value={this.state.lname} />
          <textarea placeholder="Email *" onChange={this.editEmail} value={this.state.email} />
          <textarea placeholder="Phone Number *" onChange={this.editPhone} value={this.state.phone} />
          <textarea placeholder="Message" id="longer-text" onChange={this.editMessage} value={this.state.message} />
          <div className="btn-wrapper">
            <button type="button" className="cta-btn" onClick={this.submitApplication}>Send</button>
            <p><span id="fancy">*</span> = required text</p>
          </div>
        </form>
      </section>
    );
  }
}

export default Apply;
