import React, { Component } from 'react';
import ListItems from '../ListItems/ListItems';

class CustomizeLaptop extends Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            
            return (
                <ListItems 
                    key={idx}
                    feature={feature}
                    options={this.props.features[feature]}
                    featureHash={featureHash}
                    updateFeature={this.props.updateFeature}
                    selected={this.props.selected}
                />
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

export default CustomizeLaptop;