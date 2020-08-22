import 'whatwg-fetch';
import firebase from 'firebase';
import firebaseApp from './FirebaseService'

const db = firebaseApp.firestore();
const storage = firebaseApp.storage("gs://songsmith-98875.appspot.com/").ref("trap_anthem.ogg");

var songs = db.collection('songs');

class HttpServiceClass {
	constructor() {

		this.show_songs = this.show_songs.bind(this);
	}

	show_songs = async () => {
		var data = [];
		await songs.get().then((querySnapshot) => {
			//querySnapshot is "iteratable" itself
			querySnapshot.forEach((userDoc) => {
				var userDocData = userDoc.data();
				// console.dir(userDocData);
				data.push(userDocData);
			})
		});
		return data;
	};

	get_song = () => {
		return storage;
	}
}

// export { db };
export default HttpServiceClass;