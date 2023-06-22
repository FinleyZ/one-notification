import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
@Injectable()
export class ApiService {
    constructor(private transpoter: nodemailer.Transporter) {}

    //sent a mock email using nodemailer
    async email() {
        console.log("email");
        return "email"
    }

}
