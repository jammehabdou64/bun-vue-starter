import { Action, Controller, Inject, Inertia } from "bun-jcc";

@Inject()
export class WelcomeController extends Controller {
  @Action()
  index() {
    return Inertia.render("Welcome");
  }
}
