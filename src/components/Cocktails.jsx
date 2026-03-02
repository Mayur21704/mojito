import { useGSAP } from "@gsap/react";
import { cocktailLists, mockTailLists } from "../../constants";
import gsap from "gsap";

const Cocktails = () => {
  useGSAP(() => {
    const parallaxTimeline = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#cocktails",
          start: "top 30%",
          end: "bottom 80%",
          scrub: true,
        },
      })
      .from("#c-left-leaf", {
        x: -100,
        y: 100,
      })
      .from("#c-right-leaf", {
        x: 100,
        y: -100,
      })
  });
  return (
    <div id="cocktails" className="noisy">
      <img
        src="./images/cocktail-left-leaf.png"
        alt="left-leaf"
        id="c-left-leaf"
      />
      <img
        src="./images/cocktail-right-leaf.png"
        alt="right-leaf"
        id="c-right-leaf"
      />

      <div className="list">
        <div className="popular">
          <h2>Most Popular Cocktails</h2>

          <ul>
            {cocktailLists.map((cocktail) => (
              <li key={cocktail.name}>
                <div className="md:me-28">
                  <h3>{cocktail.name}</h3>
                  <p>
                    {cocktail.country}| {cocktail.detail}
                  </p>
                  <span>- {cocktail.price}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="loved">
          <h2>Most Loved Mocktails</h2>

          <ul>
            {mockTailLists.map((cocktail) => (
              <li key={cocktail.name}>
                <div className="me-28">
                  <h3>{cocktail.name}</h3>
                  <p>
                    {cocktail.country}| {cocktail.detail}
                  </p>
                  <span>- {cocktail.price}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cocktails;
