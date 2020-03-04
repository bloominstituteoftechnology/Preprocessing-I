const list = document.querySelector('ul');
const form = document.querySelector('form');
const remove = document.querySelector('.remove');
const addThing = (things, id) => {
     let html = `
     <li data-id="${id}">
     <div>${things.title}</div>
     </li>
     `;
  list.innerHTML += html;   
     }
    //  const deleteRecipe = id => {
    //     const recipes = document.querySelectorAll('li');
    //     recipes.forEach(recipe => {
    //         if(thing.getAttribute('data-id') === id){
    //             recipe.remove();
    //         }
    //     });
    //  }
     db.collection('thing I can do').onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
        const doc = change.doc;
        if(change.type === 'added'){
            addThing(doc.data(), doc.id);
        // } else if (change.type === 'removed'){
        //     deleteRecipe(doc.id);
        }
    
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
    list.addEventListener('click', e => {
        if(e.target.tagName === "LI"){
                    const id = e.target.parentElement.getAttribute('data-id');
                    db.collection('thing I can do').doc(id).delete().then(() => {
                        console.log(`thing has been deleted`);
                    });
                    }
                    });
    //     list.addEventListener('click', e => {
    //         if(e.target.tagName === remove){
    //         const id = e.target.parentElement.getAttribute('data-id');
    //         db.collection('thing I can do').doc(id).delete().then(() => {
    //             console.log(`thing has been deleted`);
    //         });
    //         }
    //         });
     });
const button = document.querySelector('.button');
button.addEventListener('click', e => {
    alert(`Nah, you're not cool enough. Try again.`)
});