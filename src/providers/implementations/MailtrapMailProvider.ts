import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export class MailtrapMailProvider implements IMailProvider {

    private transporter: Mail;

    constructor ( 
    ){
        this.transporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "cee1b9772889d4",
                pass: "222b0c4bef1500"
            }
        });
    }


    async sendMail(data: IMessage): Promise<void> {
        await this.transporter.sendMail({
            to: {
                name: data.to.name,
                address: data.from.email,
            },
            from: {
                name: data.from.name,
                address: data.from.email,
            },
            subject: data.subject,
            html: data.body,
        })
    }
}