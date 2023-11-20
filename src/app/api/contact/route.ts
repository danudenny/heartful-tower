import { readFileSync } from "fs";
import * as handlebars from "handlebars";
import { NextResponse, type NextRequest } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { join } from "path";

export async function POST(request: NextRequest) {
  const { email, name, domicili, whatsapp } = await request.json();

  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: "fiona@perumnas-iidagroup.com",
      pass: "etgkjhnfxkxunoja",
    },
  });

  const filePath = join(process.cwd(), "public", "email-contact-us.html");
  const readTemplate = readFileSync(filePath, "utf-8");

  const template = handlebars.compile(readTemplate);
  const replacements = {
    email: email,
    whatsapp: whatsapp,
    name: name,
  };
  const htmlToSend = template(replacements);

  const mailOptions: Mail.Options = {
    from: email,
    to: "fiona@perumnas-iidagroup.com",
    subject: `Contact Submission - Heartful Tower Bekasi Apartment Brochure Request`,
    html: htmlToSend,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent", sucess: true });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
