import React from 'react';

export default class SummaryTotalNumber extends React.Component {
    render() {
        return (
            <div className="summary__total__value">
                {this.props.total}
            </div>
        );
    }
}