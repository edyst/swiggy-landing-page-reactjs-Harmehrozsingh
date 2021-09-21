import React from 'react';
import ReactDOM from 'react-dom';
import './Section2.css';
import Feature from '../Common/Feature.js';

class Section2 extends React.Component
{

  render()
  {
    return(
<div>
    
<section class="features">
          <div class="container">

          <Feature url="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf" 
          heading="No Minimum Order" firstp="Order in for yourself or for the group," secondp="with no restrictions on order value" />

<Feature url="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy" 
          heading="Live Order Tracking" firstp="Know where your order is at all times," secondp="from the restaurant to your doorstep" />
            

            <Feature url="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn" 
          heading="Lightning-Fast Delivery" firstp="Experience Swiggy's superfast delivery" secondp=" for food delivered fresh & on time" />
            
           
          </div>
        </section>
</div>

    );
  }
}

export default Section2;