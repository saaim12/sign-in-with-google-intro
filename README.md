# MyApp
- basic flow of login and signup with google <br/>

# steps
- 1:go to `https://console.cloud.google.com` for the project creation ant the generation of the client id and credentials
click on sidebar-->api & services --> Oauth screen (for the selection of the user type)<br/>
then:<br/>
click on sidebar-->api & services -->credentials (for the client id -->copy it) <br/>

- 2:go to `https://developers.google.com/identity/gsi/web/guides/overview` <br/>
for the configuration og the sign in or sign up button also for the generation for integration code
- 2.1:click on sidebar-->load the client library copy line `<script src="https://accounts.google.com/gsi/client" async></script>` and paste in the index file make sure it is on ti=op in the head section<br/>
- 2.2:click on sidebar-->generate the integration code then type your client id which can be get form
`https://console.cloud.google.com/apis/credentials` and paste in the client id box
then type the domain url on which the site is hosted<br/>
- 2.3:then click on select sign in method dropdown and select the method from which you want to sign in and generate the button code 
and paste in the login or sign up html file where you want to use<br/>



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## for the understanding simply follow this tutorial
`https://www.youtube.com/watch?v=EO-U01u9vFQ&ab_channel=Let%27sProgram`
<iframe src="https://www.youtube.com/watch?v=EO-U01u9vFQ&ab_channel=Let%27sProgram">#   s i g n - i n - w i t h - g o o g l e - i n t r o 
 
 