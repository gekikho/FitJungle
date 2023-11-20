import { useState } from "react";
import exo from "../data/exo.json";

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
        hamstring: []
    })

    { console.log(plan) }

function pr(max){
    
    const liste = [20, max * 0.4,max * 0.7,max * 0.85, max];
    return liste
}




    return (
        <>

            <header className="App-header">
                <h2 id="Logo">FitJungle</h2>
                <nav className="menu1">
                    <ul>
                        <li><a href="#prog" onClick={() => setPage("programme")}>programme generator</a></li>
                        <li><a href="#pr" onClick={() => setPage("pr")}>PR generator</a></li>
                        <li><a href="#">Find your Gymbro</a></li>
                    </ul>
                </nav>

            </header>
            {Page === "home" ? (
                <div id="home">
                    <h2 id="titre">« The app you need when you want <br></br>to be STRONG »</h2>
                    <h3>lakaka tintinri j zegu a iaOQSN JZOJVHIOZVCO CHKIZ <br></br> zec izc jcajoozjbzrugbo v zebé</h3>
                    <button id="start" onClick={() => setPage("programme")}>START</button>
                    <div>
                        
                        <p id ="certifications"> 
                            Our gym plans are verified by 3 professionals coach <br></br>
                            and we are certified by basic-fit, fitness park, david laid, tibo inshape, cbum and many others
                        </p>
                        <section id = "qui-sommes-nous">
                        
                                <img className= "nous" src = "./images/guts.png" alt = ""/>
                            
                            

                        
                                <img className= "nous" src="./images/guts.png" alt = ""/>
                            
                        </section>
                        

                    </div>

                </div>


            ) : null}
            {Page === "programme" ? (
                <div>


                    {programme === 0 ? (

                        <div className="block">

                            <div className="quizz">
                                <p id="question">How many times a week are you ready to train? </p>
                                <form>
                                    <button id="reponse" type="button" onClick={(() => setPlan(prevPlan => ({ ...prevPlan, style: "full-body" })))}>2 times</button>
                                    <button id="reponse" type="button" onClick={(() => setPlan(prevPlan => ({ ...prevPlan, style: "ppl" })))}>3 times</button>
                                    <button id="reponse" type="button" onClick={(() => setPlan(prevPlan => ({ ...prevPlan, style: "upper-lower" })))}>4 times</button>
                                    <button id="reponse" type="button" onClick={(() => setPlan(prevPlan => ({ ...prevPlan, style: "split" })))}>5 times</button>
                                    <button id="reponse" type="button" onClick={(() => setPlan(prevPlan => ({ ...prevPlan, style: "ppl+" })))}>6 times</button>


                                </form>
                                <p className="conseil">I advise you to train 3-4-5 per week</p>
                                <button class="next" onClick={() => setProgramme(1)}>Next</button>
                            </div>


                            
                        </div>


                    ) : null}
                    {programme === 1 ? (
                        <div className="block">


                            <div className="quizz">
                                <p id="question">What is your objective </p>
                                <form>
                                    <button id="reponse" type="button" onClick={(() => setPlan(prevPlan => ({ ...prevPlan, goal: "muscle" })))}>Gain muscle</button>
                                    <button id="reponse" type="button" onClick={(() => setPlan(prevPlan => ({ ...prevPlan, goal: "strength" })))}>Gain strength</button>
                                    <button id="reponse" type="button" onClick={(() => setPlan(prevPlan => ({ ...prevPlan, goal: "weight" })))}>Losing weight</button>
                                    <button id="reponse" type="button" onClick={(() => setPlan(prevPlan => ({ ...prevPlan, goal: "endurance" })))}>Gain endurance</button>

                                </form>
                                <p className="conseil">If you play a sport, choose gain strength or endurance<br/> If you are a gym beginner with a correct BMI, choose gain muscle <br/> If your BMI is more than 25, choose Losing weight </p>
                                <button class="next" onClick={() => setProgramme(2)}>Next</button>
                            </div>
                            
                        </div>




                    ) : null}

                    {programme === 2 ? (
                        <div className="block">


                            <div className="quizz">
                                <p id="question">Do you have :</p>
                                <form>
                                    <button
                                        id="reponse" type="button"
                                        onClick={(() => setPlan(prevPlan => ({ ...prevPlan, chest: [...prevPlan.chest, exo[0].long_arms], back: [...prevPlan.back, exo[1].long_arms], shoulders: [...prevPlan.shoulders, exo[2].long_arms], biceps: [...prevPlan.biceps, exo[3].long_arms], triceps: [...prevPlan.triceps, exo[4].long_arms] })))}>
                                        Long arms
                                    </button>

                                    <button
                                        id="reponse" type="button"
                                        onClick={(() => setPlan(prevPlan => ({ ...prevPlan, chest: [...prevPlan.chest, exo[0].short_arms], back: [...prevPlan.back, exo[1].short_arms], shoulders: [...prevPlan.shoulders, exo[2].short_arms], biceps: [...prevPlan.biceps, exo[3].short_arms], triceps: [...prevPlan.triceps, exo[4].short_arms] })))}>
                                        Short arms
                                    </button>

                                </form>
                                <p className="conseil">To find out, stand with your arms alongside your body; if your elbow is at waist level, your arms are long!</p>
                                <button className="next" onClick={() => setProgramme(3)}>Next</button>
                            </div>
                            
                        </div>


                    ) : null}
                    {programme === 3 ? (

                        <div className="block">
                            <div className="quizz">
                                <p id="question">Do you have wide ribs ?</p>
                                <form>
                                    <button
                                        id="reponse" type="button"
                                        onClick={(() => setPlan(prevPlan => ({ ...prevPlan, chest: [...prevPlan.chest, exo[0].wide_ribs], back: [...prevPlan.back, exo[1].wide_ribs], shoulders: [...prevPlan.shoulders, exo[2].wide_ribs], biceps: [...prevPlan.biceps, exo[3].wide_ribs], triceps: [...prevPlan.triceps, exo[4].wide_ribs] })))}>
                                        Yes
                                    </button>

                                    <button
                                        id="reponse" type="button"
                                        onClick={(() => setPlan(prevPlan => ({ ...prevPlan, chest: [...prevPlan.chest, ""] })))}>
                                        No
                                    </button>
                                </form>
                                <p className="conseil">If the area below your chest is wider than the middle area, you potentially have wide ribs</p>
                                <button className="next" onClick={() => setProgramme(4)}>Next</button>
                            </div>
                            <img src = "ribs.jpg"/>
                            
                        </div>



                    ) : null}
                    {programme === 4 ? (
                        <div className="block">
                            <div className="quizz">
                                <p id="question">Do you have slim waist ?</p>
                                <form>
                                    <button
                                        id="reponse" type="button"
                                        onClick={(() => setPlan(prevPlan => ({ ...prevPlan, chest: [...prevPlan.chest, exo[0].slim_waist], back: [...prevPlan.back, exo[1].slim_waist], shoulders: [...prevPlan.shoulders, exo[2].slim_waist], biceps: [...prevPlan.biceps, exo[3].slim_waist], triceps: [...prevPlan.triceps, exo[4].slim_waist], quadriceps: [...prevPlan.quadriceps, exo[5].broad_clavicles], hamstring: [...prevPlan.hamstring, exo[6].broad_clavicles] })))}>
                                        Yes
                                    </button>

                                    <button
                                        id="reponse" type="button"
                                        onClick={(() => setPlan(prevPlan => ({ ...prevPlan, chest: [...prevPlan.chest, ""] })))}>
                                        No
                                    </button>
                                </form>
                                <p className="conseil">if your waist is narrower than the bottom of your sides, then you have a thin waist</p>
                                <button className="next" onClick={() => setProgramme(5)}>Next</button>
                            </div>
                            
                        </div>



                    ) : null}
                    {programme === 5 ? (


                        <div className="block">
                            <div className="quizz">
                                <p id="question">Do you have broad clavicles ?</p>
                                <form>
                                    <button
                                        id="reponse" type="button"
                                        onClick={(() => setPlan(prevPlan => ({ ...prevPlan, chest: [...prevPlan.chest, exo[0].broad_clavicles], back: [...prevPlan.back, exo[1].broad_clavicles], shoulders: [...prevPlan.back, exo[2].broad_clavicles], biceps: [...prevPlan.biceps, exo[3].broad_clavicles], triceps: [...prevPlan.triceps, exo[4].broad_clavicles] })))}>
                                        Yes
                                    </button>

                                    <button
                                        id="reponse" type="button"
                                        onClick={(() => setPlan(prevPlan => ({ ...prevPlan, chest: [...prevPlan.chest, ""] })))}>
                                        No
                                    </button>
                                </form>
                                <p className="conseil">if the distance between your shoulders is greater than the width of your waist, then you have long clavicles</p>
                                <button className="next" onClick={() => setProgramme(6)}>Next</button>
                            </div>
                            
                        </div>



                    ) : null}

                    {programme === 6 ? (

                        <div className="block">

                            <div className="quizz">
                                <p id="question">Do you have wide femur ?</p>
                                <form>
                                    <button
                                        id="reponse" type="button"
                                        onClick={(() => setPlan(prevPlan => ({ ...prevPlan, chest: [...prevPlan.chest, exo[0].wide_femurs], back: [...prevPlan.back, exo[1].wide_femurs], shoulders: [...prevPlan.back, exo[2].wide_femurs], quadriceps: [...prevPlan.quadriceps, exo[5].wide_femurs], hamstring: [...prevPlan.hamstring, exo[6].wide_femurs] })))}>
                                        Yes
                                    </button>

                                    <button
                                        id="reponse" type="button"
                                        onClick={(() => setPlan(prevPlan => ({ ...prevPlan, chest: [...prevPlan.chest, ""] })))}>
                                        No
                                    </button>

                                </form>
                                <p className="conseil">if the distance between your hips and knees is greater than that of your shins, then you have long femurs</p>
                                <button className="next" onClick={() => setProgramme(7)}>Next</button>
                            </div>
                            
                        </div>



                    ) : null}

                    {programme === 7 ? (
                        <div className="block">
                            <div className="quizz2">
                                <p id="question">THIS IS YOUR PROGRAMME !!!!</p>

                                {plan.style === "full-body" && (
                                    <>
                                        <p id = "prog">
                                            <h3 id = "day">Day 1 :</h3 > <br /> <br /> <h5>Chest :</h5> {plan.chest.join(', ')} <br /> <br /> <h5>Back:</h5> {plan.back.join(', ')} <br /> <br /> <h5>Shoulders:</h5> {plan.shoulders.join(', ')} <br /> <br /> <h5>Biceps:</h5> {plan.biceps.join(', ')} <br /> <br /> <h5>Triceps:</h5> {plan.triceps.join(', ')} <br /> <br /> <h5>Legs:</h5> {plan.quadriceps.join(', ')} {plan.hamstring.join(', ')}<br/> <br/> <br/>
                                            <h3 id = "day">Day 2 :</h3 > <br /> <br /> <h5>Chest :</h5> {plan.chest.join(', ')} <br /> <br /> <h5>Back:</h5> {plan.back.join(', ')} <br /> <br /> <h5>Shoulders:</h5> {plan.shoulders.join(', ')} <br /> <br /> <h5>Biceps:</h5> {plan.biceps.join(', ')} <br /> <br /> <h5>Triceps:</h5> {plan.triceps.join(', ')} <br /> <br /> <h5>Legs:</h5> {plan.quadriceps.join(', ')} {plan.hamstring.join(', ')} </p>
                                    </>
                                )}

                                {plan.style === "ppl" && (
                                    <>
                                    <p id = "prog">
                                    <h3 id = "day">Day 1 :</h3 > <br /> <br /> <h5>Chest :</h5> {plan.chest.join(', ')} <br /> <br /> <h5>Shoulders:</h5> {plan.shoulders.join(', ')} <br /> <br /> <h5>Triceps:</h5> {plan.triceps.join(', ')} <br /> <br />                                       
                                    <h3 id = "day">Day 2 :</h3 > <br /> <br /> <h5>Back:</h5> {plan.back.join(', ')} <br /> <br /> <h5>Biceps:</h5> {plan.biceps.join(', ')} <br /> <br />                                        
                                    <h3 id = "day">Day 3 :</h3 > <br/><br/> <h5>Legs:</h5> {plan.quadriceps.join(', ')} {plan.hamstring.join(', ')}<br/> </p>
                                    </>
                                )}

                                {plan.style === "upper-lower" && (
                                    <>
                                    <p id = "prog">
                                    <h3 id = "day">Day 1 :</h3 >  <h5>Chest :</h5> {plan.chest.join(', ')} <br/>  <h5>Shoulders:</h5> {plan.shoulders.join(', ')} <h5>back:</h5> {plan.back.join(', ')} <br />   
                                    <h3 id = "day">Day 2 :</h3 > <h5>Legs:</h5> {plan.quadriceps.join(', ')} {plan.hamstring.join(', ')} <br/>
                                    <h3 id = "day">Day 3 :</h3 >  <h5>Chest :</h5> {plan.chest.join(', ')} <br/>  <h5>Shoulders:</h5> {plan.shoulders.join(', ')} <h5>back:</h5> {plan.back.join(', ')} <br />     
                                    <h3 id = "day">Day 4 :</h3 >  <h5>Legs:</h5> {plan.quadriceps.join(', ')}, {plan.hamstring.join(', ')} <br/> </p>
                                    </>
                                )}

                                {plan.style === "split" && (
                                   <>
                                   <p id = "prog">
                                   <h3 id = "day">Day 1 :</h3 >  <h5>Chest :</h5> {plan.chest.join(', ')} <br /> <br />  <h5>back:</h5> {plan.back.join(', ')} <br /> <br />  
                                   <h3 id = "day">Day 2 :</h3 > <h5>Shoulders:</h5> {plan.shoulders.join(', ')} <br /> <br />  <h5>Biceps:</h5> {plan.biceps.join(', ')} <br /> <br /><h5>Triceps:</h5> {plan.triceps.join(', ')} <br /> <br />
                                   <h3 id = "day">Day 3 :</h3 > <h5>Legs:</h5> {plan.quadriceps.join(', ')} {plan.hamstring.join(', ')} <br/> <br/>
                                   <h3 id = "day">Day 4 :</h3 >  <h5>Chest :</h5> {plan.chest.join(', ')} <br /> <br /> <h5>Shoulders:</h5> {plan.shoulders.join(', ')} <br /> <br /> <h5>back:</h5> {plan.back.join(', ')} <br /> <br />      
                                   <h3 id = "day">Day 5 :</h3 >  <h5>Legs:</h5> {plan.quadriceps.join(', ')} {plan.hamstring.join(', ')} <br/> </p>
                                   </>
                                )}

                                {plan.style === "ppl+" && (
                                    <>
                                    <p id = "prog">
                                    <h3 id = "day">Day 1 :</h3 > <br /> <br /> <h5>Chest :</h5> {plan.chest.join(', ')} <br /> <br /> <h5>Shoulders:</h5> {plan.shoulders.join(', ')} <br /> <br /> <h5>Triceps:</h5> {plan.triceps.join(', ')} <br /> <br />                                        
                                    <h3 id = "day">Day 2 :</h3 > <br /> <br /> <h5>Back:</h5> {plan.back.join(', ')} <br /> <br /> <h5>Biceps:</h5> {plan.biceps.join(', ')} <br /> <br /> 
                                    <h3 id = "day">Day 3 :</h3 > <br/><br/> <h5>Legs:</h5> {plan.quadriceps.join(', ')} {plan.hamstring.join(', ')}<br/>
                                    <h3 id = "day">Day 4 :</h3 > <br /> <br /> <h5>Chest :</h5> {plan.chest.join(', ')} <br /> <br /> <h5>Shoulders:</h5> {plan.shoulders.join(', ')} <br /> <br /> <h5>Triceps:</h5> {plan.triceps.join(', ')} <br /> <br /> 
                                    <h3 id = "day">Day 5 :</h3 > <br /> <br /> <h5>Back:</h5> {plan.back.join(', ')} <br /> <br /> <h5>Biceps:</h5> {plan.biceps.join(', ')} <br /> <br /> 
                                    <h3 id = "day">Day 6 :</h3 > <br/><br/> <h5>Legs:</h5> {plan.quadriceps.join(', ')} {plan.hamstring.join(', ')}<br/> </p>
                                    </>
                                )}
                            </div>
                        </div>
                    ) : null}


                </div>
            ) : null }

            {Page === "pr" ?(
                <div id = "pr">
                    <h4>
                    Strength is a big part of bodybuilding, it measures our level and our experience unconsciously it is measured by <br/>the bench, the squat and the deadlift.
                    <br/> <br/> <br/> <br/> <br/>
                    </h4>
                    <div>
                        <h2>Bench</h2>
                        <input id = "bench" type = "number" placeholder="input your personnal record in 1 rep" onChange={(e) => setBench(e.target.value)}/>
                        <br/>
                        <h2>Squat</h2>
                        <input id = "squat" type = "number" placeholder="input your personnal record in 1 rep" onChange={(e) => setSquat(e.target.value)}/>
                        <br/>
                        <h2>Deadlift</h2>
                        <input id = "deadlift" type = "number" placeholder="input your personnal record in 1 rep" onChange={(e) => setDeadlift(e.target.value)}/>
                    </div>
                    <button className="next" onClick={() => setPage("pr2")}>Next</button>
                
                

            </div>
            ) : null}
            {Page === "pr2" ?(
                <div class="block">
                   <div class="quizz2"> 
                   <h3 id = "day">Bench</h3> <h5>Step 1: {pr(Bench)[0]} x 15 rep </h5> 3min rest <br/><h5>Step 2: {pr(Bench)[1]} * 8 rep</h5> 3min rest<br/><h5>Step 3: {pr(Bench)[2]} * 6 rep</h5>3min rest <br/><h5>Step 4: {pr(Bench)[3]} * 3</h5> 5min rest <br/><h5>Step 5: {pr(Bench)[4]}  * 1</h5>
                     <h3 id = "day">Squat</h3><h5>Step 1: {pr(Bench)[0]} x 15 rep </h5> 3min rest <br/><h5>Step 2: {pr(Bench)[1]} * 8 rep</h5> 3min rest<br/><h5>Step 3: {pr(Bench)[2]} * 6 rep</h5>3min rest <br/><h5>Step 4: {pr(Bench)[3]} * 3</h5> 5min rest <br/><h5>Step 5: {pr(Bench)[4]}  * 1</h5>
                     <h3 id = "day">Deadlift</h3><h5>Step 1: {pr(Bench)[0]} x 15 rep </h5> 3min rest <br/><h5>Step 2: {pr(Bench)[1]} * 8 rep</h5> 3min rest<br/><h5>Step 3: {pr(Bench)[2]} * 6 rep</h5>3min rest <br/><h5>Step 4: {pr(Bench)[3]} * 3</h5> 5min rest <br/><h5>Step 5: {pr(Bench)[4]}  * 1</h5>
                   </div>
                 </div>
                ): null}

        </>


    );
}

export default Script;