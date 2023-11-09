import { useState } from "react";
import background from "./images/background.mp4";

function Script (){
    const [Page,setPage] = useState("home");
    const [programme,setProgramme] = useState(0);
    const plan = {
        style : " ",
        chest : [],
        back : [],
        shoulders : [],
        biceps : [],
        triceps : [],
        quadriceps : [],
        hamstring : []
    }


    



    return(
        <>
        
        <header className="App-header">
            <h2 id = "Logo">FitJungle</h2>
            <nav className="menu1">
                <ul>
                    <li><a href = "#">programme generaor</a></li>
                    <li><a href = "#">Menu generator</a></li>
                    <li><a href = "#">PR generator</a></li>
                    <li><a href = "#">Find your Gymbro</a></li>
                </ul>
            </nav>

        </header>
            {Page === "home" ? (
                <div id="home">
                    <h2 id = "titre">« The app you need when you want <br></br>to be STRONG »</h2>
                    <h3>lakaka tintinri j zegu a iaOQSN JZOJVHIOZVCO CHKIZ <br></br> zec izc jcajoozjbzrugbo v zebé</h3>
                    <button id="start" onClick={() => setPage("programme")}>START</button>  
                    <div>
                        
                    </div> 
                    
                </div>
                
              
              ) : null}
              {Page === "programme" ? (
            <>
            <h2 id = " ">BE the STRONGEEEEEST</h2>
            

            {programme === 0 ?(
                <>
                
                <p>How many times a week are you ready to train? </p>
                <div>
                <form>
                        <button id = "reponse" onclick={plan["style"] = "full-body"}>2 times</button>
                        <button id = "reponse" onclick={plan["style"] = "ppl"}>3 times</button>
                        <button id = "reponse" onclick={plan["style"] = "uper-lower"}>4 times</button>
                        <button id = "reponse" onclick={plan["style"] = "split"}>5 times</button>
                        <button id = "reponse" onclick={plan["style"] = "ppl+"}>6 times</button>

                </form>
                </div>
                <p>I should you not train much but not a little to so 3-4-5 per week is good</p>
                <button onclick={() => setProgramme(1)}>Next</button>
                </>


            ): null}
            {programme === 1 ?(
                <>
                
                <p></p>
                <div>
                <form>
                        <button id = "reponse" onclick="verifierReponse()">2 times</button>
                        <button id = "reponse" onclick="verifierReponse()">3 times</button>
                        <button id = "reponse" onclick="verifierReponse()">4 times</button>
                        <button id = "reponse" onclick="verifierReponse()">5 times</button>
                        <button id = "reponse" onclick="verifierReponse()">6 times</button>

                </form>
                </div>
                <button onclick={() => setProgramme(2)}>Next</button>
                </>


            ): null}

            {programme === 1 ?(
                <>
                
                <p></p>
                <div>
                <form>
                        <button id = "reponse" onclick="verifierReponse()">2 times</button>
                        <button id = "reponse" onclick="verifierReponse()">3 times</button>
                        <button id = "reponse" onclick="verifierReponse()">4 times</button>
                        <button id = "reponse" onclick="verifierReponse()">5 times</button>
                        <button id = "reponse" onclick="verifierReponse()">6 times</button>

                </form>
                </div>
                <button onclick={() => setProgramme(2)}>Next</button>
                </>


            ): null}
            {programme === 2 ?(
                <>
                
                <p></p>
                <div>
                <form>
                        <button id = "reponse" onclick="verifierReponse()">2 times</button>
                        <button id = "reponse" onclick="verifierReponse()">3 times</button>
                        <button id = "reponse" onclick="verifierReponse()">4 times</button>
                        <button id = "reponse" onclick="verifierReponse()">5 times</button>
                        <button id = "reponse" onclick="verifierReponse()">6 times</button>

                </form>
                </div>
                <button onclick={() => setProgramme(3)}>Next</button>
                </>


            ): null}
            {programme === 3 ?(
                <>
                
                <p></p>
                <div>
                <form>
                        <button id = "reponse" onclick="verifierReponse()">2 times</button>
                        <button id = "reponse" onclick="verifierReponse()">3 times</button>
                        <button id = "reponse" onclick="verifierReponse()">4 times</button>
                        <button id = "reponse" onclick="verifierReponse()">5 times</button>
                        <button id = "reponse" onclick="verifierReponse()">6 times</button>

                </form>
                </div>
                <button onclick={() => setProgramme(4)}>Next</button>
                </>


            ): null}
            {programme === 4 ?(
                <>
                
                <p></p>
                <div>
                <form>
                        <button id = "reponse" onclick="verifierReponse()">2 times</button>
                        <button id = "reponse" onclick="verifierReponse()">3 times</button>
                        <button id = "reponse" onclick="verifierReponse()">4 times</button>
                        <button id = "reponse" onclick="verifierReponse()">5 times</button>
                        <button id = "reponse" onclick="verifierReponse()">6 times</button>

                </form>
                </div>
                <button onclick={() => setProgramme(5)}>Next</button>
                </>


            ): null}

            </>
              ) : null}
              
        </>
          
        
    );
}

export default Script;