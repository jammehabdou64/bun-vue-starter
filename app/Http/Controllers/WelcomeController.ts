import { Action, Controller, Inject, Inertia } from "javel-jcc";

@Inject()
export class WelcomeController extends Controller {
  @Action()
  index() {
    return Inertia.render("Welcome");
  }
}
