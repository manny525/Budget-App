import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC_aBbng4VRwrKqNJ-Acowgv2c5nT2QHVs",
    authDomain: "expensify-88426.firebaseapp.com",
    databaseURL: "https://expensify-88426.firebaseio.com",
    projectId: "expensify-88426",
    storageBucket: "expensify-88426.appspot.com",
    messagingSenderId: "1074637933181",
    appId: "1:1074637933181:web:c8a1f0d978486a8d087f14",
    measurementId: "G-8VS7J4N9T0"
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref('expenses').on("child_added", (snapshot) => {
  console.log(snapshot.key, snapshot.val())
})

database.ref('expenses').on("child_changed", (snapshot) => {
  console.log(snapshot.key, snapshot.val())
})

database.ref('expenses').on("child_removed", (snapshot) => {
  console.log(snapshot.key, snapshot.val())
})

database.ref('expenses').on('value', (snapshot) => {
  const expenses = []
  snapshot.forEach((expenseSnapshot) => {
    expenses.push({
      id: expenseSnapshot.key,
      ...expenseSnapshot.val()
    })
  })
  console.log(expenses);
})

setTimeout(() => {
  database.ref('expenses').push({
    description: 'firebase trial 3',
    amount: 120000,
    note: 'bas bhai please',
    createdAt: 1200000
  })
}, 3500)

setTimeout(() => {
  database.ref('expenses').push({
    description: 'firebase trial 4',
    amount: 120000,
    note: 'bas bhai please maanjao',
    createdAt: 1200000
  })
}, 7000)

database.ref('notes').set(notes);

database.ref('notes/12')

database.ref().on('value', (snapshot) => {
  const val = snapshot.val()
  console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
}, (e) => {
  console.log('Error with data fetching', e);
})

setTimeout(() => {
  database.ref('job/title').set('Manager')
}, 3500)

setTimeout(() => {
  database.ref().off();
}, 7000)

setTimeout(() => {
  database.ref('job/title').set('software developer')
}, 10500)

database.ref().set({
    name: 'Manthan Tolia',
    age: 21,
    stressLevel: 6,
    job: {
      title: 'Software Developer',
      company: 'Google'
    },
    location: {
        city: 'Jaipur',
        country: 'India'
    }
}).then(() => {
    console.log('data is saved')
}).catch((e) => {
    console.log('this failed', e)
});

database.ref().update({
  stressLevel: 4,
  'job/company': 'VISA',
  'location/city': 'Begaluru'
});