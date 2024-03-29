import React, { Component } from 'react';

export default class CustomCheckbox extends Component {
   constructor(props) {
      super(props);
      this.state = {
         is_checked: props.isChecked ? true : false,
      };
      this.handleCheck = this.handleCheck.bind(this);
   }

   handleCheck() {
      this.setState({ is_checked: !this.state.is_checked });
   }

   render() {
      const { isChecked, number, label, inline, ...rest } = this.props;
      const classes =
         inline !== undefined ? 'checkbox checkbox-inline' : 'checkbox';
      return (
         <div className={classes}>
            <input
               number={number}
               type="checkbox"
               onChange={this.handleCheck}
               checked={this.state.is_checked}
               {...rest}
            />
            <label htmlFor={number}>{label}</label>
         </div>
      );
   }
}
