package simulations

import io.gatling.core.scenario.Simulation
import  io.gatling.core.Predef._
//Here _ == * (All)
import  io.gatling.http.Predef._

class UpdateUserPUT  extends Simulation{
   val httpConf = http.baseUrl("http://reqres.in/")
     .header("Accept", "application/json")
     .header("content-type","application/json")

  val scn = scenario("Update User Scenrio")
    .exec(http("Update Specific User By Id")
    .put("api/users/2")
    .body(RawFileBody("./src/test/resources/bodies/updateUser.json")).asJson
    .check(status.in(200 to 201)))

  setUp(scn.inject(atOnceUsers(20))).protocols(httpConf)

}
