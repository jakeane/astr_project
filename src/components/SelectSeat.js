/* eslint-disable no-alert */
import React, { Component } from 'react';

const OPTIONS = [
  'D-001',
  'G-002',
  'G-003',
];

const CONFRIM_MESSAGE = 'Your tickets have been booked. We look forward to seeing you soon!';

const CANCEL_MESSAGE = 'Your flight has been canceled. Please let us know if there is anything we can do to make your experience more enjoyable.';

class SelectSeat extends Component {
  constructor() {
    super();
    this.state = {
      checkboxes: OPTIONS.reduce(
        (options, option) => ({
          ...options,
          [option]: false,
        }),
        {},
      ),
    };
  }

  handleCheckboxChange = (changeEvent) => {
    const { name } = changeEvent.target;

    this.setState((prevState) => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name],
      },
    }));
  };

  createCheckbox = (option) => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  createCheckboxes = () => OPTIONS.map(this.createCheckbox);

  renderSeatInfo = () => (
    Object.keys(this.state.checkboxes).filter((checkbox) => this.state.checkboxes[checkbox]).map((checkbox, i) => <Seat id={checkbox} />)
  );

  renderConfirmButton

  renderButtons = () => {
    if (Object.keys(this.state.checkboxes).filter((checkbox) => this.state.checkboxes[checkbox]).length !== 0) {
      return (
        <div className="btn-wrapper">
          <button type="button" className="cta-btn" onClick={() => alert(CONFRIM_MESSAGE)}>Confirm</button>
          <button type="button" className="cancel" onClick={() => alert(CANCEL_MESSAGE)}>Cancel</button>
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <section className="select-seat">
        <div className="header-container">
          <h1>Select your seat</h1>
          <h2>Please ensure that your chosen seats are accurate before continuing. <br /><br />
            <span id="bolder">You have selected:</span>
          </h2>
          <div className="seat-list">
            {this.renderSeatInfo()}
          </div>
          {this.renderButtons()}
        </div>
        <div className="box-list">
          {this.createCheckboxes()}
        </div>

      </section>
    );
  }
}

const Checkbox = ({ label, isSelected, onCheckboxChange }) => (
  <div className={`seat-check-${label}`}>
    <input
      type="checkbox"
      name={label}
      checked={isSelected}
      onChange={onCheckboxChange}
      className="seat-input"
    />
  </div>
);

const Seat = ({ id }) => (
  <div className="seat-container">
    <p id="id">{id}</p>
    <p>2021.08.15</p>
    <img src="src/img/check.png" alt="check" className="checkmark" />
  </div>
);

export default SelectSeat;
