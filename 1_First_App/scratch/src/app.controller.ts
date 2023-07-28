import { Controller, Get } from "@nestjs/common";
@Controller()
export class AppController {
  @Get()
  getRootRoute() {
    return "Hi, there !!";
  }

  @Get('/alternate')
  getAlternativeRoute() {
    return "Alternative Route";
  }
}
