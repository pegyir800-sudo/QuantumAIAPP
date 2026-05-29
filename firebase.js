import { initializeApp }

from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";

import { getAuth }

from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";

const firebaseConfig = {

apiKey: "AIzaSyA6RGcEIFPSF25wsMN-7QLg1-EvJrtvLmY",

authDomain: "my-web-e9b90.firebaseapp.com",

projectId: "my-web-e9b90",

storageBucket: "my-web-e9b90.firebasestorage.app",

messagingSenderId: "253275343289",

appId: "1:253275343289:web:169a10b703962d3ae90e68",

measurementId: "G-RDV9JZYJDZ"

};

const app =
initializeApp(firebaseConfig);

const auth =
getAuth(app);

export { auth };