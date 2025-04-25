import React from 'react';
import banner from "./banner.png"
import image1 from "./image1.png"
import image2 from "./image2.png"
import image3 from "./image2.png"
import image4 from "./image4.png"
import image5 from "./image5.png"
import image6 from "./image6.png"

function App() {
  const styles = {
    page: {
      fontFamily: '"Roboto", "Inter", "Poppins", sans-serif',
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, black, white, #007a3d)',
      color: 'white',
    },
    header: {
      backgroundColor: '#e01e37',
      textAlign: 'center',
      padding: '40px 20px',
      position: 'relative',
      overflow: 'hidden',
    },
    headerContent: {
      position: 'relative',
      zIndex: '2',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '2px',
    },
    subtitle: {
      fontSize: '1.5rem',
      marginTop: '10px',
    },
    description: {
      marginTop: '20px',
      lineHeight: '1.6',
    },
    heroImage: {
      width: '100%',
      maxWidth: '500px',
      margin: '20px auto 0',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
    },
    section: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px',
      padding: '40px 20px',
    },
    card: (bgColor, textColor = 'white') => ({
      backgroundColor: bgColor,
      color: textColor,
      padding: '30px',
      borderRadius: '20px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
      display: 'flex',
      flexDirection: 'column',
    }),
    cardTitle: {
      fontSize: '1.75rem',
      fontWeight: '600',
      marginBottom: '15px',
    },
    cardImage: {
      width: '100%',
      borderRadius: '10px',
      marginBottom: '15px',
    },
    list: {
      paddingLeft: '20px',
      lineHeight: '1.6',
    },
    button: {
      backgroundColor: 'white',
      color: '#e01e37',
      fontWeight: 'bold',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '12px',
      marginTop: '20px',
      cursor: 'pointer',
    },
    eventsSection: {
      padding: '40px 20px',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    eventsTitle: {
      fontSize: '2rem',
      textAlign: 'center',
      marginBottom: '30px',
      color: 'white',
    },
    eventGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px',
    },
    eventCard: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: '20px',
      borderRadius: '10px',
      border: '1px solid #007a3d',
    },
    eventImage: {
      width: '100%',
      borderRadius: '8px',
      marginBottom: '15px',
    },
    eventTitle: {
      fontSize: '1.4rem',
      fontWeight: 'bold',
      marginBottom: '10px',
      color: 'white',
    },
    eventDetails: {
      color: '#e0e0e0',
      fontSize: '0.9rem',
    },
    partnersSection: {
      padding: '40px 20px',
      backgroundColor: 'white',
      color: 'black',
    },
    partnersTitle: {
      fontSize: '2rem',
      textAlign: 'center',
      marginBottom: '30px',
    },
    partnerImage: {
      width: '100%',
      maxWidth: '500px',
      margin: '0 auto',
      display: 'block',
      borderRadius: '10px',
    },
    socialLinksSection: {
      padding: '30px 20px',
      backgroundColor: '#007a3d',
      textAlign: 'center',
    },
    socialLinksTitle: {
      fontSize: '1.5rem',
      marginBottom: '20px',
      color: 'white',
      fontWeight: '600',
      letterSpacing: '0.5px',
    },
    socialLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      flexWrap: 'wrap',
    },
    socialLink: {
      color: 'white',
      fontSize: '1.1rem',
      fontWeight: '500',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      transition: 'transform 0.2s',
    },
    footer: {
      backgroundColor: 'black',
      textAlign: 'center',
      padding: '20px',
      fontSize: '0.875rem',
    },
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.title}>Students for Justice in Palestine</h1>
          <p style={styles.subtitle}>at Purdue University 🇵🇸</p>
          <p style={styles.description}>
            Learn about Palestine and how you can support!<br />
            Part of <em>@purdueswana</em>
          </p>
        </div>
        <a href="https://secure.everyaction.com/N7kN4KZEKkqvGqw03zbOnA2"><img 
          src={banner} 
          alt="What Is SJP?" 
          style={styles.heroImage} 
        /></a>
      </header>

      <main>
        <section style={styles.section}>
          <div style={styles.card('#007a3d')}>
            <h2 style={styles.cardTitle}>Why Palestine?</h2>
            <p>
              The Israeli-Palestinian conflict is one of the longest-running struggles in modern history.
              We believe in justice, dignity, and peace for Palestinians through awareness and advocacy.
            </p>
            <img 
              src={""} 
              style={styles.cardImage} 
            />
          </div>
          
          <div style={styles.card('black')}>
            <h2 style={styles.cardTitle}>How You Can Help</h2>
            <ul style={styles.list}>
              <li>Attend educational events and film screenings</li>
              <li>Engage with our Instagram @sjppurdue</li>
              <li>Promote dialogue and support a two-state solution</li>
              <li>Join student advocacy efforts on campus</li>
            </ul>
            <img 
              src={""} 
              style={styles.cardImage} 
            />
          </div>
          
          <div style={styles.card('white', 'black')}>
            <h2 style={styles.cardTitle}>Our Mission</h2>
            <p>
              We are committed to raising awareness about Palestine, empowering Purdue students
              to be informed advocates, and working toward a peaceful and just solution for all.
            </p>
            <img 
              src={""} 
              style={styles.cardImage} 
            />
          </div>
          
          <div style={styles.card('#e01e37')}>
            <h2 style={styles.cardTitle}>Join the Movement</h2>
            <p>
              Follow us, attend events, and be part of the change. Together, we can build a campus
              community that values justice and peace. #FreePalestine 🇵🇸
            </p>
            <img 
              src={""}  
              style={styles.cardImage} 
            />
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSenwfJ505pVM3nP8exycvv7PlaoOgcE1DkLBiL-CTI9GvGInA/viewform">
              <button style={styles.button}>SJP Membership Form</button>
            </a>
          </div>
        </section>

        <section style={styles.eventsSection}>
          <h2 style={styles.eventsTitle}>Upcoming Events</h2>
          <div style={styles.eventGrid}>
            <div style={styles.eventCard}>
              <img 
                src={image4} 
                alt="Protest for Northern Gaza" 
                style={styles.eventImage} 
              />
              <h3 style={styles.eventTitle}>Protest for Northern Gaza</h3>
              <p style={styles.eventDetails}>FRI 1 NOV | 5:30 P.M. | Engineering Fountain</p>
            </div>
            
            <div style={styles.eventCard}>
              <img 
                src={image5} 
                alt="What Happens After A Ceasefire: Looking Ahead" 
                style={styles.eventImage} 
              />
              <h3 style={styles.eventTitle}>What Happens After A Ceasefire</h3>
              <p style={styles.eventDetails}>THU 30 JAN | 7:00 P.M. | Beering 2280</p>
            </div>
            
            <div style={styles.eventCard}>
              <img 
                src={image6} 
                alt="General Member Meeting" 
                style={styles.eventImage} 
              />
              <h3 style={styles.eventTitle}>General Member Meeting</h3>
              <p style={styles.eventDetails}>THU 6 FEB | 6:00-7:30 P.M. | KNOY B019</p>
            </div>
          </div>
        </section>

        <section style={styles.partnersSection}>
          <h2 style={styles.partnersTitle}>Our Partners</h2>
          <img 
            src={image1} 
            alt="The Peace Dove Organization" 
            style={styles.partnerImage} 
          />
          <p style={{textAlign: 'center', marginTop: '20px', padding: '0 20px'}}>
            We work closely with humanitarian organizations like The Peace Dove to provide relief 
            and support to affected communities both domestically and internationally.
          </p>
        </section>

        <section style={styles.socialLinksSection}>
          <h2 style={styles.socialLinksTitle}>Connect With Us</h2>
          <div style={styles.socialLinks}>
            <a href="https://www.instagram.com/sjppurdue" style={styles.socialLink}>
              Instagram 
            </a>
            <a href="https://boilerlink.purdue.edu/organization/sjppurdue" style={styles.socialLink}>
              BoilerLink
            </a>
            <a href="https://linktr.ee/sjppurdue" style={styles.socialLink}>
              LinkTree
            </a>
          </div>
        </section>
      </main>

      <footer style={styles.footer}>
        © 2025 Students for Justice in Palestine – Purdue University | Created for COM 318 Principles of Persuasion
      </footer>
    </div>
  );
}

export default App;