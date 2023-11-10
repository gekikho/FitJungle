import { useState } from "react";
import background from "./images/background.mp4";
import exo from "../data/exo.json";

function Script() {
  const [Page, setPage] = useState("home");
  const [programme, setProgramme] = useState(0);

  const plan = {
    style: " ",
    goal: "",
    chest: [],
    back: [],
    shoulders: [],
    biceps: [],
    triceps: [],
    quadriceps: [],
    hamstring: [],
  };
  {
    console.log(plan);
  }

  return (
    <>
      <header className="App-header">
        <h2 id="Logo">FitJungle</h2>
        <nav className="menu1">
          <ul>
            <li>
              <a href="#">programme generaor</a>
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
                    onClick={() => (plan["style"] = "full-body")}
                  >
                    2 times
                  </button>
                  <button
                    id="reponse"
                    type="button"
                    onClick={() => (plan["style"] = "ppl")}
                  >
                    3 times
                  </button>
                  <button
                    id="reponse"
                    type="button"
                    onClick={() => (plan["style"] = "uper-lower")}
                  >
                    4 times
                  </button>
                  <button
                    id="reponse"
                    type="button"
                    onClick={() => (plan["style"] = "split")}
                  >
                    5 times
                  </button>
                  <button
                    id="reponse"
                    type="button"
                    onClick={() => (plan["style"] = "ppl+")}
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
                    onClick={() => (plan["goal"] = "muscle")}
                  >
                    Gain muscle
                  </button>
                  <button
                    id="reponse"
                    type="button"
                    onClick={() => (plan["goal"] = "strength")}
                  >
                    Gain strength
                  </button>
                  <button
                    id="reponse"
                    type="button"
                    onClick={() => (plan["goal"] = "weight")}
                  >
                    Losing weight
                  </button>
                  <button
                    id="reponse"
                    type="button"
                    onClick={() => (plan["goal"] = "endurance")}
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
                      plan["chest"].append(exo[0].long_arms)(
                        plan["back"].append(exo[1].long_arms)
                      )(plan["shoulders"].append(exo[2].long_arms))(
                        plan["biceps"].append(exo[3].long_arms)
                      )(plan["triceps"].append(exo[4].long_arms))(
                        plan["quadriceps"].append(exo[5].long_arms)
                      )(plan["hamstring"].append(exo[6].long_arms))
                    }
                  >
                    Long arms
                  </button>
                  <button
                    id="reponse"
                    type="button"
                    onClick={() =>
                      plan["chest"].append(exo[0].short_arms)(
                        plan["back"].append(exo[1].short_arms)
                      )(plan["shoulders"].append(exo[2].short_arms))(
                        plan["biceps"].append(exo[3].short_arms)
                      )(plan["triceps"].append(exo[4].short_arms))
                    }
                  >
                    Short arms
                  </button>
                </form>
              </div>
              <button class="next" onClick={() => setProgramme(3)}>
                Next
              </button>
            </div>
          ) : null}
          {programme === 3 ? (
            <>
              <div className="quizz">
                <p id="question">ergegzgzgzh</p>
                <form>
                  <button
                    id="reponse"
                    type="button"
                    onClick="verifierReponse()"
                  >
                    2 times
                  </button>
                  <button
                    id="reponse"
                    type="button"
                    onClick="verifierReponse()"
                  >
                    3 times
                  </button>
                  <button
                    id="reponse"
                    type="button"
                    onClick="verifierReponse()"
                  >
                    4 times
                  </button>
                  <button
                    id="reponse"
                    type="button"
                    onClick="verifierReponse()"
                  >
                    5 times
                  </button>
                  <button
                    id="reponse"
                    type="button"
                    onClick="verifierReponse()"
                  >
                    6 times
                  </button>
                </form>
              </div>
              <button class="next" onclick={() => setProgramme(4)}>
                Next
              </button>
            </>
          ) : null}
          {programme === 4 ? (
            <>
              <div className="quizz">
                <p id="question">ergehebse</p>
                <form>
                  <button
                    id="reponse"
                    type="button"
                    onclick="verifierReponse()"
                  >
                    2 times
                  </button>
                  <button
                    id="reponse"
                    type="button"
                    onclick="verifierReponse()"
                  >
                    3 times
                  </button>
                  <button
                    id="reponse"
                    type="button"
                    onclick="verifierReponse()"
                  >
                    4 times
                  </button>
                  <button
                    id="reponse"
                    type="button"
                    onclick="verifierReponse()"
                  >
                    5 times
                  </button>
                  <button
                    id="reponse"
                    type="button"
                    onclick="verifierReponse()"
                  >
                    6 times
                  </button>
                </form>
              </div>
              <button class="next" onclick={() => setProgramme(5)}>
                Next
              </button>
            </>
          ) : null}
          {programme === 5 ? (
            <>
              <p id="question"></p>
              <div className="quizz">
                <form>
                  <button
                    id="reponse"
                    type="button"
                    onclick="verifierReponse()"
                  >
                    2 times
                  </button>
                  <button
                    id="reponse"
                    type="button"
                    onclick="verifierReponse()"
                  >
                    3 times
                  </button>
                  <button
                    id="reponse"
                    type="button"
                    onclick="verifierReponse()"
                  >
                    4 times
                  </button>
                  <button
                    id="reponse"
                    type="button"
                    onclick="verifierReponse()"
                  >
                    5 times
                  </button>
                  <button
                    id="reponse"
                    type="button"
                    onclick="verifierReponse()"
                  >
                    6 times
                  </button>
                </form>
              </div>
              <button class="next" onclick={() => setProgramme(6)}>
                Next
              </button>
            </>
          ) : null}

          {programme === 6 ? (
            <>
              <p id="question">programme en </p>
              <div className="quizz">
                <form>
                  {/* <p>{plan["chest"]} <br></br> {plan["back"]} <br></br> {plan["shoulders"]} <br></br> {plan["biceps"]} <br></br> {plan["triceps"]} <br></br> {plan["quadriceps"]} {plan["hamstring"]}</p> */}
                </form>
              </div>
              <button class="next" onclick={() => setPage("home")}>
                Next
              </button>
            </>
          ) : null}
        </>
      ) : null}
    </>
  );
}

export default Script;
