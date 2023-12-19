import React, { Component } from "react";
import "./ColorPicker.css";

class ColorPicker extends Component {
  state = {
    activeOptionIDX: 0,
  };

  makeOptioClassName = (index) => {
    const optionClasses = ["ColorPicker__options"];
    if (index === this.state.activeOptionIDX) {
      optionClasses.push("ColorPicker__options--active");
    }
    return optionClasses.join(" ");
  };

  setActiveInx = (index) => {
    this.setState({ activeOptionIDX: index });
  };

  render() {
    const { activeOptionIDX } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionIDX];

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Выбран цвет:{label}</p>

        <div className="ColorPicker__list">
          {options.map(({ label, color }, index) => (
            <button
              className={this.makeOptioClassName(index)}
              key={label}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveInx(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
