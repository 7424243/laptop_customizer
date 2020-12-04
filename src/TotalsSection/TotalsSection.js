import React, {Component} from 'react';
import {USCurrencyFormat} from '../App';

class TotalsSection extends Component {
    render () {
        return (Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];

            const total = Object.keys(this.props.selected).reduce(
                (acc, curr) => acc + this.props.selected[curr].cost, 0);
            
            return (
                <div>
                    <div className="summary__option" key={featureHash}>
                        <div className="summary__option__label">{feature} </div>
                        <div className="summary__option__value">{selectedOption.name}</div>
                        <div className="summary__option__cost">
                        {USCurrencyFormat.format(selectedOption.cost)}
                        </div>
                    </div>
                    <div className="summary__total">
                        <div className="summary__total__label">Total</div>
                        <div className="summary__total__value">
                        {USCurrencyFormat.format(total)}
                        </div>
                    </div>
                </div>
            );
        }));
    };
}

export default TotalsSection;