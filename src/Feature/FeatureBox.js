import React from 'react';
import FeatureType from '../FeatureType/FeatureType';
import FEATURES from '../FEATURES';

class FeatureBox extends React.Component {
    generateFeatureList = () => {
        return Object.keys(FEATURES).map((feature, idx) => {
            //Feature with index
            const featureHash = feature + '-' + idx;
            return (
            <FeatureType 
                key={featureHash}
                id={featureHash}
                title={feature}
                selectedFeature={this.props.selectedFeature}
                updateCheck={this.props.updateCheck}
                />
            );
          });
    }

    //Render FeatureBox
    render() {
        
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {this.generateFeatureList()}
            </form>
        )
    }
}

export default FeatureBox;