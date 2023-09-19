import "../skills/skills.css";
import ResponsiveImg from "../../assets/responsive.svg";

const skills = () => {
  const COLORS = [
    "#bbf7d0",
    "#99f6e4",
    "#bfdbfe",
    "#ddd6fe",
    "#f5d0fe",
    "#fed7aa",
    "#fee2e2",
  ];
  const TAGS = [
    "HTML",
    "CSS",
    "JavaScript",
    "SQL",
    "Node.js",
    "React",
    "GIT",
    "SEO",
    "WordPress",
    "WIX",
    "Logo",
    "MongoDB",
    "Boostrap",
  ];
  const DURATION = 15000;
  const ROWS = 5;
  const TAGS_PER_ROW = 5;

  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

  const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
    return (
      <div
        className="loop-slider"
        style={{
          "--duration": `${duration}ms`,
          "--direction": reverse ? "reverse" : "normal",
        }}
      >
        <div className="inner">
          {children}
          {children}
        </div>
      </div>
    );
  };

  const Tag = ({ text }) => (
    <div className="tag">
      <span>#</span> {text}
    </div>
  );
  return (
    <div className="skills_app">
      <div className="skills_container">
        <header>
          <h1>- SKILLS -</h1>
          <p>languages and tools that I use most often since my beginnings</p>
        </header>
        <div className="tag-list">
          {[...new Array(ROWS)].map((_, i) => (
            <InfiniteLoopSlider
              key={i}
              duration={random(DURATION - 5000, DURATION + 5000)}
              reverse={i % 2}
            >
              {shuffle(TAGS)
                .slice(0, TAGS_PER_ROW)
                .map((tag) => (
                  <Tag text={tag} key={tag} />
                ))}
            </InfiniteLoopSlider>
          ))}
          <div className="fade" />
        </div>
      </div>
      <div className="responsive_container">
        <h3>Responsive</h3>
        <p>
          🔸I am able to adapt a site for each screen size, which includes the
          desktop format (classic site), the tablet format as well as the mobile
          format, which is in high demand thanks to the preponderance of the use
          of smartphones🔸
        </p>
        <img className="resp_img" src={ResponsiveImg} alt="" />
      </div>
    </div>
  );
};

export default skills;
