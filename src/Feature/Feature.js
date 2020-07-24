import React from 'react';
import slugify from 'slugify';

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
      
              //Display each feature-item on customizable list
              //Component? Child of Header
              return (
                <div key={itemHash} className="feature__item">
                  <input
                    type="radio"
                    id={itemHash}
                    className="feature__option"
                    name={slugify(feature)}
                    checked={item.name === this.props.selectedFeature.name}
                    onChange={() => this.props.updateCheck(feature, item)}
                  />
                  <label htmlFor={itemHash} className="feature__label">
                    {item.name} ({USCurrencyFormat.format(item.cost)})
                  </label>
                </div>
              );
            });
            ///////////////////////////////////////////////////////////
            //Feature Container and Header
            //Can be Component with Feature-Items as children
            return (
              <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                  <h3>{feature}</h3>
                </legend>
                {options}
              </fieldset>
            );
          });
        return (
            <form className="main__form">
                {features}
            </form>
        )
    }
}

export default Feature;