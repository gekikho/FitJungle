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
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap');
      </style>
      <header className="App-header">
        <h2 id="Logo">FitJungle</h2>
        <nav className="menu1">
          <ul>
            <li>
              <a href=".">Programme generator</a>
            </li>
            <li>
              <a href=".">Menu generator</a>
            </li>
            <li>
              <a href=".">PR generator</a>
            </li>
            <li>
              <a href=".">Find your Gymbro</a>
            </li>
          </ul>
        </nav>
      </header>
      {Page === "home" ? (
        <div id="home">
          <h2 id="titre">
            « The app you need when you want <br></br>to be STRONG »
          </h2>
          <h3>
            lakaka tintinri j zegu a iaOQSN JZOJVHIOZVCO CHKIZ <br></br> zec izc
            jcajoozjbzrugbo v zebé
          </h3>
          <button id="start" onClick={() => setPage("programme")}>
            START
          </button>
          <div></div>
        </div>
      ) : null}
      {Page === "programme" ? (
        <>
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
              </div>

              <button class="next" onClick={() => setProgramme(1)}>
                Next
              </button>
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
              </div>
              <button class="next" onClick={() => setProgramme(2)}>
                Next
              </button>
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
              </div>
              <button className="next" onClick={() => setProgramme(3)}>
                Next
              </button>
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
              </div>
              <button className="next" onClick={() => setProgramme(4)}>
                Next
              </button>
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
              </div>
              <button className="next" onClick={() => setProgramme(5)}>
                Next
              </button>
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
              </div>
              <button className="next" onClick={() => setProgramme(6)}>
                Next
              </button>
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
              </div>
              <button className="next" onClick={() => setProgramme(7)}>
                Next
              </button>
            </div>
          ) : null}

          {programme === 7 ? (
            <div className="block">
              <div className="quizz2">
                <p id="question">THIS IS YOUR PROGRAMME !!!!</p>

                {plan.style === "full-body" && (
                  <>
                    <p id="prog">
                      <h4>Day 1 :</h4> <br /> <br /> <h5>Chest :</h5>{" "}
                      {plan.chest.join(", ")} <br /> <br /> <h5>Back:</h5>{" "}
                      {plan.back.join(", ")} <br /> <br /> <h5>Shoulders:</h5>{" "}
                      {plan.shoulders.join(", ")} <br /> <br /> <h5>Biceps:</h5>{" "}
                      {plan.biceps.join(", ")} <br /> <br /> <h5>Triceps:</h5>{" "}
                      {plan.triceps.join(", ")} <br /> <br /> <h5>Legs:</h5>{" "}
                      {plan.quadriceps.join(", ")} {plan.hamstring.join(", ")}
                      <br /> <br /> <br />
                      <h4>Day 2 :</h4> <br /> <br /> <h5>Chest :</h5>{" "}
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
                      <h4>Day 1 :</h4> <br /> <br /> <h5>Chest :</h5>{" "}
                      {plan.chest.join(", ")} <br /> <br /> <h5>Shoulders:</h5>{" "}
                      {plan.shoulders.join(", ")} <br /> <br />{" "}
                      <h5>Triceps:</h5> {plan.triceps.join(", ")} <br /> <br />
                      <h4>Day 2 :</h4> <br /> <br /> <h5>Back:</h5>{" "}
                      {plan.back.join(", ")} <br /> <br /> <h5>Biceps:</h5>{" "}
                      {plan.biceps.join(", ")} <br /> <br />
                      <h4>Day 3 :</h4> <br />
                      <br /> <h5>Legs:</h5> {plan.quadriceps.join(", ")}{" "}
                      {plan.hamstring.join(", ")}
                      <br />{" "}
                    </p>
                  </>
                )}

                {plan.style === "upper-lower" && (
                  <>
                    <p id="prog">
                      <h4>Day 1 :</h4> <br /> <br /> <h5>Chest :</h5>{" "}
                      {plan.chest.join(", ")} <br /> <br /> <h5>Shoulders:</h5>{" "}
                      {plan.shoulders.join(", ")} <br /> <br /> <h5>back:</h5>{" "}
                      {plan.back.join(", ")} <br /> <br />
                      <h4>Day 2 :</h4> <br />
                      <br /> <h5>Legs:</h5> {plan.quadriceps.join(", ")}{" "}
                      {plan.hamstring.join(", ")} <br />
                      <h4>Day 3 :</h4> <br /> <br /> <br /> <br />{" "}
                      <h5>Chest :</h5> {plan.chest.join(", ")} <br /> <br />{" "}
                      <h5>Shoulders:</h5> {plan.shoulders.join(", ")} <br />{" "}
                      <br /> <h5>back:</h5> {plan.back.join(", ")} <br /> <br />
                      <h4>Day 4 :</h4> <br />
                      <br /> <h5>Legs:</h5> {plan.quadriceps.join(", ")}{" "}
                      {plan.hamstring.join(", ")} <br />{" "}
                    </p>
                  </>
                )}

                {plan.style === "split" && (
                  <>
                    <p id="prog">
                      <h4>Day 1 :</h4> <br /> <br /> <h5>Chest :</h5>{" "}
                      {plan.chest.join(", ")} <br /> <br /> <h5>back:</h5>{" "}
                      {plan.back.join(", ")} <br /> <br />
                      <h4>Day 2 :</h4> <br /> <br /> <h5>Shoulders:</h5>{" "}
                      {plan.shoulders.join(", ")} <br /> <br /> <h5>Biceps:</h5>{" "}
                      {plan.biceps.join(", ")} <br /> <br />
                      <h5>Triceps:</h5> {plan.triceps.join(", ")} <br /> <br />
                      <h4>Day 3 :</h4> <br />
                      <br /> <h5>Legs:</h5> {plan.quadriceps.join(", ")}{" "}
                      {plan.hamstring.join(", ")} <br /> <br />
                      <h4>Day 4 :</h4> <br /> <br /> <h5>Chest :</h5>{" "}
                      {plan.chest.join(", ")} <br /> <br /> <h5>Shoulders:</h5>{" "}
                      {plan.shoulders.join(", ")} <br /> <br /> <h5>back:</h5>{" "}
                      {plan.back.join(", ")} <br /> <br />
                      <h4>Day 5 :</h4> <br />
                      <br /> <h5>Legs:</h5> {plan.quadriceps.join(", ")}{" "}
                      {plan.hamstring.join(", ")} <br />{" "}
                    </p>
                  </>
                )}

                {plan.style === "ppl+" && (
                  <>
                    <p id="prog">
                      <h4>Day 1 :</h4> <br /> <br /> <h5>Chest :</h5>{" "}
                      {plan.chest.join(", ")} <br /> <br /> <h5>Shoulders:</h5>{" "}
                      {plan.shoulders.join(", ")} <br /> <br />{" "}
                      <h5>Triceps:</h5> {plan.triceps.join(", ")} <br /> <br />
                      <h4>Day 2 :</h4> <br /> <br /> <h5>Back:</h5>{" "}
                      {plan.back.join(", ")} <br /> <br /> <h5>Biceps:</h5>{" "}
                      {plan.biceps.join(", ")} <br /> <br />
                      <h4>Day 3 :</h4> <br />
                      <br /> <h5>Legs:</h5> {plan.quadriceps.join(", ")}{" "}
                      {plan.hamstring.join(", ")}
                      <br />
                      <h4>Day 4 :</h4> <br /> <br /> <h5>Chest :</h5>{" "}
                      {plan.chest.join(", ")} <br /> <br /> <h5>Shoulders:</h5>{" "}
                      {plan.shoulders.join(", ")} <br /> <br />{" "}
                      <h5>Triceps:</h5> {plan.triceps.join(", ")} <br /> <br />
                      <h4>Day 5 :</h4> <br /> <br /> <h5>Back:</h5>{" "}
                      {plan.back.join(", ")} <br /> <br /> <h5>Biceps:</h5>{" "}
                      {plan.biceps.join(", ")} <br /> <br />
                      <h4>Day 6 :</h4> <br />
                      <br /> <h5>Legs:</h5> {plan.quadriceps.join(", ")}{" "}
                      {plan.hamstring.join(", ")}
                      <br />{" "}
                    </p>
                  </>
                )}
              </div>
            </div>
          ) : null}
        </>
      ) : null}
    </>
  );
}

export default Script;
