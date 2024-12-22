import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function IndexContent() {
  const [containerBgColor, setContainerBgColor] = useState('white');
  const textContainerRef = useRef(null);
  const flowerImageRef = useRef(null);
  const coupleImageRef = useRef(null);

  useEffect(() => {
    const textContainer = textContainerRef.current;
    const flowerImage = flowerImageRef.current;
    const coupleImage = coupleImageRef.current;

    // Parallax effect for flower image
    gsap.to(flowerImage, {
      y: -150, // Adjust the vertical movement for the flower image
      scrollTrigger: {
        trigger: textContainer, // Scroll effect based on the text-container visibility
        start: 'top bottom', // When the top of the text-container enters the viewport
        end: 'bottom top', // When the bottom of the text-container leaves the viewport
        scrub: true, // Smooth parallax
      },
    });

    // Parallax effect for couple image
    gsap.to(coupleImage, {
      y: -100, // Adjust the vertical movement for the couple image
      scrollTrigger: {
        trigger: textContainer,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Pinning effect for the text container
    gsap.to(textContainer, {
      scrollTrigger: {
        trigger: textContainer,
        start: 'top center', // Pin when the top of text-container reaches the center of the viewport
        end: '+=400', // Duration of the pinning effect
        pin: true, // Pin the text-container in place
        scrub: true, // Smooth scrolling once it starts moving
      },
    });

    const sections = document.querySelectorAll('.section');
    sections.forEach((section, i) => {
      const backgroundColor = section.dataset.bgcolor;

      ScrollTrigger.create({
        trigger: section,
        start: 'top 10%',
        onEnter: () => {
          setContainerBgColor(backgroundColor);
        },
        onLeaveBack: () => {
          if (i > 0) {
            const prevSection = sections[i - 1];
            const prevBackgroundColor = prevSection.dataset.bgcolor;
            setContainerBgColor(prevBackgroundColor);
          } else {
            setContainerBgColor('white');
          }
        },
      });
    });
  }, []);

  return (
    <div className="container" style={{ backgroundColor: containerBgColor }}>
      <section
        className="section h-screen relative flex items-center justify-center"
        data-bgcolor="#f7f3f2"
      >
        <div className="indexContent">
          <div className="image-container">
            <img
              ref={flowerImageRef}
              className="flower-image"
              src="/images/flower2.jpg"
              alt=""
            />
          </div>
          <div className="section-inner">
            <div className="text-container" ref={textContainerRef}  style={{ top: "-300px" }}>
              <h1 className="heading">Your Perfect Day,<br />A Click Away</h1>
              <p className="intro-p">
                Discover talented vendors, compare packages,<br />
                and book services with just a few clicks. Your <br />
                dream wedding is closer than you think.
              </p>
            </div>
         
          <img
            ref={coupleImageRef}
            className="couple-img"
            src="/images/couple-2.jpg"
            alt=""
          />
           </div>
        </div>
      </section>

      <section
        className="section h-screen relative flex items-center justify-center"
        data-bgcolor="#ffffff"
      >
        <div className="about">
          <p>Love Nest is your one-stop shop for all your wedding <br />planning needs. We’re passionate about creating <br />unforgettable wedding experiences, tailored to your <br />unique style and vision. From finding the perfect venue <br />to selecting the ideal vendors, we’re here to guide you <br />every step of the way. Let us take the stress out of <br />wedding planning and help you create a truly magical <br />day.</p>
        </div>
      </section>

      <section
        className="section h-screen relative flex items-center justify-center"
        data-bgcolor="#f7f3f2"
      >
        <div className="about-vendors">
          <h1 id="about-h1">About</h1>
          <h1 id="us-h1">Us</h1>
          <div className="abt-vencontent">
            <img className="ven-img" src="/images/vendors2.jpg" alt="" />
            <div className="text-container">
              <h1>Our Vendors</h1>
              <p>As a wedding vendor, Love Nest is your ultimate tool. Create a stunning profile, showcase your work, and connect with couples looking for the best. Expand your client base and elevate your business today.</p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section h-screen relative flex items-center justify-center"
        data-bgcolor="#f7f3f2"
      >
        
      </section>
    </div>
  );
}

export default IndexContent;
