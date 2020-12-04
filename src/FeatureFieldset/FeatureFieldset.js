import React, {Component} from 'react';
import slugify from 'slugify';
import {USCurrencyFormat} from '../App';

class FeatureFieldset extends Component {
    render () {
        return (
            this.props.items.map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return (
              <div key={itemHash} className="feature__item">
                <input
                  type="radio"
                  id={itemHash}
                  className="feature__option"
                  name={slugify(this.props.featureName)}
                  checked={item.name === this.props.selectedName}
                  onChange={e => this.props.onChange(this.props.featureName, item)}
                />
                <label htmlFor={itemHash} className="feature__label">
                  {item.name} ({USCurrencyFormat.format(item.cost)})
                </label>
              </div>
            );
        }));        
    }
}

export default FeatureFieldset;