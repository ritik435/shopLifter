import React from "react";
import './directory.styles.scss';
import { MenuItem } from "../menu-item/menu-item.component";

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    title: "Jackets",
                    id: 1,
                    imgUrl: "https://img.joomcdn.net/94dbc89bdc6cdcdf6482894f33d534679a700318_original.jpeg"
                },
                {
                    title: "Shoes",
                    id: 2,
                    imgUrl: "https://assetscdn1.paytm.com/images/catalog/product/F/FO/FOOSMOKY-TRENDYSMOK381955669A9D8/1622965634045_0..jpg"
                },
                {
                    title: "Watches",
                    id: 3,
                    imgUrl: "https://cdn4.ethoswatches.com/the-watch-guide/wp-content/uploads/2020/10/Masthead-Mobile@2x-3.jpg"
                },
                {
                    title: "Tshirts",
                    id: 4,
                    size: "large",
                    imgUrl: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7851879/2019/11/23/47d4710b-2a79-408a-bfe6-3d4ac8beae501574504357602-Roadster-Men-Pack-of-6-T-shirts-6711574504350623-1.jpg"
                }, {
                    title: "Bags",
                    id: 5,
                    size: "large",
                    imgUrl: "https://do5ctr7j643mo.cloudfront.net/wp-content/uploads/2021/07/30131351/most-iconic-it-bags.jpg"
                }
            ]

        }
    }
    render() {
        return (
            <div className='directory-menu'>
                {this.state.products.map(({ imgUrl, id, title, size }) => (
                    <MenuItem imgUrl={imgUrl} key={id} title={title} size={size} />
                ))}

            </div>
        )
    }
}
export default Directory;