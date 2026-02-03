export const template = (token) => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            .container {
                font-family: Arial, sans-serif;
                text-align: center;
                background-color: #f2f4f6;
                padding: 30px;
            }
            .card {
                background-color: #ffffff;
                padding: 40px;
                border-radius: 10px;
                max-width: 500px;
                margin: auto;
                box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            }
            .btn {
                background-color: #000000;
                color: #ffffff !important;
                padding: 15px 25px;
                text-decoration: none;
                border-radius: 5px;
                display: inline-block;
                margin-top: 20px;
            }
            h1 { color: #333; }
            p { color: #666; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="card">
                <img src="https://fullsphere.co.uk/misc/free-template/images/logo-white-background.jpg" width="150" alt="Logo">
                <h1>Welcome to Note App!</h1>
                <p>Thanks for signing up, Rana. We're excited to have you on board. Please confirm your email address to activate your account.</p>
                
                <a href="http://localhost:4000/verify/${token}" class="btn">Confirm Email Address</a>
                
                <p style="margin-top: 30px; font-size: 12px;">If you didn't create an account, you can safely ignore this email.</p>
            </div>
        </div>
    </body>
    </html>
    `;
};