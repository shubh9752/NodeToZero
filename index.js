
const nodeMailer=require('nodemailer');
const {Gkey}=require('./secretKey')

const sendMailer=async()=>{
    //1 creating a email transporter
    const transporter=nodeMailer.createTransport({
        //selecting a smtp 
        service:'gmail',
        auth:{
            user:'shubhamkumar3.sk@gmail.com',
            pass:Gkey
        }
    })
    //2 configuring email content
    const emailOptions={
        from:'shubhamkumar3.sk@gmail.com',
        to:'killersid581@yahoo.in',
        subject:'Thankyou for subcribe',
        text:'thankyou for subscribing us',
        html:'<h1>thankyou for subscribing us</h1>'
    };
    try {
        //3 sending the email
        const info=await transporter.sendMail(emailOptions);
        console.log(info+" sent successfuly");
        
    } catch (error) {
        console.log("email not send",error);
    }

}
sendMailer();