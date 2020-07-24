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
      
            /////////////////////////////////////////////////////////////
            //Each option with feature
            const options = this.props.features[feature].map(item => {
              //Slugify turns Object of stuff into a string
              const jsonItem = JSON.stringify(item)
              console.log(jsonItem)
              const itemHash = slugify(jsonItem);
              console.log(itemHash);
              const currencyFormat = USCurrencyFormat.format(item.cost)
              //Display each feature-item on customizable list
              //Component? Child of Header
              return (
                // <div key={itemHash} className="feature__item">
                //   <input
                //     type="radio"
                //     id={itemHash}
                //     className="feature__option"
                //     name={slugify(feature)}
                //     checked={item.name === this.props.selectedFeature.name}
                //     onChange={() => this.props.updateCheck(feature, item)}
                //   />
                //   <label htmlFor={itemHash} className="feature__label">
                //     {item.name} ({USCurrencyFormat.format(item.cost)})
                //   </label>
                // </div>
                <FeatureTypeItem
                    key={itemHash}
                    id={itemHash}
                    name={slugify(feature)}
                    item={item}
                    checked={item.name === this.props.selectedFeature.name}
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