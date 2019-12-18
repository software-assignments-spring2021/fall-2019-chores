import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

import PluginPopup from './PluginPopup';
import Button from './CustomButton';

class ActionButton extends Component {
   constructor(props) {
      super(props);
      this.state = {
         showPlugin: false,
         remove: false,
      };

      this.handleButtonClick = this.handleButtonClick.bind(this);
      this.handleRemove = this.handleRemove.bind(this);
   }

   handleButtonClick = () => {
      this.setState({ showPlugin: true });
   };

   handleRemove = () => {
      this.setState({ remove: true });
   };

   render() {
      const tooltip = (
         <Tooltip id={this.props.tool}>{this.props.tooltext}</Tooltip>
      );
      return (
         <OverlayTrigger placement={this.props.placement} overlay={tooltip}>
            <Button
               variant={this.props.varient}
               simple
               type="button"
               onClick={
                  this.props.remove ? this.handleRemove : this.handleButtonClick
               }
               {...this.props}
            >
               {this.state.showPlugin ? (
                  <PluginPopup
                     fixedClasses={this.state.fixedClasses}
                     mini={this.state['mini']}
                     header={this.props.tooltext}
                  />
               ) : null}
               <i className={this.props.icon} />
            </Button>
         </OverlayTrigger>
      );
   }
}

ActionButton.propTypes = {
   remove: PropTypes.bool,
   showPlugin: PropTypes.bool,
};

export default ActionButton;
