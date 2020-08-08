import React from 'react';
import FeatureTypeItem from '../FeatureTypeItem/FeatureTypeItem';
import FEATURES from '../FEATURES';
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class FeatureType extends React.Component {
    render() {
      const options = FEATURES[this.props.title].map(item => {
        //Slugify turns Object of stuff into a string
        const jsonItem = JSON.stringify(item)
        const itemHash = slugify(jsonItem);
        const currencyFormat = USCurrencyFormat.format(item.cost)
        return (
          <FeatureTypeItem
              key={itemHash}
              id={itemHash}
              name={slugify(this.props.title)}
              feature={this.props.title}
              item={item}
              checked={item.name === this.props.selectedFeature[this.props.title].name}
              updateCheck={this.props.updateCheck}
              currency={currencyFormat}
              />
        );
      });
        return (
              <fieldset className="feature" key={this.props.id}>
                <legend className="feature__name">
                  <h3>{this.props.title}</h3>
                </legend>
                {options}
              </fieldset>
        );
    }
}

export default FeatureType;