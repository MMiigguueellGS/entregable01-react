import React, { useState } from 'react';
import changeRandom from '../tools/createRandom';
import ButtonQuote from './ButtonQuote';
//import '../backgroundPhrases.css'
import '../phrases.css'

//import svg1 from '../tools/Group2.svg'

//const imgBackground = ['bg1','bg2','bg3','bg4']

const imgBackground1 = ['bg5','bg6','bg7','bg8']

const imgBackground2 = ['bg9','bg10','bg11','bg12']
const planets = ['pt1','pt2','pt3']

const Phrases = ({ quotes1, quotes2, quotes3 }) => {
  const [quote, setQuote] = useState(changeRandom(quotes2));
  const [title, setTitle] = useState('FORTUNE COOKIES');
  const [bg, setBg] = useState(changeRandom(imgBackground1));
  const [space,SetSpace] = useState('')
  const [planet,setPlanet] = useState(changeRandom(planets))

 
  const handleButtonClick = (quotes, newBg,newTitle,space,planet) => {
    setQuote(changeRandom(quotes));
    setTitle(newTitle);
    setBg(changeRandom(newBg))
    SetSpace(space)
    setPlanet(planet)
  };

  return (
    <section className={`card  ${bg}` }>
      
      <section className='quote-article'>
      <h1 className='title'>{title}</h1>      
        
        <article className={`quote  ${space}`}>
          <p>{quote.phrase}</p>
        </article>
        <ButtonQuote onClick={() => handleButtonClick(quotes2, imgBackground1,'FORTUNE COOKIES','','')} classBtn={title==='FORTUNE COOKIES'?'':'classGoCookies'}>{title==='FORTUNE COOKIES'?'see another':'cookies'}</ButtonQuote> 
        <ButtonQuote onClick={() => handleButtonClick(quotes3, imgBackground2,'INFOGALAX','backgroundNoneSpace',planet)} classBtn={title==='FORTUNE COOKIES'?'classBtnCookies':'classBtnSpace'}>{title==='FORTUNE COOKIES'?'go space':''}</ButtonQuote>
     
      </section>
      <footer className={`footer ${planet} `}>
        <h4>
          <p>Fuente: {quote.author}</p>
        </h4>
      </footer>
    </section>
  );
}

export default Phrases;
