(function (window) {
  'use strict';

  const BUTTON_SELECTOR = '[data-posts="id"]';

  let buttons = document.querySelectorAll(BUTTON_SELECTOR);

  buttons.forEach(function (button) {
    'use strict';

    let sectionSelector = `#comments-${button.value}`;
    let commentSection = document.querySelector(sectionSelector);

    button.addEventListener('click', function (event) {
      if (commentSection.hidden) {
        commentSection.hidden = false;
        button.textContent = 'Hide comments';

      } else {
        commentSection.hidden = true;
        button.textContent = 'Show comments';
      }

      event.preventDefault();
    });

    button.addEventListener('click', function (getPost) {

    });
    button.addEventListener('click', function (event) {

        const url = 'https://jsonplaceholder.typicode.com/posts';

        fetch(url)
            .then((res)=>{
              return res.json()
            })
            .then((post)=>{
              for (let index = 0; index < 1; index++){
                div.innerHTML+=`
                 <tr>
                    <td>${post[con].userId}</td>
                    <td>${post[con].id}</td>
                    <td>${post[con].title}</td>
                    <td>${post[con].body}</td>
                 </tr>
                `
                con=con+1;
              }
            })
            .catch(function(error){
              console.log(error);
            })



    })
    function getPost() {
      const url = 'https://jsonplaceholder.typicode.com/posts';

      fetch(url)
          .then((res)=>{
            return res.json()
          })
          .then((post)=>{
            for (let index = 0; index < 1; index++){
              div.innerHTML+=`
                 <tr>
                    <td>${post[con].userId}</td>
                    <td>${post[con].id}</td>
                    <td>${post[con].title}</td>
                    <td>${post[con].body}</td>
                 </tr>
                `
              con=con+1;
            }
          })
          .catch(function(error){
            console.log(error);
          })


    }
  });
})(window);

var btn = document.getElementById("btn").addEventListener("click", getPost);
var con=0;
var div=document.getElementById("cardDiv")



function getPost() {
  const url = 'https://jsonplaceholder.typicode.com/posts';

  fetch(url)
      .then((res)=>{
        return res.json()
      })
      .then((post)=>{
        for (let index = 0; index < 1; index++){
          div.innerHTML+=`
                 <tr>
                    <td>${post[con].userId}</td>
                    <td>${post[con].id}</td>
                    <td>${post[con].title}</td>
                    <td>${post[con].body}</td>
                 </tr>
                `
          con=con+1;
        }
      })
      .catch(function(error){
        console.log(error);
      })


}