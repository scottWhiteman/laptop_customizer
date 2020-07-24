import React from 'react';

class FeatureType extends React.Component {
    render() {
        return (
              <fieldset className="feature" key={this.props.key}>
                <legend className="feature__name">
                  <h3>{this.props.title}</h3>
                </legend>
                {this.props.options}
              </fieldset>
        );
    }
}

export default FeatureType;