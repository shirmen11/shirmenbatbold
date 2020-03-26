import React from 'react';
import './Country.css';

import mn from '../../img/pic-1.jpg'
import sun from '../../img/sun-icon.svg';
import ca from '../../img/pic-2.jpg';
import snow from '../../img/snow-icon.svg';

const Country = (props) => {

  let currentTemp = 0;

  if (props.cities) {
    let fahrenheit = parseInt(props.cities.main.temp);
    let celsius = parseInt((fahrenheit - 32) * (5 / 9));
    if (props.tempSymbol === 'F') {
      currentTemp = fahrenheit;
    } else {
      currentTemp = celsius;
    }
  }

  return (
    <section>
      <div className='floater'>
        <div className='icon-temp'>
          {props.cities && props.cities.name === 'Ulaanbaator' ?
            <img src={sun} alt='Icon' />
            :
            <img src={snow} alt='Icon' />
          }
          <p id='temp'>{props.cities ? currentTemp : ''}°</p>
        </div>
        <p>{props.cities ? props.cities.weather[0].main.toUpperCase() : ''}</p>
      </div>
      {props.cities && props.cities.name === 'Los Angeles' ?
          
        <img src={mn} alt='Ulaanbaator' id='country-img' />
          :
        <img src={ca} alt='Los Angeles' id='country-img' />
        
        
      
      }
      <div className='country'>
        { props.cities && props.cities.name === 'Los Angeles' ?
          <div>
            <p>{props.cities.name}</p>
            <p>CALIFORNIA</p>
          </div>
          :
          <div>
            <p>Ulaanbaator</p>
            <p>Mongolia</p>
          </div>
        }
      </div>
    </section>
  );
}

export default Country;