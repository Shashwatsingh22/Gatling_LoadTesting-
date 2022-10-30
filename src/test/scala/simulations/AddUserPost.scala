package simulations

import  io.gatling.core.scenario.Simulation
import  io.gatling.core.Predef._
import  io.gatling.http.Predef._

class AddUserPost extends  Simulation {
   //HTTP conf
   val httpConf = http.baseUrl("http://reqres.in")
     .header("Accept", "application/json")
     .header("content-type", value="application/json")

    //Scenerio
    val scn = scenario("Add User Scenario")
              .exec(http("Add User Request")
              .post("/api/users")
              .body(RawFileBody("./src/test/resources/bodies/addUser.json")).asJson
              .header("content-type","applocation/json"))

      .pause(3) //taking pause for 3 sec

      .exec(http("Get User Request")
      .get("/api/users/2")
      .check(status is 200))

      .pause(3)

      .exec(http("List All users")
      .get("/api/users?page=2")
      .check(status is 200))


  //Setup
  setUp(scn.inject(atOnceUsers(20))).protocols(httpConf)
}
