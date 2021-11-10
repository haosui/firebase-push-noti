var firebaseConfig = {
    apiKey: "AIzaSyDlNj2Vv6njy2MDg9Vz7BoB4bruOCJ5nlM",
    authDomain: "pushnoti-3b403.firebaseapp.com",
    projectId: "pushnoti-3b403",
    storageBucket: "pushnoti-3b403.appspot.com",
    messagingSenderId: "79930192668",
    appId: "1:79930192668:web:69ce11a5103876defb40d9"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

var messaging = firebase.messaging()

messaging.usePublicVapidKey('BD9Xkhlw2Vhbrp--nfum9lYypPwRX_Mo8KNQQLzER0v2u5b6ISrczO_jrcsCcdwoZMUAx5AqUP8Mur46aisFdMY');

messaging.getToken().then((currentToken) => {
    console.log(currentToken)
})