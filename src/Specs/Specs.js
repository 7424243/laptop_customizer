

import React, {Component} from 'react';
import FeatureFieldset from '../FeatureFieldset/FeatureFieldset';


class Spec extends Component {
    render() {
        return (
            <fieldset className="feature" >
              <legend className="feature__name">
                <h3>{this.props.name}</h3>
              </legend>
              <FeatureFieldset 
                  items={this.props.parts}
                  selectedName={this.props.selectedPart.name}
                  onChange={this.props.onChange}
                  featureName={this.props.name}/>
            </fieldset>
          );  
    }
}

export default Spec;