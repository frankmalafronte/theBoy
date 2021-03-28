
  
import React, {useState} from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import Links from '../components/links';
import styles from '../components/styles.module.css';
import FAQComponent from '../components/Accordian';


export default function Sponsor() {
  const [faqs, setFaqs] = useState([
    {
      question: 'Presenting Sponsor',
      answer: <div> Includes: Complete day of golf for two foursomes, Sponsor recognition on all printed materials, etc etc
     </div>,
      open: false,
    },
    {
      question: 'Diamond Sponsor',
      answer: 'Includes a Complete day of golf for a foursome, a Tee sign on your companys sponsored hole, a half page ad in the program, a Thank You plaque, and four super tickets: $3000.',
      open: false,
    },
    {
      question: 'Platinum Sponsor',
      answer: 'Includes: Complete day of golf for a foursome, Tee sign on your companys sponsored hole, 1/4 page ad in the program, a thank you plaque, and four Super Tickets .',
      open: false,
    },
    {
      question: 'Beverage Cart Sponsor',
      answer: 'Prominent exposure on the beverage cart and name in the program: $1500 (two available.',
      open: false,
    },
    {
      question: 'Halfway House Sponsor',
      answer: 'Prominent exposure at the Halfway House and name in the program: $1000 (two available.',
      open: false,
    },
    {
      question: '"5150" Sponsor (friends of Chip',
      answer: 'Sponsor name in the program',
      open: false,
    },
  ]);
  const toggleFAQ = (index) =>{
    setFaqs(faqs.map((faq, i)=>{
      if (i===index) {
        faq.open = !faq.open;
      } else {
        faq.open = false;
      }
      return faq;
    }));
  };

  return (
    <div>
      <Links/>
      <div className={styles.title}>Sponsorships</div>
      <div className={styles.faqs}>
        {faqs.map((faq, i)=>
          <FAQComponent faq={faq} index={i} toggleFAQ ={toggleFAQ} />,
        )}
      </div>
    </div>
  );
}

