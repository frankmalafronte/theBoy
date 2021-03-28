
  
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
      answer: <div>If there’s one thing that 2020 has taught us, it’s that life is full of the unexpected — twists and turns, ups and downs. The past many months have taught us a lot about ourselves and each other, and now more than ever, we are ready to start our lives together.
        <br />
        <br />We want to be able to celebrate with all of our loved ones, near and far. With no clear end in sight for the pandemic, we are not confident that we’ll be able to safely gather and celebrate the way we want to within the next year.
        <br />
        <br />We hope to have a massive, lively, joyful in-person celebration sometime in 2022, but we just couldn’t wait to tie the knot!
        <br />
        <br />SO, we were inspired by the creativity of other friends and family to instead consider hosting a Zoom wedding. We chose a date that holds special significance for us: December 31, 2020, which will mark five years since we first met at a New Year’s Eve party.
        <br />
        <br />We hope you’ll be able to join us before the ball drops (or doesn’t — who knows?) and close out 2020 on a happy note, despite all the challenges it has brought us.</div>,
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

