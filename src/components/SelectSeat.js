import React, { Component } from 'react';

const OPTIONS = [
  'D-001',
  'G-002',
  'G-003',
];

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
        <div className="button-container">
          <button type="button" className="confirm">Confirm</button>
          <button type="button" className="cancel">Cancel</button>);
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <section className="select-seat">
        <div className="seat-list">
          {this.createCheckboxes()}
        </div>
        <div className="header-container">
          <h1>Select your seat</h1>
          <p>Please ensure that your chosen seats are accurate before continuing.</p>
          <h3>You have selected:</h3>
          <div className="seat-list">
            {this.renderSeatInfo()}
          </div>
          {this.renderButtons()}
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
    <p>{id}</p>
    <p>2021.08.15</p>
    <img src="src/img/check.png" alt="check" />
  </div>
);

export default SelectSeat;
