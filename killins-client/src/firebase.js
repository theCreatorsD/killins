import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyB2I_N7hlxBkcXyWLYVMAWyPYpajAgVli4',
  authDomain: 'killins-8f676.firebaseapp.com',
  databaseURL: 'https://killins-8f676.firebaseio.com',
  projectId: 'killins-8f676',
  storageBucket: 'killins-8f676.appspot.com',
  messagingSenderId: '921654221617',
};
firebase.initializeApp(config);

export default firebase;
