import React from 'react';

export default function App() {
  const singles = [
    { title: 'Surfing Sasquatch',   image: 'Surfing_Sasquatch.png',    spotifyId: '3AxvaOOzZNAWoiS3ebNQjk', spotifyType: 'track' },
    { title: 'Bad Road',            image: 'Bad_Road.png',             spotifyId: '55rLZYNvYFmDSR0Nc7jQ4E', spotifyType: 'track' },
    { title: 'Vlad the Impaler',    image: 'Vlad_the_Impaler.png',     spotifyId: '5JxNGZgWCrFQpbqHKsSrmO', spotifyType: 'track' },
    { title: 'Thieves',             image: 'Thieves.png',              spotifyId: '7ptxDTjnaO9HJOGS1zw1cT', spotifyType: 'track' },
    { title: 'Spring Heeled Jack',  image: 'Spring_Heeled_Jack.png',   spotifyId: '48oKVzUmUTFUsWJDGuLY1K', spotifyType: 'track' },
    { title: 'Feel My Pulse',       image: 'Feel_My_Pulse.png',        spotifyId: '2oT3NnlsOo9D0XenctLy4z', spotifyType: 'track' },
    { title: 'Whiskey No Mas',      image: 'Whiskey_No_Mas.png',       spotifyId: '57kloICQ0vYKKc8aoUh0fS', spotifyType: 'track' },
    { title: 'Cemetery Trees',      image: 'Cemetery_Trees.png',       spotifyId: '40AmfpD5hbu9xrWSGUmszN', spotifyType: 'track' },
    { title: 'Suicidal Sex Machine',image: 'Suicidal_Sex_Machine.png', spotifyId: '26S0MQbvyVQ61YV7cZGIIF', spotifyType: 'track' },
    { title: 'Meth & Smokes',       image: 'Meth&Smokes.png',          spotifyId: '5WHqFnlbMyIRTnqD4lQar3', spotifyType: 'track' },
    { title: "Let's Go",            image: 'Lets_Go.png',              spotifyId: '10Ggw0zy0XbRylQyIIldBO', spotifyType: 'track' },
    { title: 'Out of the Blue',     image: 'Out_of_the_Blue.png',      spotifyId: '3biINpeTJIvOxKjf9bRWXY', spotifyType: 'track' },
    { title: 'Rooster',             image: 'Rooster.png',              spotifyId: '0ATfCRacmJ8ouWMwg0IdWZ', spotifyType: 'track' },
    { title: 'El Diablo',           image: 'El_Diablo.png',            spotifyId: '0I5FZO4D2Pt0H3MkE69vtg', spotifyType: 'track' },
    { title: 'Perdition',           image: null,                       spotifyId: '72LXr3H2zOt3VqldWxPMpJ', spotifyType: 'track' },
    { title: 'Bible and a Gun',     image: null,                       spotifyId: '3IFY4RbvBhvZYHn91oql5f', spotifyType: 'track' },
  ];

  const socials = [
    { label: 'Instagram', href: 'https://www.instagram.com/saturn71band/' },
    { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61554416052109' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@saturn71band' },
    { label: 'YouTube', href: 'https://www.youtube.com/channel/UClkEZalNE_UopDwfTSLHy6Q' },
  ];

  const streaming = [
    { label: 'Spotify', href: 'https://open.spotify.com/artist/2BImKtcZBK8JWaaJ9pmHcv' },
    { label: 'Apple Music', href: '#' },
    { label: 'iTunes', href: '#' },
    { label: 'Amazon Music', href: '#' },
  ];

  const [activeIndex, setActiveIndex] = React.useState(1);

  const prev = () => setActiveIndex((value) => (value - 1 + singles.length) % singles.length);
  const next = () => setActiveIndex((value) => (value + 1) % singles.length);

  const visibleCards = React.useMemo(() => {
    return [-2, -1, 0, 1, 2].map((offset) => {
      const index = (activeIndex + offset + singles.length) % singles.length;
      return {
        ...singles[index],
        offset,
        index,
      };
    });
  }, [activeIndex]);

  const currentSingle = singles[activeIndex];

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand">
            <div className="brand-mark">
              <img src="/Untitled-1.jpg" alt="Saturn 71 logo" />
            </div>
            <div className="brand-name display-font">Saturn 71</div>
          </div>

          <nav className="nav display-font" aria-label="Primary navigation">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#music">Music</a>
            <a href="#videos">Videos</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="page">
        <section className="hero" id="home">
          <div className="hero-grid">
            <div className="hero-main">
              <div className="hero-copy">
                <div className="eyebrow display-font">Gritty · Genre-blending · Rock</div>
                <h1 className="display-font">Saturn 71</h1>
                <p>
                  We&apos;re Saturn 71 — a couple of musicians who write, produce, and mix an
                  eclectic mix of musical styles. No rules, no templates.
                </p>
                <div className="hero-actions">
                  <a className="button primary display-font" href="#music">Listen</a>
                  <a className="button display-font" href="#videos">Watch</a>
                  <a className="button display-font" href="#contact">Follow</a>
                </div>
              </div>

              <div className="hero-meta">
                <div className="hero-chip">16 singles and growing</div>
                <div className="hero-chip">Spotify &amp; Apple Music</div>
                <div className="hero-chip">New music constantly</div>
              </div>
            </div>

            <aside className="hero-side">
              <div className="hero-logo">
                <img src="/Untitled-1.jpg" alt="Saturn 71" />
              </div>
              <p>
                Genre-blending rock from two musicians who write, produce, and mix everything
                themselves. From gritty riffs to cinematic grooves.
              </p>
            </aside>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-header">
            <div>
              <div className="section-kicker display-font">About</div>
              <h2 className="display-font">Eclectic songs. One band.</h2>
            </div>
          </div>
          <div className="panel">
            <p className="meta">
              Saturn 71 is built around writing, producing, and mixing songs that cut across
              styles instead of sticking to one template. Every single is its own world — from
              hard rock to dark folk, from groove-heavy riffs to cinematic atmosphere. The records
              are the focus. The artwork tells the story.
            </p>
          </div>
        </section>

        <section className="section" id="music">
          <div className="section-header">
            <div>
              <div className="section-kicker display-font">Latest single</div>
              <h2 className="display-font">Featured release</h2>
            </div>
          </div>

          <div className="feature-grid">
            <article className="feature-card">
              <div className="feature-layout">
                <div className="feature-art">
                  <img src="/Bad_Road.png" alt="Bad Road single artwork" />
                </div>
                <div style={{ display: 'grid', gap: 14 }}>
                  <h3 className="feature-title display-font">Bad Road</h3>
                  <iframe
                    src="https://open.spotify.com/embed/track/55rLZYNvYFmDSR0Nc7jQ4E?utm_source=generator&theme=0&autoplay=0"
                    width="100%"
                    height="80"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    style={{ borderRadius: 6, border: 'none', display: 'block' }}
                    title="Bad Road on Spotify"
                  />
                  <div className="hero-actions">
                    <a className="button display-font" href="#contact">Follow Saturn 71</a>
                  </div>
                </div>
              </div>
            </article>

            <aside className="panel">
              <h3 className="display-font" style={{ margin: 0, fontSize: '1.15rem' }}>
                Streaming platforms
              </h3>
              <div className="platform-list">
                {streaming.map((item) => (
                  <a
                    key={item.label}
                    className="link-row"
                    href={item.href}
                    target={item.href !== '#' ? '_blank' : undefined}
                    rel={item.href !== '#' ? 'noreferrer' : undefined}
                  >
                    <strong>{item.label}</strong>
                    <span>{item.href !== '#' ? 'Listen →' : 'Coming soon'}</span>
                  </a>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <div>
              <div className="section-kicker display-font">Singles</div>
              <h2 className="display-font">Discography</h2>
            </div>
          </div>

          <div className="carousel-shell">
            <div className="carousel-stage">
              {visibleCards.map((single) => (
                <div
                  key={`${single.title}-${single.offset}`}
                  className={`carousel-card ${single.image ? '' : 'placeholder'}`}
                  data-offset={single.offset}
                >
                  {single.image ? (
                    <img src={`/${single.image}`} alt={`${single.title} artwork`} />
                  ) : (
                    <div>Artwork pending<br />{single.title}</div>
                  )}
                </div>
              ))}
            </div>

            <div className="carousel-controls" aria-hidden="true">
              <button className="control-button left" onClick={prev} aria-label="Previous single">←</button>
              <button className="control-button right" onClick={next} aria-label="Next single">→</button>
            </div>

            <div className="carousel-caption">
              <h3 className="display-font">{currentSingle.title}</h3>
              <iframe
                key={currentSingle.spotifyId}
                src={`https://open.spotify.com/embed/${currentSingle.spotifyType}/${currentSingle.spotifyId}?utm_source=generator&theme=0`}
                width="100%"
                height="80"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                style={{ borderRadius: 6, border: 'none', display: 'block' }}
                title={`${currentSingle.title} on Spotify`}
              />
              <div className="carousel-actions">
                <a
                  className="button primary display-font"
                  href={`https://open.spotify.com/track/${currentSingle.spotifyId}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in Spotify
                </a>
              </div>
              <div className="carousel-dots" aria-label="Carousel navigation">
                {singles.map((single, index) => (
                  <button
                    key={single.title}
                    className={`dot ${index === activeIndex ? 'active' : ''}`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show ${single.title}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="videos">
          <div className="section-header">
            <div>
              <div className="section-kicker display-font">Videos</div>
              <h2 className="display-font">Watch</h2>
            </div>
          </div>
          <div className="video-grid">
            <article className="video-card">
              <div className="video-frame">
                <div>
                  <p style={{ margin: '0 0 12px', fontSize: '1rem' }}>Video coming soon</p>
                  <a
                    className="button display-font"
                    href="https://www.youtube.com/channel/UClkEZalNE_UopDwfTSLHy6Q"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Subscribe on YouTube
                  </a>
                </div>
              </div>
            </article>

            <aside className="panel">
              <h3 className="display-font" style={{ margin: 0, fontSize: '1.15rem' }}>
                Follow along
              </h3>
              <p className="meta">
                Music videos, shorts, and behind-the-scenes content on our YouTube channel.
                Subscribe so you don&apos;t miss a drop.
              </p>
              <div className="social-list">
                {socials.map((item) => (
                  <a
                    key={item.label}
                    className="link-row"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <strong>{item.label}</strong>
                    <span>Follow →</span>
                  </a>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="section-header">
            <div>
              <div className="section-kicker display-font">Contact</div>
              <h2 className="display-font">Get in touch</h2>
            </div>
          </div>
          <div className="contact-grid">
            <article className="contact-card">
              <h3 className="display-font" style={{ margin: 0, fontSize: '1.1rem' }}>Email</h3>
              <a
                className="link-row"
                href="mailto:jedikooter@gmail.com"
              >
                <strong>Send a message</strong>
                <span>jedikooter@gmail.com</span>
              </a>
            </article>

            <article className="contact-card">
              <h3 className="display-font" style={{ margin: 0, fontSize: '1.1rem' }}>Socials</h3>
              <div className="social-list">
                {socials.map((item) => (
                  <a
                    key={item.label}
                    className="link-row"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <strong>{item.label}</strong>
                    <span>Follow →</span>
                  </a>
                ))}
              </div>
            </article>
          </div>
        </section>

        <footer className="footer">
          &copy; {new Date().getFullYear()} Saturn 71. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
