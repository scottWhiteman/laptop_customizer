import React from 'react';
import slugify from 'slugify';
import FeatureType from '../FeatureType/FeatureType';
import FeatureTypeItem from '../FeatureTypeItem/FeatureTypeItem';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class Feature extends React.Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            //Feature with index
            const featureHash = feature + '-' + idx;
      
            const options = this.props.features[feature].map(item => {
              //Slugify turns Object of stuff into a string
              const jsonItem = JSON.stringify(item)
              const itemHash = slugify(jsonItem);
              const currencyFormat = USCurrencyFormat.format(item.cost)
              return (
                <FeatureTypeItem
                    key={itemHash}
                    id={itemHash}
                    name={slugify(feature)}
                    feature={feature}
                    item={item}
                    checked={item.name === this.props.selectedFeature[feature].name}
                    updateCheck={this.props.updateCheck}
                    currency={currencyFormat}
                    />
              );
            });
            ///////////////////////////////////////////////////////////
            //Feature Container and Header
            //Can be Component with Feature-Items as children
            return (
            <FeatureType 
                key={featureHash}
                id={featureHash}
                title={feature}
                options={options}/>
            );
          });
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {features}
            </form>
        )
    }
}

export default Feature;