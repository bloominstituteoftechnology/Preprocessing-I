const list = document.querySelector('ul');
const form = document.querySelector('form');
const addThing = (things, id) => {
    let time = things.time.toDate();
     let html = `
     <li data-id="${id}">
     <div>${things.title}</div>
     <div><i>${time}</i></div>
     </li>
     `;
  list.innerHTML += html;   
     }

     db.collection('thing I can do').onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
        const doc = change.doc;
        if(change.type === 'added'){
            addThing(doc.data(), doc.id);
        } 
    });
   });
        form.addEventListener('submit', e => {
        e.preventDefault();
        const now = new Date();
        const thing = {
            title: form.thing.value,
            time: firebase.firestore.Timestamp.fromDate(now),
        }
        
        db.collection('thing I can do').add(thing).then(() => {
            console.log('thing added');
        }).catch(err => {
            console.log(err);
        });
        });