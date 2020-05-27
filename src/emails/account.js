require('dotenv').config()
const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD
    }
});

const welcome = (email,name)=>{

    let mailoption = {
    from: '"WELCOME |TASKTER" <muhammadsyed.cs@gmail.com>',
    to: email,
    subject:'WELCOME TO TASKTER',
    text:`Hello ${name}! Thankyou for choosing our app.`
}

transporter.sendMail(mailoption,(err,data)=>{
    if(err){
        return err
    }else{
        return data
    }
})
}

const goodbye = (email,name)=>{

    let mailoption = {
        from: '"GOODBYE |TASKTER" <muhammadsyed.cs@gmail.com>',
        to: email,
        subject:'ACCOUNT HAS BEEN REMOVED',
        text:`Goodbye ${name}! Hope you'll be back soon.`
}
    transporter.sendMail(mailoption,(err,data)=>{
        if(err){
            return err
        }else{
            return data
    }
})

}


module.exports = {welcome,goodbye}