import React, {Component} from 'react';
import FeatureFieldset from '../FeatureFieldset/FeatureFieldset';




class OrderForm extends Component {
    render() {
        return ( Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
    
            return (
              <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                  <h3>{feature}</h3>
                </legend>
                <FeatureFieldset 
                    items={this.props.features[feature]}
                    selectedName={this.props.selected[feature].name}
                    onChange={this.props.onChange}
                    featureName={feature}/>
              </fieldset>
            );  
        }));    
    };
}

export default OrderForm;