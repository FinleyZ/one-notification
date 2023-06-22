import { Controller, Post } from '@nestjs/common';
import {ApiService} from "./api.service";

@Controller('api')
export class ApiController {
    constructor(private apiService: ApiService ) {}
    //mock an api that sent an email using nodemailer
    @Post('email')
    email() {
        return this.apiService.email();
    }

}
