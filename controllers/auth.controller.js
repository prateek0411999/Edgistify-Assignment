const User = require('../models/auth.model');
const expressJwt = require('express-jwt');
const _ = require('lodash');
const { OAuth2Client } = require('google-auth-library');
const fetch = require('node-fetch');

const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const expressJWT = require('express-jwt');
const { errorHandler } = require('../helpers/dbErrorHandling');
const sgMail = require('@sendgrid/mail');
const nodemailer = require("nodemailer");
const  mailgun= require('mailgun-js');
const DOMAIN= 'sandboxc4e1ff8cea8a4901ac5665c557a6d652.mailgun.org';
const mg = mailgun({apiKey: process.env.MAILGUN_APIKEY, domain: DOMAIN})
// sgMail.setApiKey(process.env.MAIL_KEY);



exports.registerController = (req, res) => {
    console.log('!!!!!!!!!!!!!!!!');
    const { name, email, password } = req.body;
  console.log(req.body);
  const errors = validationResult(req);
  console.log(email);
    console.log('{}{}{}{}{}{}{}{}'+errors);

  if (!errors.isEmpty()) {
    const firstError = errors.array().map(error => error.msg)[0];
    return res.status(422).json({
      errors: firstError
    });
  } else
   {
      User.findOne({
          email
        }).exec((err, user) => {
            if (user) {
                return res.status(400).json({
                errors: 'Email is taken'
                });
             }
        });

        const token = jwt.sign(
            {
                name,
                email,
                password
            },
            process.env.JWT_ACCOUNT_ACTIVATION,
            {
                expiresIn: '5m'
            }
            );
    
        const data = {
            from: 'noreply@hello.com',
            to: email,
            subject: 'Activationl link ',
            html: `
                <h2>Please click on the given link to activate the accoutn <h2>
                <p>${process.env.CLIENT_URL}/users/activate/${token}</p>
                <hr/>

            `
        };
        mg.messages().send(data, function (error, body) {
            if(error)
            {
                return res.json({err: "error Occured"});
            }
            return res.json({
                      message: `Email has been sent to ${email}`
             });
        });

        
        // const emailData = {
        //   from: process.env.EMAIL_FROM,
        //   to: email,
        //   subject: 'Account activation link',
        //   html: `
        //             <h1>Please use the following to activate your account</h1>
        //             <p>${process.env.CLIENT_URL}/users/activate/${token}</p>
        //             <hr />
        //             <p>This email contain sensitive info</p>
        //             <p>${process.env.CLIENT_URL}</p>
        //         `
        // };

        // console.log(emailData);

        // sgMail
        //   .send(emailData)
        //   .then(sent => {
        //     return res.json({
        //       message: `Email has been sent to ${email}`
        //     });
        //   })
        //   .catch(err => {
        //       console.log("yha p error");
        //     return res.status(400).json({
        //       success: false,
        //       error: errorHandler(err)
        //     });
        //   });
    //     let transporter = nodemailer.createTransport({
    //         host: "imap.gmail.com",
    //         port: 993,
    //         secure: false, // true for 465, false for other ports
    //         auth: {
    //           user: testAccount.user, // generated ethereal user
    //           pass: testAccount.pass, // generated ethereal password
    //         },
    //       });
        
    //       // send mail with defined transport object
    //       let info =  transporter.sendMail({
    //         from: process.env.EMAIL_FROM,
    //         to: email,
    //         subject: 'Account activation link',
        
    //         html:` <h1>Please use the following to activate your account</h1>
    //         <p>${process.env.CLIENT_URL}/users/activate/${token}</p>
    //         <hr />
    //         <p>This email contain sensitive info</p>
    //         <p>${process.env.CLIENT_URL}</p> `, 
    //       }).then(sent => {
    //              return res.json({
    //                message: `Email has been sent to ${email}`
    //              });
    //            }).catch(err => {
    //                    console.log("yha p error");
    //                  return res.status(400).json({
    //                    success: false,
    //                    error: errorHandler(err)
    //                  });
    //                });
        
    //   }
        }
    };