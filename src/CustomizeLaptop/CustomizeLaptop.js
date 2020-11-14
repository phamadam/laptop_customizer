import React, { Component } from 'react';
import ListItems from '../ListItems/ListItems';
import ItemOptions from '../ItemOptions/ItemOptions';
import slugify from 'slugify';

class CustomizeLaptop extends Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const { options } = this.props.features[feature].map(item => {
                const itemHash = slugify(JSON.stringify(item));
                return (
                    <ItemOptions 
                        selected={this.props.selected}
                        itemHash={itemHash}
                        feature={feature}
                        item={item}
                        key={item.name}
                        updateFeature={this.props.updateFeature}
                    />
                )
            });
            return (
                <ListItems 
                    key={idx}
                    feature={feature}
                    options={options}
                    featureHash={featureHash}
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