const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Thomas Miller, home">
          TM<span>.</span>
        </a>
        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#now">Now</a>
          <a href="#connect">Connect</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="eyebrow">
          <span className="pulse" />
          Exploring what&apos;s next
        </div>
        <h1>
          Curious by nature.
          <br />
          <em>Building with intention.</em>
        </h1>
        <p className="heroCopy">
          I&apos;m Thomas Miller. My focus is building trusted data foundations
          and finding practical uses for AI that simplify workflows, eliminate
          tedious tasks, and make reliable information easier to use.
        </p>
        <div className="heroActions">
          <a
            className="button primary"
            href="https://github.com/mille880"
            target="_blank"
            rel="noreferrer"
          >
            Follow the build <Arrow />
          </a>
          <a className="button textButton" href="#about">
            A little about me <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="frame frameOne" aria-hidden="true" />
        <div className="frame frameTwo" aria-hidden="true" />
        <div className="timeline" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>

      <section className="about section" id="about">
        <div className="sectionLabel">01 / About</div>
        <div className="aboutGrid">
          <h2>A creative thread, picked back up.</h2>
          <div className="bodyCopy">
            <p>
              Long before AI entered the picture, video editing was one of the
              first creative tools that truly clicked for me. I studied it
              twice in high school—not because I had to, but because I wanted
              more time with it.
            </p>
            <p>
              Now I&apos;m opening that door again. This site is a place to
              learn in public, share what I discover, and connect the dots
              between professional growth, emerging technology, and creative
              expression.
            </p>
          </div>
        </div>
      </section>

      <section className="now section" id="now">
        <div className="sectionLabel">02 / Now & next</div>
        <h2 className="sectionTitle">The work in progress is the point.</h2>
        <div className="cards">
          <article className="card featured">
            <div className="cardMeta">
              <span>Now building</span>
              <span>01</span>
            </div>
            <h3>This personal website</h3>
            <p>
              My first public coding project—and the home base for everything
              that follows.
            </p>
            <a
              href="https://github.com/mille880"
              target="_blank"
              rel="noreferrer"
              aria-label="View Thomas Miller's GitHub profile"
            >
              View on GitHub <Arrow />
            </a>
          </article>
          <article className="card">
            <div className="cardMeta">
              <span>Exploring</span>
              <span>02</span>
            </div>
            <h3>Practical AI</h3>
            <p>
              Finding thoughtful ways to use AI for real work, everyday
              creativity, and better learning.
            </p>
            <span className="comingSoon">Use cases coming soon</span>
          </article>
          <article className="card">
            <div className="cardMeta">
              <span>Revisiting</span>
              <span>03</span>
            </div>
            <h3>Video storytelling</h3>
            <p>
              Returning to the craft that started it all—with a decade of new
              perspective and entirely new tools.
            </p>
            <span className="comingSoon">Channel in planning</span>
          </article>
        </div>
      </section>

      <section className="connect section" id="connect">
        <div className="sectionLabel">03 / Connect</div>
        <div className="connectGrid">
          <div>
            <h2>Let&apos;s see where curiosity leads.</h2>
            <p>
              This is only the first version. The links—and the work behind
              them—will grow from here.
            </p>
          </div>
          <div className="linkList">
            <a
              href="https://github.com/mille880"
              target="_blank"
              rel="noreferrer"
            >
              <span>GitHub</span>
              <small>Building in public</small>
              <Arrow />
            </a>
            <a
              href="https://www.linkedin.com/in/thomasmiller6/"
              target="_blank"
              rel="noreferrer"
            >
              <span>LinkedIn</span>
              <small>Professional profile</small>
              <Arrow />
            </a>
            <div className="futureLink">
              <span>YouTube</span>
              <small>Channel in planning</small>
              <span aria-hidden="true">—</span>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} Thomas Miller</span>
        <span>Designed to evolve.</span>
      </footer>
    </main>
  );
}
