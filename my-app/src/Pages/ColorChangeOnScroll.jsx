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
      y: -150,
      scrollTrigger: {
        trigger: textContainer,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Parallax effect for couple image
    gsap.to(coupleImage, {
      y: -100,
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
        start: 'top center',
        end: '+=400',
        pin: true,
        scrub: true,
      },
    });

    // Background color change for sections
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

    // Parallax effect for about-vendors and about-client sections
    const aboutUs = document.querySelector('.about-us');
    const aboutVendors = document.querySelector('.about-vendors');
    const aboutClient = document.querySelector('.about-client');

    ScrollTrigger.create({
      trigger: aboutUs,
      start: 'top top',
      end: '+=1250',
      pin: true,
      scrub: true,
    });

    gsap.to(aboutVendors, {
      y: '-100%',
      scrollTrigger: {
        trigger: aboutUs,
        start: 'top top',
        end: '+=1000',
        scrub: true,
      },
    });

    gsap.to(aboutClient, {
      y: '-100%',
      scrollTrigger: {
        trigger: aboutVendors,
        start: 'top top',
        end: '+=1000',
        scrub: true,
      },
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
            <div className="text-container" ref={textContainerRef} style={{ top: '-300px' }}>
              <h1 className="heading">Your Perfect Day,<br />A Click Away</h1>
              <p className="intro-p">
                Discover talented vendors, compare packages,<br />
                and book services with just a few clicks. Your<br />
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
          <p>Love Nest is your one-stop shop for all your wedding<br />
            planning needs. We’re passionate about creating<br />
            unforgettable wedding experiences, tailored to your<br />
            unique style and vision. From finding the perfect venue<br />
            to selecting the ideal vendors, we’re here to guide you<br />
            every step of the way. Let us take the stress out of<br />
            wedding planning and help you create a truly magical<br />
            day.
          </p>
        </div>
      </section>

      <section
        className="section h-screen relative flex items-center justify-center"
        data-bgcolor="#f7f3f2"
      >
        <div className="about-us">
          <h1 id="about-h1">About</h1>
          <h1 id="us-h1">Us</h1>
        </div>
        <div className="about-vendors">
          <div className="abt-vencontent">
            <img className="ven-img" src="/images/vendors2.jpg" alt="" />
            <div className="text-container">
              <h1>Our Vendors</h1>
              <p>As a wedding vendor, Love Nest is your ultimate tool. Create a
                stunning profile, showcase your work, and connect with couples looking for the best. Expand your client base and elevate your business today.
              </p>
            </div>
          </div>
        </div>
        <div className="about-client">
          <div className="abt-vencontent">
            <img className="ven-img" src="/images/vendors2.jpg" alt="" />
            <div className="text-container">
              <h1>Our Clients</h1>
              <p>We connect you to the best vendors for your dream wedding, ensuring
                an unforgettable experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section h-screen relative flex items-center justify-center"
        data-bgcolor="#f7f3f2"
      >
        <div className="w-full text-[9vw] leading-[1.1] tracking-tighter ">
          <span className="text-left">End Of Scroll</span>
        </div>
      </section>
    </div>
  );
}

export default IndexContent;
