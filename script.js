
// let x = 10;

// let y = 5;

// let result = x * y;

// alert(result);


function calc(){

let num1 = prompt('Enter first number'); 

let num2 = prompt('Enter second number');

let result = Number(num1) + Number(num2); 

// alert(`${num1} + ${num2} = ${result}`)
// alert(num1 + ' + ' + num2 + ' = ' + result);

document.getElementById('hw').innerHTML = `${num1} + ${num2} = ${result}`;
}


function bro(){

let number1 = document.getElementById('_num1').value;

let number2 = document.getElementById('_num2').value;

let result = Number(number1) + Number(number2);

document.getElementById('hello').innerHTML = `${number1} + ${number2} = ${result}`;
}


function _calculate(x,y){

let result = Number(x) + Number(y);
document.getElementById('hello').innerHTML = `${x} + ${y} = ${result}`;  
}


function check(){

    let number1 = Number(document.getElementById('num1').value);
    let number2 = Number(document.getElementById('num2').value);

    if(number1 > number2){
        document.getElementById('magic').innerHTML = `${number1} Is Greater Than ${number2}🔼`;
    }


    else if (number1 == number2){
        document.getElementById('magic').innerHTML = `${number1} Is Equal To ${number2}🔼🔽`;
    }


    else{
        document.getElementById('magic').innerHTML = `${number1} Is Less Than ${number2}🔽`;
    }
}


// function check(){

//         let number1 = Number(document.getElementById('num1').value);
//         let number2 = Number(document.getElementById('num2').value);
    
//         if(number1 > number2){
//             document.getElementById('magic').innerHTML = `${number1} Is Greater Than ${number2}🔼`;
//         }
    

//         else if(number1 < number2){
//             document.getElementById('magic').innerHTML = `${number1} Is Less Than ${number2}🔽`;
//         }
    

//         else if (number1 == number2){
//             document.getElementById('magic').innerHTML = `${number1} Is Equal To ${number2}🔼🔽`;
//         }
//     }



// let x = 10;

// let y = 5;

// let array = ['text', 'Idan', x, y];

// console.log(array);

// // console.log(array[0]);
// // console.log(array[1]);
// // console.log(array[2]);
// // console.log(array[3]);

// console.log(array.length[array.length - 1])

// if(array.length >= 4){
//     console.log(`array has more than 3 items. \narray size is: ${array.length}`);
// }


// let x = 100000000;

// let y = 5;

// let _a_r_r_a_y_ = ['text', 'lear', x, y];

// //מדפיס את כל המערך
// console.log(_a_r_r_a_y_);

// //מדפיס את האובייקט הראשון במערך
// console.log(_a_r_r_a_y_[0]);


// // להשיג את האובייקט האחרון במערך. בכך שאני ניגש למיקום על ידי שימוש בגודל המערך שהוא שווה כרגע ל4 ופחות אחד
// console.log(_a_r_r_a_y_[_a_r_r_a_y_.length - 1]);



//1
let x = 70;

let y = 99;

let english = ['hello', 'Idan', x, y, 'minion', '9', '8', 'sad'];

console.log(english);

console.log(english[3]);


//2
console.log(english.length)
console.log(english[english.length - 1]);



