import React, {Component} from 'react';
import FeatureFieldset from '../FeatureFieldset/FeatureFieldset';
import Spec from '../Spec/Spec';
import FEATURES from '../FEATURES';




class OrderForm extends Component {
    render() {
      const PROCESSOR = "Processor";
      const OPERATING_SYSTEM = "Operating System";
      const VIDEO_CARD = "Video Card";
      const DISPLAY = "Display";

        return (
          <>
            <Spec 
              parts={FEATURES[PROCESSOR]}
              name={PROCESSOR}
              selectedPart={this.props.selected[PROCESSOR]}
              onChange={this.props.onChange}/>
            <Spec 
              parts={FEATURES[OPERATING_SYSTEM]}
              name={OPERATING_SYSTEM}
              selectedPart={this.props.selected[OPERATING_SYSTEM]}
              onChange={this.props.onChange}/>
            <Spec 
              parts={FEATURES[VIDEO_CARD]}
              name={VIDEO_CARD}
              selectedPart={this.props.selected[VIDEO_CARD]}
              onChange={this.props.onChange}/>
            <Spec 
              parts={FEATURES[DISPLAY]}
              name={DISPLAY}
              selectedPart={this.props.selected[DISPLAY]}
              onChange={this.props.onChange}/>
          </>
        );    
    };
}

export default OrderForm;