# MyApp

- Basic flow of login and signup with Google.

## Steps

1. Go to [Google Cloud Console](https://console.cloud.google.com) for project creation and generation of the client ID and credentials. 
   Click on sidebar -> API & Services -> OAuth screen (for the selection of the user type).

2. Click on sidebar -> API & Services -> Credentials (for the client ID -> copy it).

3. Go to [Google Identity Services](https://developers.google.com/identity/gsi/web/guides/overview) for the configuration of the sign-in or sign-up button and generation of integration code.

   - Click on sidebar -> Load the client library, copy the line <br/>
   `<script src="https://accounts.google.com/gsi/client" async></script>` and paste it in the index file. Make sure it is on top in the head section.

   - Click on sidebar -> Generate the integration code. Type your client ID, which can be obtained from [Google Cloud Console Credentials](https://console.cloud.google.com/apis/credentials), and paste it in the client ID box. Then type the domain URL on which the site is hosted.

   - Click on the select sign-in method dropdown, select the method from which you want to sign in, and generate the button code. Paste it in the login or sign-up HTML file where you want to use it.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## For understanding, simply follow this tutorial

[Watch the tutorial](https://www.youtube.com/watch?v=EO-U01u9vFQ&ab_channel=Let%27sProgram)
