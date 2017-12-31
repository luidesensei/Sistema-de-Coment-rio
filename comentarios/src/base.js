import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  
    apiKey: "AIzaSyAH6J7WEZmpLSmfHhdpCKPzCP-95ijQ40E",
    authDomain: "reactjs-9c355.firebaseapp.com",
    databaseURL: "https://reactjs-9c355.firebaseio.com",
    projectId: "reactjs-9c355",
    storageBucket: "reactjs-9c355.appspot.com",
    messagingSenderId: "894677188618"
  
})
//const firebaseApp = firebase.initializeApp(config)
const db = firebase.database(firebaseApp)
const base = Rebase.createClass(db)

export const providers = {
  'facebook': new firebase.auth.FacebookAuthProvider()
}

export const auth = firebaseApp.auth()
export default base