const firebaseConfig = {
	apiKey: 'AIzaSyCHO2xIU4dFEMOgMxuTHADYX8QC0GzUbnk',
	authDomain: 'hotstar-clone-ad729.firebaseapp.com',
	projectId: 'hotstar-clone-ad729',
	storageBucket: 'hotstar-clone-ad729.appspot.com',
	messagingSenderId: '252010708894',
	appId: '1:252010708894:web:75999b47b2ac8c8f28208f',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = firebase.auth.GoogleProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
