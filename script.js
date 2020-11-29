window.onload = ()=>{
  showwords();
};
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener('click', function(e){
  let Engword = document.getElementById("english_word");
  let Frenchword = document.getElementById("french_word");
  let ew = localStorage.getItem("ew");
  let fw = localStorage.getItem("fw");
  if (ew == null && fw == null) {
    fwobj = [];
    ewobj = [];
  } else {
    fwobj = JSON.parse(fw);
    ewobj = JSON.parse(ew);
  }
  fwobj.push(Frenchword.value);
  ewobj.push(Engword.value);
  localStorage.setItem("ew", JSON.stringify(ewobj));
  localStorage.setItem("fw", JSON.stringify(fwobj));
  Engword.value = "";
  Frenchword.value = "";
  console.log(fwobj);
  console.log(ewobj);
  showwords();
});

const showwords = ()=>{
  let EnglishWord = localStorage.getItem("ew");
  let FrenchWord = localStorage.getItem("fw");
  if (EnglishWord == null && FrenchWord == null) {
    fwobj = [];
    ewobj = [];
  } else {
    fwobj = JSON.parse(FrenchWord);
    ewobj = JSON.parse(EnglishWord);

  }
  let html = "";
  ewobj.forEach(function(element, index) {
    html += `
            <tbody id="main_table">
            <tr class="tr_box_main">
              <th scope="row" class="no">${index + 1}</th>
              <td class="english word">${element}</td>
              <td class="french word">${fwobj[index]}</td>
              <td><button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button></td>
                </tr>
                </tbody>`;


                // <th scope="row" class="no">1</th>
      
      // <td class="english">English</td>
      // <td class="french">French</td>
  });
  let main_table = document.getElementById("main_table");
  if (ewobj.length != 0) {
    main_table.innerHTML = html;
  } else {
    main_table.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}



function deleteNote(index) {
//   console.log("I am deleting", index);

  let EnglishWord = localStorage.getItem("ew");
  let FrenchWord = localStorage.getItem("fw");
  if (EnglishWord == null && FrenchWord == null) {
    fwobj = [];
    ewobj = [];
  } else {
    fwobj = JSON.parse(FrenchWord);
    ewobj = JSON.parse(EnglishWord);

  }
  fwobj.splice(index, 1);
  ewobj.splice(index, 1);
  localStorage.setItem("ew", JSON.stringify(ewobj));
  localStorage.setItem("fw", JSON.stringify(fwobj));
  showwords();
}


let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let box = document.getElementsByClassName('tr_box_main');
    Array.from(box).forEach(function(element, index){
        // let cardTxt = element.getElementsByTagName("p")[0].innerText;
        let evalue = element.getElementsByTagName('td')[0].innerText;
        let fvalue = element.getElementsByTagName('td')[1].innerText;
        // let value = element[index].innerText;
        // console.log(inputVal);
        evalue = evalue.toLowerCase();
        fvalue = fvalue.toLowerCase();
        // console.log(value);
        if(evalue.includes(inputVal)){
            element.style.display = "table-row";
        }
        else if(fvalue.includes(inputVal)){
          element.style.display = "table-row";
        }
        else{
            element.style.display = "none";
        }

        // console.log(cardTxt);
    }
    )
    // Array.from(box).forEach(function(element, index){
    //     // let cardTxt = element.getElementsByTagName("p")[0].innerText;
    //     let value = element.getElementsByTagName('td')[1].innerText;
    //     // let value = element[index].innerText;
    //     // console.log(inputVal);
    //     value = value.toLowerCase();
    //     // console.log(value);
    //     if(value.includes(inputVal)){
    //         element.style.display = "table-row";
    //     }
    //     else{
    //         element.style.display = "none";
    //     }
    //     // console.log(cardTxt);
    // }
    // )
}
)



/* 
console.log("Welcome to notes app. This is app.js");
showNotes();

// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
//   console.log(notesObj);
  showNotes();
});

// Function to show elements from localStorage
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function(element, index) {
    html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note ${index + 1}</h5>
                        <p class="card-text"> ${element}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>`;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}

// Function to delete a note
function deleteNote(index) {
//   console.log("I am deleting", index);

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}


let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})

/*
Further Features:
1. Add Title
2. Mark a note as Important
3. Separate notes by user
4. Sync and host to web server 
*/