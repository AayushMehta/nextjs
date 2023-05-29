import Head from "next/head";
import { useState, useEffect } from "react";
import Image from "next/image";
import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faEnvelope,
  faCalendarDays,
  faLocationDot,
  faBookOpen,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

// import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [activePage, setActivePage] = useState("");
  const [sidebarActive, setSidebarActive] = useState(false);

  useEffect(() => {
    const sidebarBtn = document.querySelector("[data-sidebar-btn]");
    const sidebar = document.querySelector("[data-sidebar]");

    const handleSidebarToggle = () => {
      setSidebarActive(!sidebarActive);
      sidebar.classList.toggle("active");
    };

    sidebarBtn.addEventListener("click", handleSidebarToggle);

    return () => {
      sidebarBtn.removeEventListener("click", handleSidebarToggle);
    };
  }, [sidebarActive]);

  useEffect(() => {
    const navigationLinks = document.querySelectorAll("[data-nav-link]");
    const pages = document.querySelectorAll("[data-page]");

    const handleNavLinkClick = (page, link) => {
      setActivePage(page);
      pages.forEach((pageItem, index) => {
        if (index === page) {
          pageItem.classList.add("active");
        } else {
          pageItem.classList.remove("active");
        }
      });

      navigationLinks.forEach((linkItem) => {
        linkItem.classList.remove("active");
      });

      link.classList.add("active");
    };

    navigationLinks.forEach((link, index) => {
      link.addEventListener("click", () => {
        handleNavLinkClick(index, link);
      });
    });

    return () => {
      navigationLinks.forEach((link, index) => {
        link.removeEventListener("click", () => {
          handleNavLinkClick(index, link);
        });
      });
    };
  }, []);

  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Google tag (gtag.js) */}
      <title>Aayush Mehta</title>
      {/*
    - favicon
  */}
      <link
        rel="shortcut icon"
        href="/assets/images/logo-A - Edited.png"
        type="image/x-icon"
      />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
      <main>
        <aside className="sidebar" data-sidebar="">
          <div className="sidebar-info">
            <figure className="avatar-box">
              <Image
                src="/aayush-avatar.png"
                alt="Aayush Mehta"
                width={120}
                height={120}
                loading="lazy"
              />
            </figure>
            <div className="info-content">
              <h1 className="name" title="Richard hanrick">
                Aayush Mehta
              </h1>
              <p className="title">Web developer</p>
            </div>
            <button className="info_more-btn" data-sidebar-btn="">
              <span>Show Contacts </span>
              <FontAwesomeIcon icon={faChevronDown} />
            </button>
          </div>
          <div className="sidebar-info_more">
            <div className="separator" />
            <ul className="contacts-list">
              <li className="contact-item">
                <div className="icon-box">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="contact-info">
                  <p className="contact-title">Email</p>
                  <a href="mailto:hi@aayushmehta.com" className="contact-link">
                    hi@aayushmehta.com
                  </a>
                </div>
              </li>
              <li className="contact-item">
                <div className="icon-box">
                  <FontAwesomeIcon icon={faCalendarDays} />
                </div>
                <div className="contact-info">
                  <p className="contact-title">Birthday</p>
                  <time dateTime="1982-06-23">Febuary 28, 2001</time>
                </div>
              </li>
              <li className="contact-item">
                <div className="icon-box">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div className="contact-info">
                  <p className="contact-title">Location</p>
                  <address>Bengaluru, India</address>
                </div>
              </li>
            </ul>
            <div className="separator" />
            <ul className="social-list">
              <li className="social-item">
                <a
                  href="https://www.linkedin.com/in/aayush-mehta-2b7028147/"
                  className="social-link"
                  target="_blank"
                >
                  <ion-icon name="logo-linkedin" />
                </a>
              </li>
              <li className="social-item">
                <a
                  href="https://github.com/AayushMehta"
                  className="social-link"
                  target="_blank"
                >
                  <ion-icon name="logo-github" />
                </a>
              </li>
              <li className="social-item">
                <a
                  href="https://medium.com/@aayushmehta5225"
                  className="social-link"
                  target="_blank"
                >
                  <ion-icon name="logo-medium" />
                </a>
              </li>
              <li className="social-item">
                <a
                  href="mailto:hi@aayushmehta.com"
                  className="social-link"
                  target="_blank"
                >
                  <ion-icon name="mail-outline" />
                </a>
              </li>
            </ul>
          </div>
        </aside>
        <div className="main-content">
          <nav className="navbar">
            <ul className="navbar-list">
              <li className="navbar-item">
                <button className="navbar-link active" data-nav-link="">
                  About
                </button>
              </li>
              <li className="navbar-item">
                <button className="navbar-link" data-nav-link="">
                  Resume
                </button>
              </li>
              {/* PORTFOLIO COMPANY TO BE ACTIVATED LATER */}
              <li className="navbar-item">
                <button className="navbar-link" data-nav-link="">
                  Portfolio
                </button>
                {/* add _modified to data-nav-link to disable button */}
              </li>
              <li className="navbar-item">
                <button className="navbar-link" data-nav-link="">
                  Blog
                </button>
              </li>
            </ul>
          </nav>
          <article className="about active" data-page="about">
            <header>
              <h2 className="h2 article-title">About me</h2>
            </header>
            <section className="about-text">
              <p>
                I&apos;m Frontend developer from Bengaluru, india, working on
                Freelance Projects. I enjoy turning complex problems into
                simple, beautiful and intuitive designs.
              </p>
              <p>
                My job is to build your website so that it is functional and
                user-friendly but at the same time attractive. Moreover, I add
                personal touch to your product and make sure that is
                eye-catching and easy to use. My aim is to bring across your
                message and identity in the most creative way.
              </p>
            </section>
            <section className="service">
              <h3 className="h3 service-title">What i&apos;m doing</h3>
              <ul className="service-list">
                <li className="service-item">
                  <div className="service-icon-box">
                    {/* <img
              src="./assets/images/icon-dev.svg"
              alt="Web development icon"
              width="40"
            /> */}
                  </div>
                  <div className="service-content-box">
                    <h4 className="h4 service-item-title">Web development</h4>
                    <p className="service-item-text">
                      High-quality development of sites at the professional
                      level.
                    </p>
                  </div>
                </li>
                <li className="service-item">
                  <div className="service-icon-box">
                    {/* <img
              src="./assets/images/icon-design.svg
          "
              alt="design icon"
              width="40"
            /> */}
                  </div>
                  <div className="service-content-box">
                    <h4 className="h4 service-item-title">Web Design</h4>
                    <p className="service-item-text">
                      The most modern and high-quality design made at a
                      professional leve
                    </p>
                  </div>
                </li>
                <li className="service-item">
                  <div className="service-icon-box">
                    {/* <img
              src="./assets/images/icon-app.svg"
              alt="mobile app icon"
              width="40"
            /> */}
                  </div>
                  <div className="service-content-box">
                    <h4 className="h4 service-item-title">Mobile apps</h4>
                    <p className="service-item-text">
                      Professional development of applications for iOS and
                      Android.
                    </p>
                  </div>
                </li>
                <li className="service-item">
                  <div className="service-icon-box">
                    {/* <img
              src="./assets/images/icon-photo.svg"
              alt="camera icon"
              width="40"
            /> */}
                  </div>
                  <div className="service-content-box">
                    <h4 className="h4 service-item-title">Photography</h4>
                    <p className="service-item-text">
                      I make high-quality photos of any category at a
                      professional level.
                    </p>
                  </div>
                </li>
              </ul>
            </section>
          </article>
          <article className="resume" data-page="resume">
            <header>
              <h2 className="h2 article-title">Resume</h2>
            </header>
            <section className="timeline">
              <div className="title-wrapper">
                <div className="icon-box">
                  <FontAwesomeIcon icon={faBookOpen} />
                </div>
                <h3 className="h3">Education</h3>
              </div>
              <ol className="timeline-list">
                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">
                    JK Lakshmipat Univeraity
                  </h4>
                  <span>2019 — 2023</span>
                  <p className="timeline-text">B.Tech Computer Science</p>
                </li>
              </ol>
            </section>
            <section className="timeline">
              <div className="title-wrapper">
                <div className="icon-box">
                  <FontAwesomeIcon icon={faBriefcase} />{" "}
                </div>
                <h3 className={cn("h3")}>Experience</h3>
              </div>
              <ol className={cn("timeline-list")}>
                {/* <li class="timeline-item">
                  <h4 class="h4 timeline-item-title">CTO</h4>

                  <h5>BrickByBit</h5>
                  <span>June, 2023 - Present</span>

                  <p class="timeline-text">Web Developmnent Company</p>
                </li> */}
                <li className={cn("timeline-item")}>
                  <h4 className={cn("h4 timeline-item-title")}>
                    Frontend Developer
                  </h4>
                  <h5>Doorpix</h5>
                  <span>Jan, 2023 - Present</span>
                  <p className={cn("timeline-text")}>
                    Develop web applications based on HTML, CSS, JS, React JS
                  </p>
                </li>
                <li className={cn("timeline-item")}>
                  <h4 className={cn("h4", "timeline-item-title")}>
                    Information Security Analyst Intern
                  </h4>
                  <h5>Cronytechnovest</h5>
                  <span>July, 2021 — September, 2021 (3 months)</span>
                  <p className={cn("timeline-text")}>
                    Vulnerability Assessment and Penetration Testing(VAPT){" "}
                    <br />
                    Network penetration testing <br />
                    Mobile penetration testing
                    <br />
                  </p>
                </li>
              </ol>
            </section>
          </article>
          <article className="portfolio" data-page="portfolio">
            <headata-filteder>
              <h2 className="h2 article-title">Portfolio</h2>
            </headata-filteder>
            <section className="projects">
              <div className="filter-select-box">
                <button className="filter-select" data-select="" />
              </div>
              <div className="project-list">
                <a href="https://discover-jodhpur.netlify.app" target="_blank">
                  <div className="project-cover">
                    <Image
                      src="/discoverJodhpurCover.png"
                      alt="discover-jodhpur"
                      loading="lazy"
                      width={160}
                      height={100}
                    />
                    <h4>Discover Jodhpur</h4>
                  </div>
                </a>
                <a href="https://excrusion.netlify.app" target="_blank">
                  <div className="project-cover">
                    <Image
                      src="/excrusion-cover.png"
                      alt="discover-jodhpur"
                      loading="lazy"
                      width={160}
                      height={100}
                    />
                    <h4>Excrusion</h4>
                  </div>
                </a>
                <a href="https://healthy-omni-food.netlify.app" target="_blank">
                  <div className="project-cover">
                    <Image
                      src="/healthy-omni-food.png"
                      alt="discover-jodhpur"
                      loading="lazy"
                      width={160}
                      height={100}
                    />
                    <h4>Omni Food</h4>
                  </div>
                </a>
                <a
                  href="https://yoga-studio-website.netlify.app"
                  target="_blank"
                >
                  <div className="project-cover">
                    <Image
                      src="/yoga-studio.png"
                      alt="discover-jodhpur"
                      loading="lazy"
                      width={160}
                      height={100}
                    />
                    <h4>Yoga Studio</h4>
                  </div>
                </a>
              </div>
            </section>
          </article>
          <article className="blog" data-page="blog">
            <header>
              <h2 className="h2 article-title">Blog</h2>
            </header>
            <section className="blog-posts">
              <ul className="blog-posts-list">
                <li className="blog-post-item">
                  <a
                    href="https://medium.com/@aayushmehta5225/how-to-become-productive-as-a-developer-2a4b2c3d0758"
                    target="_blank"
                  >
                    {/* <figure class="blog-banner-box">
              <img
                src="./assets/images/blog-6.jpg"
                alt="Design digest #79"
                loading="lazy"
              />
            </figure> */}
                    <div className="blog-content">
                      <div className="blog-meta">
                        <p className="blog-category">Web Development</p>
                        <span className="dot" />
                        <time dateTime="2022-02-23">April 05, 2023</time>
                      </div>
                      <h4 className="h4 blog-item-title">
                        How to become productive as a developer
                      </h4>
                      {/* <p class="blog-text">
                How to become productive as a developer
              </p> */}
                    </div>
                  </a>
                </li>
                <li className="blog-post-item">
                  <a
                    href="https://medium.com/@aayushmehta5225/understanding-box-sizing-and-border-box-2407b8415e06"
                    target="_blank"
                  >
                    {/* <figure class="blog-banner-box">
            <img src="#" alt="#" loading="lazy" />
            </figure> */}
                    <div className="blog-content">
                      <div className="blog-meta">
                        <p className="blog-category">Web Development</p>
                        <span className="dot" />
                        <time dateTime="2022-02-23">April 10, 2023</time>
                      </div>
                      <h4 className="h4 blog-item-title">
                        Understanding box-Sizing and border-box
                      </h4>
                      {/* <p class="blog-text">
                Understanding box-Sizing and border-box
              </p> */}
                    </div>
                  </a>
                </li>
                <li className="blog-post-item">
                  <a
                    href="https://medium.com/@aayushmehta5225/grid-template-area-6a7b9ec94e8a"
                    target="_blank"
                  >
                    {/* <figure class="blog-banner-box">
              <img src="#" alt="#" loading="lazy" />
            </figure> */}
                    <div className="blog-content">
                      <div className="blog-meta">
                        <p className="blog-category">Web Development</p>
                        <span className="dot" />
                        <time dateTime="2022-02-23">April 11, 2023</time>
                      </div>
                      <h4 className="h4 blog-item-title">
                        Understanding grid-template area
                      </h4>
                      {/* <p class="blog-text">
                Understanding box-Sizing and border-box
              </p> */}
                    </div>
                  </a>
                </li>
              </ul>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
