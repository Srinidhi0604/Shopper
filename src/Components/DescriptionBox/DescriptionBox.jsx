    import React, { useContext, useState } from 'react'
    import './Description.css'
    import { ShopContext } from '../../Context/ShopContext'
    import Review from '../Reviews/Review'

    function DescriptionBox() {
        const[currentTab, setCurrentTab] = useState('review');
        const{size} = useContext(ShopContext);

        const changeTab = (tab) => {
            setCurrentTab(tab);
        }
    return (
        <div className='description-box'>
            <div className="descriptionbox-navigator">
                <div className="nav-box" onClick={() => changeTab('description')}>Description</div>
                <div className="nav-box fade" onClick={() => changeTab('review')}>Reviews (5)</div>
            </div>

            <div className="description-box-description">
                { (currentTab === 'description') ? 
                (   <>
                        <p>
                        An e-commerece website is an online plattform  that facilitate buying and selling of products or services over the internet
                        serves as a virtual market place where buyers and sellers meet and interact with each other.showcase their products and interact with the customers 
                        and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenient
                        accessibilty and user-friendly interface.
                        </p>
                        <p>E-commerce websites typically display products or services a detailed description, images, prices, and any avialable variety.</p>
                    </>
                ):(
                    <>
                        <Review name="Neeraj" size = {size} date = '15 January 2024 ' ratingstars='4' comment = 'Good' description = 'Just got this product! The fabric and print of the this is really nice. Nice product'/><hr/>
                        <Review name="Sara" size = 'L' date = '28 March 2023' ratingstars='5' comment = 'Excellent Quality' description = 'Yellow and green both colour is looking nice on my dusky skin tone. Stitching is also good, comfortable, print is also nice Fitting issue only need to alter Over all m Happy with this product.'/> <hr/>
                        <Review name="Ankit" size = 'XL' date = '25 November 2024' ratingstars='2' comment = 'Not up to the Mark' description = 'I don’t satisfied with the quality, looks too delicate but now I am keeping it just to attend some function and I don’t have time to go out and buy other stuff. I bought other $40 dress it’s Jas way better quality'/> <hr/>
                        <Review name="Krishna" size = 'XXL' date = '15 September 2024' ratingstars='3' comment = 'Decent Quality' description = 'It is bit below expectations'/><hr/>
                        <Review name="Vimla" size = 'S' date = '05 April 2022' ratingstars='4' comment = 'Good' description = 'Its quality is nice and it is comfortable to wear, and the color is also good and its value of money'/>
                    </>
                )
                }
            </div>
            
        </div>
    )
    }

    export default DescriptionBox
