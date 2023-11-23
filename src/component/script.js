import { useState } from "react";
import exo from "../data/exo.json";
import user from "../data/user.json";

function Script() {
  const [Page, setPage] = useState("home");
  const [programme, setProgramme] = useState(0);
  const [Bench, setBench] = useState(0);
  const [Squat, setSquat] = useState(0);
  const [Deadlift, setDeadlift] = useState(0);
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
  const [pseudo, setPseudo] = useState("");
  const [mdp, setMdp] = useState("");
  const [mail, setMail] = useState("");
  const [ville, setVille] = useState("");
  const [age, setAge] = useState("");
  const [sexe, setSexe] = useState("");
  const [Utilisateurs, setUtilisateurs] = useState("");
  const [city, setCity] = useState("Paris");
  const [connect, setConnect] = useState("Login");
  function fyg(s) {
    const newCityList = [];
    for (let i = 0; i < user.length; i++) {
      if (user[i].ville === s) {
        newCityList.push(user[i]);
      }
    }
    setCity(newCityList);
  }

  function pr(max) {
    const liste = [20, max * 0.4, max * 0.7, max * 0.85, max];
    return liste;
  }
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap"
        rel="stylesheet"
      ></link>
      <header className="App-header">
        <a href="#home" onClick={() => setPage("home")}>
          <div id="logocontain">
            <h2 id="Logo">FitJungle</h2>{" "}
          </div>
        </a>
        <nav className="menu1">
          <ul>
            <li>
              <a href="#prog" onClick={() => setPage("programme")}>
                Programme generator
              </a>
            </li>
            <li>
              <a href="#pr" onClick={() => setPage("pr")}>
                PR generator
              </a>
            </li>
            <li>
              <a href="#fyg" onClick={() => setPage("fyg")}>
                Find your Gymbro
              </a>
            </li>
            <li>
              <a href="#login" onClick={() => setPage("Login")}>
                {connect}
              </a>
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
              Unlock your body's potential with a personalized fitness program.
              Tailored for you in a few clicks, it's the first step to a
              healthier, more energetic life. <br />
              <br />
              Click to start your journey now.{" "}
            </h3>
          </div>
          <button id="start" onClick={() => setPage("programme")}>
            <svg
              height="24"
              width="24"
              fill="#FFFFFF"
              viewBox="0 0 24 24"
              data-name="Layer 1"
              id="Layer_1"
              class="dumbbell"
            >
              <rect
                x="1"
                y="9"
                width="22"
                height="6"
                rx="3"
                fill="#FFFFFF"
              ></rect>
              <ellipse cx="4" cy="12" rx="4" ry="7" fill="#FFFFFF"></ellipse>
              <ellipse cx="20" cy="12" rx="4" ry="7" fill="#FFFFFF"></ellipse>
            </svg>

            <span class="text">START</span>
          </button>
          <div id="certifcontain">
            <p id="certifications">
              Our gym plans are verified by 3 professionals coach <br></br>
              and we are certified by basic-fit, fitness park, david laid, tibo
              inshape, cbum and many others
            </p>
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
                <button class="next" onClick={() => setProgramme(1)}>
                  Next
                </button>
                <p>I advise you to train 3-4-5 per week</p>
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
      {Page === "pr" ? (
        <div id="pr">
          <h4>
            Strength is a big part of bodybuilding, it measures our level and
            our experience unconsciously it is measured by <br />
            the bench, the squat and the deadlift.
            <br /> <br />
          </h4>
          <div id="nbpr">
            <h2>Bench</h2>
            <input
              id="bench"
              type="number"
              placeholder="input your personnal record in 1 rep"
              onChange={(e) => setBench(e.target.value)}
            />
            <br />
            <h2>Squat</h2>
            <input
              id="squat"
              type="number"
              placeholder="input your personnal record in 1 rep"
              onChange={(e) => setSquat(e.target.value)}
            />
            <br />
            <h2>Deadlift</h2>
            <input
              id="deadlift"
              type="number"
              placeholder="input your personnal record in 1 rep"
              onChange={(e) => setDeadlift(e.target.value)}
            />
          </div>
          <button className="next" onClick={() => setPage("pr2")}>
            Next
          </button>
        </div>
      ) : null}
      {Page === "pr2" ? (
        <div class="block">
          <div class="quizz2">
            <div id="prfin">
              <h3 id="day">Bench</h3> <h5>Step 1: {pr(Bench)[0]} x 15 rep </h5>{" "}
              3min rest <br />
              <h5>Step 2: {pr(Bench)[1]} * 8 rep</h5> 3min rest
              <br />
              <h5>Step 3: {Math.round(pr(Bench)[2])} * 6 rep</h5>3min rest{" "}
              <br />
              <h5>Step 4: {Math.round(pr(Bench)[3])} * 3</h5> 5min rest <br />
              <h5>Step 5: {Math.round(pr(Bench)[4])} * 1</h5>
              <h3 id="day">Squat</h3>
              <h5>Step 1: {Math.round(pr(Squat)[0])} x 15 rep </h5> 3min rest{" "}
              <br />
              <h5>Step 2: {Math.round(pr(Squat)[1])} * 8 rep</h5> 3min rest
              <br />
              <h5>Step 3: {Math.round(pr(Squat)[2])} * 6 rep</h5>3min rest{" "}
              <br />
              <h5>Step 4: {Math.round(pr(Squat)[3])} * 3</h5> 5min rest <br />
              <h5>Step 5: {Math.round(pr(Squat)[4])} * 1</h5>
              <h3 id="day">Deadlift</h3>
              <h5>Step 1: {Math.round(pr(Deadlift)[0])} x 15 rep </h5> 3min rest{" "}
              <br />
              <h5>Step 2: {Math.round(pr(Deadlift)[1])} * 8 rep</h5> 3min rest
              <br />
              <h5>Step 3: {Math.round(pr(Deadlift)[2])} * 6 rep</h5>3min rest{" "}
              <br />
              <h5>Step 4: {Math.round(pr(Deadlift)[3])} * 3</h5> 5min rest{" "}
              <br />
              <h5>Step 5: {Math.round(pr(Deadlift)[4])} * 1</h5>
            </div>
          </div>
        </div>
      ) : null}
      {Page === "Login" ? (
        <>
          <div id="register">
            <h2>Register</h2>
            <form className="form">
              <div>
                <label htmlFor="pseudo">Pseudo :</label>
                <input
                  type="text"
                  id="pseudo"
                  value={pseudo}
                  onChange={(e) =>
                    setPseudo(e.target.value) & setConnect(e.target.value)
                  }
                  required
                />
              </div>
              <br />
              <br />
              <div>
                <label htmlFor="mdp">Password :</label>
                <input
                  type="password"
                  id="mdp"
                  value={mdp}
                  onChange={(e) => setMdp(e.target.value)}
                  required
                />
              </div>
              <br />
              <br />
              <br />
              <div>
                <label htmlFor="mail">Email adress :</label>
                <input
                  type="email"
                  id="mail"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                  required
                />
              </div>
              <br />
              <br />
              <div>
                <label htmlFor="ville">City :</label>
                <input
                  type="text"
                  id="ville"
                  value={ville}
                  onChange={(e) => setVille(e.target.value)}
                />
              </div>
              <br />
              <br />
              <div>
                <label htmlFor="age">Age :</label>
                <input
                  type="number"
                  id="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <br />
              <br />
              <label>Gender :</label>
              <div>
                <label htmlFor="homme">Men</label>
                <input
                  type="radio"
                  id="homme"
                  name="sexe"
                  value="homme"
                  checked={sexe === "homme"}
                  onChange={() => setSexe("homme")}
                />
                <label htmlFor="femme">Woman</label>
                <input
                  type="radio"
                  id="femme"
                  name="sexe"
                  value="femme"
                  checked={sexe === "femme"}
                  onChange={() => setSexe("femme")}
                />
              </div>
              <br />
              <button
                className="reponse"
                type="submit"
                onClick={() => setPage("home")}
              >
                S'inscrire
              </button>
            </form>
          </div>
        </>
      ) : null}
      {Page === "fyg" ? (
        <>
          <div id="fygdiv">
            <div id="fygborder">
              <input
                type="text"
                id="search"
                placeholder="Where do you want to train ?"
                value={Utilisateurs}
                onChange={(e) => setUtilisateurs(e.target.value)}
              />
              <button onClick={() => fyg(Utilisateurs)}>Search</button>
            </div>
          </div>
          {console.log(city)}
          <div className="user">
            <h2 className="pseudo">{city[0].name}</h2>
            <h3 className="age">{city[0].age}</h3>
            <h4 className="ville">{city[0].ville}</h4>
            <h4 className="mail">{city[0].mail}</h4>
            <h4 className="phone"> {city[0].phone}</h4>
          </div>
          <div className="user">
            <h2 className="pseudo">{city[1].name}</h2>
            <h3 className="age">{city[1].age}</h3>
            <h4 className="ville">{city[1].ville}</h4>
            <h4 className="mail">{city[1].mail}</h4>
            <h4 className="phone"> {city[1].phone}</h4>
          </div>
          <div className="user">
            <h2 className="pseudo">{city[2].name}</h2>
            <h3 className="age">{city[2].age}</h3>
            <h4 className="ville">{city[2].ville}</h4>
            <h4 className="mail">{city[2].mail}</h4>
            <h4 className="phone"> {city[2].phone}</h4>
          </div>
          <div className="user">
            <h2 className="pseudo">{city[3].name}</h2>
            <h3 className="age">{city[3].age}</h3>
            <h4 className="ville">{city[3].ville}</h4>
            <h4 className="mail">{city[3].mail}</h4>
            <h4 className="phone"> {city[3].phone}</h4>
          </div>
          <div className="user">
            <h2 className="pseudo">{city[4].name}</h2>
            <h3 className="age">{city[4].age}</h3>
            <h4 className="ville">{city[4].ville}</h4>
            <h4 className="mail">{city[4].mail}</h4>
            <h4 className="phone"> {city[4].phone}</h4>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Script;
