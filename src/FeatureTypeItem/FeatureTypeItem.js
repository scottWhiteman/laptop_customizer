import React from 'react';

class FeatureTypeItem extends React.Component {
    render() {
        return (
            <div key={this.props.id} className="feature__item">
                <input
                type="radio"
                id={this.props.id}
                className="feature__option"
                name={this.props.name}
                checked={this.props.checked}
                onChange={() => this.props.updateCheck(this.props.feature, this.props.item)}
                />
                <label htmlFor={this.props.id} className="feature__label">
                {this.props.item.name} ({this.props.currency})
                </label>
            </div>
        );
    }
}

export default FeatureTypeItem;