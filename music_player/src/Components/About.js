import React from "react";
import demo from '../img/ian-schneider-TamMbr4okv4-unsplash.jpg'
const About=()=>{

    return(
    <div className="mainabout">
       <section class="py-3 py-md-5 py-xl-8">
  <div class="container" >
    <div class="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
      <div class="col-12 col-lg-6 col-xl-5" className="aboutimage">
        <img  class="img-fluid rounded" loading="lazy" src={demo} alt=""/>
      </div>
      <div class="col-12 col-lg-6 col-xl-7">
        <div class="row justify-content-xl-center">
          <div class="col-12 col-xl-11" className="tagline">
            <h2 className="heading" style={{color:"white"}}>Welcome to Relaxy, the Ultimate Music Experience</h2>
            <p className="textstyle">At Relaxy, we believe music is more than just sound. It's an emotional journey, a universal language that connects people, and a powerful form of expression. That's why we've created an innovative music player application designed to bring your favorite tunes to life in the most intuitive and enjoyable way possible.</p>
            <h3 className="heading" style={{color:"white"}}>Our Journey</h3>
            <p className="textstyle">Founded by a group of music enthusiasts and tech innovators, Relaxy began as a dream to transform the way people interact with music. Our journey started in 2024, fueled by a passion for creating a seamless and immersive music listening experience. Today, Relaxy stands as a testament to our commitment to excellence, innovation, and the love of music.</p>
            <div class="row gy-4 gy-md-0 gx-xxl-5X" className="textpoint">
              <div class="col-12 col-md-6">
                <div class="d-flex">
                  <div class="me-4 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
                      <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="mb-3">Versatile Brand</h4>
                    <p class="text-secondary mb-0">We are crafting a Application that subsists life across all mediums.</p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="d-flex">
                  <div class="me-4 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-fire" viewBox="0 0 16 16">
                      <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="mb-3">Our Mission</h4>
                    <p class="text-secondary mb-0">Our mission is simple: to elevate your music listening experience. Whether you're an audiophile, a casual listener, or someone who finds solace in melodies, Relaxy is here to enhance your musical journey. We strive to bring you closer to the music you love, discovering new tracks, and exploring diverse genres with ease and sophistication.</p>
                  </div>
                </div>
              </div>
              <h3 className="heading" style={{color:"white"}}>What Sets Us Apart</h3>
              <p>Personalized Listening: Our app learns your preferences and suggests songs that match your taste, mood, and activity.
             High-Quality Audio: Experience crystal-clear sound quality, ensuring every note is heard in its full glory.
            Extensive Library: From timeless classics to the latest hits, our expansive music library ensures you have access to a wide array of songs across all genres.
            User-Friendly Interface: Navigate effortlessly with our intuitive design, making your music experience hassle-free and enjoyable.
            Offline Play: Take your music anywhere, even without an internet connection, with our offline playback feature.
            Community and Sharing: Connect with fellow music lovers, share playlists, and discover new music through community recommendations.</p>
            <h3 className="heading" style={{color:"white"}}>Looking Ahead</h3>
            <p>As we continue to grow, Relaxy remains dedicated to enhancing and innovating your music experience. We're constantly exploring new features, upgrading our technology, and expanding our music library to ensure you have the best listening experience.
                    Join us on this melodious journey and immerse yourself in the world of music like never before.</p>
            </div>
             <h2>Experience Music, Experience Relaxy.</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
       
    </div>

    );
};

export default About;