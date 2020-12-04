import React, {Component} from 'react';
import {USCurrencyFormat} from '../App';
import SummaryOption from '../SummaryOption/SummaryOption';

class TotalsSection extends Component {
    render () {


            const total = Object.keys(this.props.selected).reduce(
                (acc, curr) => acc + this.props.selected[curr].cost, 0);
            
            return (
                <div>
                    <SummaryOption 
                        selected={this.props.selected}/>
                    <div className="summary__total">
                        <div className="summary__total__label">Total</div>
                        <div className="summary__total__value">
                        {USCurrencyFormat.format(total)}
                        </div>
                    </div>
                </div>
            );
        
    };
}

export default TotalsSection;