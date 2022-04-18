const Header = (title, date, temp) => {
  const headerDiv = document.createElement('div');
  const dateCard = document.createElement('span');
  const titleCard = document.createElement('h1') ;
  const tempCard = document.createElement('span');

  
   headerDiv.appendChild(dateCard);
   headerDiv.appendChild(titleCard);
   headerDiv.appendChild(tempCard);

    //  <div class="header">
   //    <span class="date">{ date }</span>
   //    <h1>{ title }</h1>
   //    <span class="temp">{ temp }</span>
   //  </div>

   headerDiv.classList.add('header') ;
   dateCard.classList.add('date');
   tempCard.classList.add('temp') ;
 

   dateCard.textContent = date
   tempCard.textContent = temp 
   titleCard.textContent = title

   


 

   return headerDiv
 

  


  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}



const headerAppender = (selector) => {
 const testHeader = Header('nana', 'nono', 'blue')
 const hSelector = document.querySelector(selector) 
 hSelector.appendChild(testHeader)

 



  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
