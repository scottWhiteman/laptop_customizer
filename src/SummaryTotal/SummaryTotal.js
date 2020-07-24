import React from 'react';
import SummaryTotalNumber from '../SummaryTotalNumber/SummaryTotalNumber';

class SummaryTotal extends React.Component {
    render() {
        return (
            <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <SummaryTotalNumber total={this.props.total}/>
            </div>
        );
    }
}

export default SummaryTotal;