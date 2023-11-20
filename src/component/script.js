import { useState } from "react";
import background from "./images/background.mp4";
import exo from "../data/exo.json";

function Script() {
  const [Page, setPage] = useState("home");
  const [programme, setProgramme] = useState(0);

  const [plan, setPlan] = useState({
    style: " ",
    goal: "",
    chest: [],
    back: [],
    shoulders: [],
    biceps: [],
    triceps: [],
    quadriceps: [],
    hamstring: [],
  });

  {
    console.log(plan);
  }

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap"
        rel="stylesheet"
      ></link>
      <header className="App-header">
        <a href="#" onClick={() => setPage("home")}>
          <h2 id="Logo">FitJungle</h2>{" "}
        </a>
        <nav className="menu1">
          <ul>
            <li>
              <a href="#prog" onClick={() => setPage("programme")}>
                Programme generator
              </a>
            </li>
            <li>
              <a href="#">Menu generator</a>
            </li>
            <li>
              <a href="#">PR generator</a>
            </li>
            <li>
              <a href="#">Find your Gymbro</a>
            </li>
          </ul>
        </nav>
      </header>
      {Page === "home" ? (
        <div id="home">
          <h2 id="titre">
            « The app you need when you want <br></br>to be STRONG »
          </h2>
          <div id="para">
            <h3>
              Create in few clicks, the best program based on your body{" "}
              <br></br> Get started
            </h3>
          </div>
          <button id="start" onClick={() => setPage("programme")}>
            START
          </button>
          <div>
            <p id="certifications">
              Our gym plans are verified by 3 professionals coach <br></br>
              and we are certified by basic-fit, fitness park, david laid, tibo
              inshape, cbum and many others
            </p>

            <section id="qui-sommes-nous">
              <div>
                <img id="nous" src="./images/zoro.png" alt=""></img>
              </div>

              <div>
                <img id="nous" src="./images/zoro.png" alt=""></img>
              </div>
            </section>
          </div>
        </div>
      ) : null}
      {Page === "programme" ? (
        <div>
          {programme === 0 ? (
            <div className="block">
              <div className="quizz">
                <p id="question">
                  How many times a week are you ready to train?{" "}
                </p>
                <form>
                  <button
                    id="reponse"
                    type="button"
                    onClick={() =>
                      setPlan((prevPlan) => ({
                        ...prevPlan,
                        style: "full-body",
                      }))
                    }
                  >
                    2 times
                  </button>
                  <button
                    id="reponse"
                    type="button"
                    onClick={() =>
                      setPlan((prevPlan) => ({ ...prevPlan, style: "ppl" }))
                    }
                  >
                    3 times
                  </button>
                  <button
                    id="reponse"
                    type="button"
                    onClick={() =>
                      setPlan((prevPlan) => ({
                        ...prevPlan,
                        style: "upper-lower",
                      }))
                    }
                  >
                    4 times
                  </button>
                  <button
                    id="reponse"
                    type="button"
                    onClick={() =>
                      setPlan((prevPlan) => ({ ...prevPlan, style: "split" }))
                    }
                  >
                    5 times
                  </button>
                  <button
                    id="reponse"
                    type="button"
                    onClick={() =>
                      setPlan((prevPlan) => ({ ...prevPlan, style: "ppl+" }))
                    }
                  >
                    6 times
                  </button>
                </form>
                <p>I advise you to train 3-4-5 per week</p>
                <button class="next" onClick={() => setProgramme(1)}>
                  Next
                </button>
              </div>
            </div>
          ) : null}
          {programme === 1 ? (
            <div className="block">
              <div className="quizz">
                <p id="question">What is your objective </p>
                <form>
                  <button
                    id="reponse"
                    type="button"
                    onClick={() =>
                      setPlan((prevPlan) => ({ ...prevPlan, goal: "muscle" }))
                    }
                  >
                    Gain muscle
                  </button>
                  <button
                    id="reponse"
                    type="button"
                    onClick={() =>
                      setPlan((prevPlan) => ({ ...prevPlan, goal: "strength" }))
                    }
                  >
                    Gain strength
                  </button>
                  <button
                    id="reponse"
                    type="button"
                    onClick={() =>
                      setPlan((prevPlan) => ({ ...prevPlan, goal: "weight" }))
                    }
                  >
                    Losing weight
                  </button>
                  <button
                    id="reponse"
                    type="button"
                    onClick={() =>
                      setPlan((prevPlan) => ({
                        ...prevPlan,
                        goal: "endurance",
                      }))
                    }
                  >
                    Gain endurance
                  </button>
                </form>
                <button class="next" onClick={() => setProgramme(2)}>
                  Next
                </button>
              </div>
            </div>
          ) : null}

          {programme === 2 ? (
            <div className="block">
              <div className="quizz">
                <p id="question">Do you have :</p>
                <form>
                  <button
                    id="reponse"
                    type="button"
                    onClick={() =>
                      setPlan((prevPlan) => ({
                        ...prevPlan,
                        chest: [...prevPlan.chest, exo[0].long_arms],
                        back: [...prevPlan.back, exo[1].long_arms],
                        shoulders: [...prevPlan.shoulders, exo[2].long_arms],
                        biceps: [...prevPlan.biceps, exo[3].long_arms],
                        triceps: [...prevPlan.triceps, exo[4].long_arms],
                      }))
                    }
                  >
                    Long arms
                  </button>

                  <button
                    id="reponse"
                    type="button"
                    onClick={() =>
                      setPlan((prevPlan) => ({
                        ...prevPlan,
                        chest: [...prevPlan.chest, exo[0].short_arms],
                        back: [...prevPlan.back, exo[1].short_arms],
                        shoulders: [...prevPlan.shoulders, exo[2].short_arms],
                        biceps: [...prevPlan.biceps, exo[3].short_arms],
                        triceps: [...prevPlan.triceps, exo[4].short_arms],
                      }))
                    }
                  >
                    Short arms
                  </button>
                </form>
                <button className="next" onClick={() => setProgramme(3)}>
                  Next
                </button>
              </div>
            </div>
          ) : null}
          {programme === 3 ? (
            <div className="block">
              <div className="quizz">
                <p id="question">Do you have wide ribs ?</p>
                <form>
                  <button
                    id="reponse"
                    type="button"
                    onClick={() =>
                      setPlan((prevPlan) => ({
                        ...prevPlan,
                        chest: [...prevPlan.chest, exo[0].wide_ribs],
                        back: [...prevPlan.back, exo[1].wide_ribs],
                        shoulders: [...prevPlan.shoulders, exo[2].wide_ribs],
                        biceps: [...prevPlan.biceps, exo[3].wide_ribs],
                        triceps: [...prevPlan.triceps, exo[4].wide_ribs],
                      }))
                    }
                  >
                    Yes
                  </button>

                  <button
                    id="reponse"
                    type="button"
                    onClick={() =>
                      setPlan((prevPlan) => ({
                        ...prevPlan,
                        chest: [...prevPlan.chest, ""],
                      }))
                    }
                  >
                    No
                  </button>
                </form>
                <button className="next" onClick={() => setProgramme(4)}>
                  Next
                </button>
              </div>
            </div>
          ) : null}
          {programme === 4 ? (
            <div className="block">
              <div className="quizz">
                <p id="question">Do you have slim waist ?</p>
                <form>
                  <button
                    id="reponse"
                    type="button"
                    onClick={() =>
                      setPlan((prevPlan) => ({
                        ...prevPlan,
                        chest: [...prevPlan.chest, exo[0].slim_waist],
                        back: [...prevPlan.back, exo[1].slim_waist],
                        shoulders: [...prevPlan.shoulders, exo[2].slim_waist],
                        biceps: [...prevPlan.biceps, exo[3].slim_waist],
                        triceps: [...prevPlan.triceps, exo[4].slim_waist],
                        quadriceps: [
                          ...prevPlan.quadriceps,
                          exo[5].broad_clavicles,
                        ],
                        hamstring: [
                          ...prevPlan.hamstring,
                          exo[6].broad_clavicles,
                        ],
                      }))
                    }
                  >
                    Yes
                  </button>

                  <button
                    id="reponse"
                    type="button"
                    onClick={() =>
                      setPlan((prevPlan) => ({
                        ...prevPlan,
                        chest: [...prevPlan.chest, ""],
                      }))
                    }
                  >
                    No
                  </button>
                </form>
                <button className="next" onClick={() => setProgramme(5)}>
                  Next
                </button>
              </div>
            </div>
          ) : null}
          {programme === 5 ? (
            <div className="block">
              <div className="quizz">
                <p id="question">Do you have broad clavicles ?</p>
                <form>
                  <button
                    id="reponse"
                    type="button"
                    onClick={() =>
                      setPlan((prevPlan) => ({
                        ...prevPlan,
                        chest: [...prevPlan.chest, exo[0].broad_clavicles],
                        back: [...prevPlan.back, exo[1].broad_clavicles],
                        shoulders: [...prevPlan.back, exo[2].broad_clavicles],
                        biceps: [...prevPlan.biceps, exo[3].broad_clavicles],
                        triceps: [...prevPlan.triceps, exo[4].broad_clavicles],
                      }))
                    }
                  >
                    Yes
                  </button>

                  <button
                    id="reponse"
                    type="button"
                    onClick={() =>
                      setPlan((prevPlan) => ({
                        ...prevPlan,
                        chest: [...prevPlan.chest, ""],
                      }))
                    }
                  >
                    No
                  </button>
                </form>
                <button className="next" onClick={() => setProgramme(6)}>
                  Next
                </button>
              </div>
            </div>
          ) : null}

          {programme === 6 ? (
            <div className="block">
              <div className="quizz">
                <p id="question">Do you have wide femur ?</p>
                <form>
                  <button
                    id="reponse"
                    type="button"
                    onClick={() =>
                      setPlan((prevPlan) => ({
                        ...prevPlan,
                        chest: [...prevPlan.chest, exo[0].wide_femurs],
                        back: [...prevPlan.back, exo[1].wide_femurs],
                        shoulders: [...prevPlan.back, exo[2].wide_femurs],
                        quadriceps: [
                          ...prevPlan.quadriceps,
                          exo[5].wide_femurs,
                        ],
                        hamstring: [...prevPlan.hamstring, exo[6].wide_femurs],
                      }))
                    }
                  >
                    Yes
                  </button>

                  <button
                    id="reponse"
                    type="button"
                    onClick={() =>
                      setPlan((prevPlan) => ({
                        ...prevPlan,
                        chest: [...prevPlan.chest, ""],
                      }))
                    }
                  >
                    No
                  </button>
                </form>
                <button className="next" onClick={() => setProgramme(7)}>
                  Next
                </button>
              </div>
            </div>
          ) : null}

          {programme === 7 ? (
            <div className="block">
              <div className="quizz2">
                <p id="question">THIS IS YOUR PROGRAMME !!!!</p>

                {plan.style === "full-body" && (
                  <>
                    <p id="prog">
                      <h3 id="day">Day 1 :</h3> <br /> <br /> <h5>Chest :</h5>{" "}
                      {plan.chest.join(", ")} <br /> <br /> <h5>Back:</h5>{" "}
                      {plan.back.join(", ")} <br /> <br /> <h5>Shoulders:</h5>{" "}
                      {plan.shoulders.join(", ")} <br /> <br /> <h5>Biceps:</h5>{" "}
                      {plan.biceps.join(", ")} <br /> <br /> <h5>Triceps:</h5>{" "}
                      {plan.triceps.join(", ")} <br /> <br /> <h5>Legs:</h5>{" "}
                      {plan.quadriceps.join(", ")} {plan.hamstring.join(", ")}
                      <br /> <br /> <br />
                      <h3 id="day">Day 2 :</h3> <br /> <br /> <h5>Chest :</h5>{" "}
                      {plan.chest.join(", ")} <br /> <br /> <h5>Back:</h5>{" "}
                      {plan.back.join(", ")} <br /> <br /> <h5>Shoulders:</h5>{" "}
                      {plan.shoulders.join(", ")} <br /> <br /> <h5>Biceps:</h5>{" "}
                      {plan.biceps.join(", ")} <br /> <br /> <h5>Triceps:</h5>{" "}
                      {plan.triceps.join(", ")} <br /> <br /> <h5>Legs:</h5>{" "}
                      {plan.quadriceps.join(", ")} {plan.hamstring.join(", ")}{" "}
                    </p>
                  </>
                )}

                {plan.style === "ppl" && (
                  <>
                    <p id="prog">
                      <h3 id="day">Day 1 :</h3> <br /> <br /> <h5>Chest :</h5>{" "}
                      {plan.chest.join(", ")} <br /> <br /> <h5>Shoulders:</h5>{" "}
                      {plan.shoulders.join(", ")} <br /> <br />{" "}
                      <h5>Triceps:</h5> {plan.triceps.join(", ")} <br /> <br />
                      <h3 id="day">Day 2 :</h3> <br /> <br /> <h5>Back:</h5>{" "}
                      {plan.back.join(", ")} <br /> <br /> <h5>Biceps:</h5>{" "}
                      {plan.biceps.join(", ")} <br /> <br />
                      <h3 id="day">Day 3 :</h3> <br />
                      <br /> <h5>Legs:</h5> {plan.quadriceps.join(", ")}{" "}
                      {plan.hamstring.join(", ")}
                      <br />{" "}
                    </p>
                  </>
                )}

                {plan.style === "upper-lower" && (
                  <>
                    <p id="prog">
                      <h3 id="day">Day 1 :</h3> <h5>Chest :</h5>{" "}
                      {plan.chest.join(", ")} <br /> <h5>Shoulders:</h5>{" "}
                      {plan.shoulders.join(", ")} <h5>back:</h5>{" "}
                      {plan.back.join(", ")} <br />
                      <h3 id="day">Day 2 :</h3> <h5>Legs:</h5>{" "}
                      {plan.quadriceps.join(", ")} {plan.hamstring.join(", ")}{" "}
                      <br />
                      <h3 id="day">Day 3 :</h3> <h5>Chest :</h5>{" "}
                      {plan.chest.join(", ")} <br /> <h5>Shoulders:</h5>{" "}
                      {plan.shoulders.join(", ")} <h5>back:</h5>{" "}
                      {plan.back.join(", ")} <br />
                      <h3 id="day">Day 4 :</h3> <h5>Legs:</h5>{" "}
                      {plan.quadriceps.join(", ")}, {plan.hamstring.join(", ")}{" "}
                      <br />{" "}
                    </p>
                  </>
                )}

                {plan.style === "split" && (
                  <>
                    <p id="prog">
                      <h3 id="day">Day 1 :</h3> <h5>Chest :</h5>{" "}
                      {plan.chest.join(", ")} <br /> <br /> <h5>back:</h5>{" "}
                      {plan.back.join(", ")} <br /> <br />
                      <h3 id="day">Day 2 :</h3> <h5>Shoulders:</h5>{" "}
                      {plan.shoulders.join(", ")} <br /> <br /> <h5>Biceps:</h5>{" "}
                      {plan.biceps.join(", ")} <br /> <br />
                      <h5>Triceps:</h5> {plan.triceps.join(", ")} <br /> <br />
                      <h3 id="day">Day 3 :</h3> <h5>Legs:</h5>{" "}
                      {plan.quadriceps.join(", ")} {plan.hamstring.join(", ")}{" "}
                      <br /> <br />
                      <h3 id="day">Day 4 :</h3> <h5>Chest :</h5>{" "}
                      {plan.chest.join(", ")} <br /> <br /> <h5>Shoulders:</h5>{" "}
                      {plan.shoulders.join(", ")} <br /> <br /> <h5>back:</h5>{" "}
                      {plan.back.join(", ")} <br /> <br />
                      <h3 id="day">Day 5 :</h3> <h5>Legs:</h5>{" "}
                      {plan.quadriceps.join(", ")} {plan.hamstring.join(", ")}{" "}
                      <br />{" "}
                    </p>
                  </>
                )}

                {plan.style === "ppl+" && (
                  <>
                    <p id="prog">
                      <h3 id="day">Day 1 :</h3> <br /> <br /> <h5>Chest :</h5>{" "}
                      {plan.chest.join(", ")} <br /> <br /> <h5>Shoulders:</h5>{" "}
                      {plan.shoulders.join(", ")} <br /> <br />{" "}
                      <h5>Triceps:</h5> {plan.triceps.join(", ")} <br /> <br />
                      <h3 id="day">Day 2 :</h3> <br /> <br /> <h5>Back:</h5>{" "}
                      {plan.back.join(", ")} <br /> <br /> <h5>Biceps:</h5>{" "}
                      {plan.biceps.join(", ")} <br /> <br />
                      <h3 id="day">Day 3 :</h3> <br />
                      <br /> <h5>Legs:</h5> {plan.quadriceps.join(", ")}{" "}
                      {plan.hamstring.join(", ")}
                      <br />
                      <h3 id="day">Day 4 :</h3> <br /> <br /> <h5>Chest :</h5>{" "}
                      {plan.chest.join(", ")} <br /> <br /> <h5>Shoulders:</h5>{" "}
                      {plan.shoulders.join(", ")} <br /> <br />{" "}
                      <h5>Triceps:</h5> {plan.triceps.join(", ")} <br /> <br />
                      <h3 id="day">Day 5 :</h3> <br /> <br /> <h5>Back:</h5>{" "}
                      {plan.back.join(", ")} <br /> <br /> <h5>Biceps:</h5>{" "}
                      {plan.biceps.join(", ")} <br /> <br />
                      <h3 id="day">Day 6 :</h3> <br />
                      <br /> <h5>Legs:</h5> {plan.quadriceps.join(", ")}{" "}
                      {plan.hamstring.join(", ")}
                      <br />{" "}
                    </p>
                  </>
                )}
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  );
}

export default Script;
