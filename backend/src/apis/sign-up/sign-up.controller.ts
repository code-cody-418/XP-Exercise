import {Request, Response} from 'express';
// DB
import {setActivationToken, setHash} from '../../utils/auth.utils';
import {Profile} from "../../utils/interfaces/Profile";
import {Status} from "../../utils/interfaces/Status";
import MailComposer from "nodemailer/lib/mail-composer";
import {insertProfile} from "../../utils/profile/insertProfile";

const mailgun = require("mailgun-js")



// Interfaces (represent the DB model and types of the columns associated with a specific DB table)


export const signupProfileController = async (request: Request, response: Response): Promise<Response | undefined> => {
    try {


        const {profileEmail, profilePassword, profileUserName} = request.body;
        const profileHash = await setHash(profilePassword);
        const profileActivationToken = setActivationToken();
        const profileAvatarUrl = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/453a0a7f-bdb5-4f8e-8c33-65eadea41b0b/d91sboj-434e4030-c944-45c9-9fbb-8a51048d0e9e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ1M2EwYTdmLWJkYjUtNGY4ZS04YzMzLTY1ZWFkZWE0MWIwYlwvZDkxc2Jvai00MzRlNDAzMC1jOTQ0LTQ1YzktOWZiYi04YTUxMDQ4ZDBlOWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.b8ttf0lOii_BYBu-5S-w6enl_WB1eX_5AtCB98vqEzE"
        const profileCoins = 0;
        const profileExp = 0;
        const profileLevel = 1;
        const basePath = `${request.protocol}://${request.get('host')}${request.originalUrl}activation/${profileActivationToken}`
        console.log(profileActivationToken)

        const message = `<h2>Ready to Train!?!</h2>
<p><a href="${basePath}">${basePath}</a></p>`

        const mailgunMessage = {
            from: `Mailgun Sandbox <postmaster@${process.env.MAILGUN_DOMAIN}>`,
            to: profileEmail,
            subject: "One step closer to AlienGram",
            text: 'Click this link to activate',
            html: message
        }

        const profile: Profile = {
            profileId : null,
            profileActivationToken,
            profileAvatarUrl,
            profileCoins,
            profileEmail,
            profileExp,
            profileHash,
            profileLevel,
            profileUserName
        };

        const result = await insertProfile(profile)

        const emailComposer: MailComposer = new MailComposer(mailgunMessage)

        emailComposer.compile().build((error: any, message: Buffer) => {
            const mg = mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN});

            console.log(message.toString("ascii"))
            const compiledEmail = {
                to: profileEmail,
                message: message.toString("ascii")
            }

            const status: Status = {
                status: 200,
                message: "Profile successfully created please check your email.",
                data: null
            };
            mg.messages().sendMime(compiledEmail, (sendError: any, body: any) => {
                // if (sendError) {
                //     return response.json({status:418, data:null, message:"Error sending email"})
                // }
                return response.json(status);
            });
        })
    } catch (error) {

        const status: Status = {
            status: 500,
            message: error.message,
            data: null
        };

        return response.json(status);
    }
};