let _movies = [
    {
        title:'The Dark Knight',
        rating: 9.5,
        year: 2008,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg',
        linkUrl: 'https://www.imdb.com/title/tt0468569/',
        rateUrl: 'https://www.imdb.com/title/tt0468569/ratings'
    },
    {
        title:'The Dark Knight Rises',
        rating: 8.4,
        year: 2012,
        imageUrl: 'https://images.moviesanywhere.com/137de7df53b44414af057f89c0647b0b/38dd4c91-6758-46bd-969b-6acf010a249b.jpg',
        linkUrl: 'https://www.imdb.com/title/tt1345836/',
        rateUrl: 'https://www.imdb.com/title/tt1345836/ratings'
    },
    {
        title:'Superman - Man of Steel',
        rating: 7.1,
        year: 2013,
        imageUrl: 'https://flxt.tmsimg.com/assets/p9259673_p_v8_ag.jpg',
        linkUrl: 'https://www.imdb.com/title/tt0770828/',
        rateUrl:'https://www.imdb.com/title/tt0770828/ratings'
    },
    {
      title:'Spiderman - No Way Home',
      rating: 8.1,
      year: 2021,
      imageUrl:'https://pics.filmaffinity.com/Spider_Man_No_Way_Home-642739124-large.jpg',
      linkUrl:'https://www.imdb.com/title/tt10872600/',
      rateUrl:'https://www.imdb.com/title/tt10872600/ratings'
  },
  {
  title:'The SpongeBob SquarePants Movie',
  rating: 7.1,
  year: 2004,
  imageUrl:'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/a80f8fb941042016cb0a82700542c0d105fe9c741ebcddd1d413bc92a9990273._RI_V_TTW_.jpg',
  linkUrl:'https://www.imdb.com/title/tt0345950/',
  rateUrl:'https://www.imdb.com/title/tt0345950/ratings'
},
{
  title:'Dragon ball super - SUPER HERO',
  rating: 7.3,
  year: 2022,
  imageUrl:'https://m.media-amazon.com/images/M/MV5BYmQ1Y2Y4NmItY2E4Mi00ZmM2LWFiOTEtMGVmMDRhN2ZiODU0XkEyXkFqcGdeQXVyNTkxMzEwMzU@._V1_.jpg',
  linkUrl:'https://www.imdb.com/title/tt14614892/',
  rateUrl:'https://www.imdb.com/title/tt14614892/ratings'
},
{
  title:'Minions - the rise of gru',
  rating: 6.6,
  year: 2022,
  imageUrl:'https://m.media-amazon.com/images/M/MV5BZDQyODUwM2MtNzA0YS00ZjdmLTgzMjItZWRjN2YyYWE5ZTNjXkEyXkFqcGdeQXVyMTI2MzY1MjM1._V1_FMjpg_UX1000_.jpg',
  linkUrl:'https://www.imdb.com/title/tt5113044/',
  rateUrl:'https://www.imdb.com/title/tt5113044/ratings'
},
];


console.log(_movies);

// for(let i = 1; i > 0)


function displayImages()
{
    for (let i = 0; i < _movies.length; i++) 
    {
        
      document.getElementById('movies').innerHTML += `
      <div class="col">
          <div class="card shadow-sm">
          <img class="card-img" src="${_movies[i].imageUrl}" alt="">
            <div class="card-body">
              <p class="card-text">Movie name: ${_movies[i].title}</p>
              <p class="card-text">Rating: ${_movies[i].rating}</p>
              <p class="card-text">Release year: ${_movies[i].year}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <a type="button" class="btn btn-sm btn-outline-secondary" href="${_movies[i].linkUrl}" target="_blank">View Movie</a>
                  <a type="button" class="btn btn-sm btn-outline-secondary" href="${_movies[i].rateUrl}" >Rate</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    }
}

window.onload = function() {
  displayImages();
};

function sendEmail() {
  let firstName = document.querySelector('[name="firstName"]').value;
  let lastName = document.querySelector('[name="lastName"]').value;
  let email = document.querySelector('[name="email"]').value;
  let message = document.querySelector('[name="messageContent"]').value;
  let date = new Date();

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "idan.mualem.son@gmail.com",
    Password: "433B95524F6C34963E917BBDAAB8AB6AF22A",
    From: "idan.mualem.son@gmail.com",
    To: "idan.mualem.son@gmail.com",
      Subject: `${firstName} ${lastName} שלח/ה לך הודעה מהאתר`,
      Body: `
  <b>הודעה מאת:</b> ${firstName} ${lastName}
  <br>
  <br>
  <b>כתובת איימיל של השולח:</b> ${email}
  <br>
  <br>
  <b>נשלח בתאריך:</b> ${date}
  <br>
  <br>
  <b>תוכן ההודעה:</b>
  <br>
  ${message}`
  });

  document.querySelector('#sent-success').style = 'display:block';

}