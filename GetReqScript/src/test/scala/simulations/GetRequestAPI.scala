package simulations

import io.gatling.core.scenario.Simulation
import  io.gatling.core.Predef._
//Here _ == * (All)
import  io.gatling.http.Predef._

class GetRequestAPI extends  Simulation {

  //Create three important sctions

  //1. http conf
   //set the base URL and set headers if any
   val httpConf = http.baseUrl("https://reqres.in")
     .header("Accept",value="application/json")
     .header("content-type",value="application/json")


  //2. Scenario (req)
   val scn = scenario("get user").exec(
      http("get user request")
        .get("/api/users/2")
        .check(status is 200)
    )

  //3. Setup (for executing those req)
     //Here we inject the scenrio then tell that How many concerent users you want?
     // Which Protocol

   setUp(scn.inject(atOnceUsers(100))).protocols(httpConf)

}
