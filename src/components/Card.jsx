import React, { Component } from 'react';

export class Card extends Component {
   render() {
      return (
         <div className={'card' + (this.props.plain ? ' card-plain' : '')}>
            <div
               className={'header' + (this.props.hCenter ? ' text-center' : '')}
            >
               <h4 className="title">{this.props.title}</h4>
               {this.props.title == 'Household:' ? (
                  <span>{this.props.householdID}</span>
               ) : null}
               {this.props.lineBreak ? <hr /> : null}
               <p className="category">{this.props.category}</p>
            </div>
            <div
               className={
                  'content' +
                  (this.props.ctTableFullWidth ? ' table-full-width' : '') +
                  (this.props.ctTableResponsive ? ' table-responsive' : '') +
                  (this.props.ctTableUpgrade ? ' table-upgrade' : '')
               }
            >
               {this.props.content}
            </div>
         </div>
      );
   }
}

export default Card;