package fr.kelly.corp

import akka.actor.ActorSystem
import akka.http.scaladsl.Http
import akka.http.scaladsl.server.Directives.{complete, get, path}
import akka.stream.ActorMaterializer

import scala.io.StdIn

object Backend extends App{
  implicit val system = ActorSystem("my-system")
  implicit val materializer = ActorMaterializer()
  implicit val executionContext = system.dispatcher

  val route =
    path("") {
      get {
        complete("I am a cat")
      }
    }

  val bindingFuture = Http().bindAndHandle(route, "localhost", 80)

  println(s"Server online at http://localhost:8085/\nPress RETURN to stop...")
  StdIn.readLine() // let it run until user presses return
  bindingFuture
    .flatMap(_.unbind()) // trigger unbinding from the port
    .onComplete(_ => system.terminate()) // and shutdown when done
}
