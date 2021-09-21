import React from 'react';
import ReactDOM from 'react-dom';
import './Section1.css';
import Button from '../Common/Button.js';
import ButtonLocate from '../Common/ButtonLocate.js';
import Heading from '../Common/h.js';

class Section1 extends React.Component
{

  render()
  {
    return(
<div>
        <section class="section1">

        <div class="left">
            <nav>
               <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/320px-Swiggy_logo.svg.png" />
             <Button class="sign" name="Sign up" />
             <Button class="login" name="Login" />
            </nav>
           <Heading />
            <h2>Order food from favourite restaurants near you.</h2>
            <div class="form">
            <form>
                <input placeholder="Enter your delivery location" class="in" />
                <div>
                <ButtonLocate class="location" name="Locate Me" />
                
                </div>

                <Button class="find" name="FIND FOOD" />
                
            </form>
            </div>
            <h3>
                POPULAR CITIES IN INDIA
            </h3>
            <ul> <li class="odd">Ahmedabad</li> <li class="even">Bangalore</li> <li class="odd">Chennai</li> <li class="even">Delhi</li> <li class="odd">Gurgaon</li> <li class="even">Hyderabad</li> <li class="odd">Kolkata</li> <li class="even">Mumbai</li> <li class="odd">Pune</li> <li class="even">&</li> <li class="odd">more.</li>
            </ul>
        </div>
        <div class="right">
            
        </div>
    </section>
</div>


    );
  }
}

export default Section1;