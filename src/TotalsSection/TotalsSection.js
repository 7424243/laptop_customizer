import React, {Component} from 'react';
import SummaryOption from '../SummaryOption/SummaryOption';
import SummaryTotal from '../SummaryTotal/SummaryTotal';

class TotalsSection extends Component {
    render () {
        return (
            <div>
                <SummaryOption 
                    selected={this.props.selected}/>
                <SummaryTotal 
                    selected={this.props.selected}/>
            </div>
        );
    };
}

export default TotalsSection;