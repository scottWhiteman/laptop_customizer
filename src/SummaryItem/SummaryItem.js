import React from 'react';

class SummaryItem extends React.Component {
    render() {
        return (
            <div className="summary__option" key={this.props.id}>
                <div className="summary__option__label">{this.props.feature} </div>
                <div className="summary__option__value">{this.props.selected}</div>
                <div className="summary__option__cost">
                    {this.props.cost}
                </div>
            </div>
        )
    }
}

export default SummaryItem;