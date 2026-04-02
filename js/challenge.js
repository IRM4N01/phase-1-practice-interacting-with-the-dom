//Element selectors
const counter = document.getElementById('counter');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const heartBtn = document.getElementById('heart');
const pauseBtn = document.getElementById('pause');
const likesList = document.querySelector('.likes');
const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const commentsList = document.getElementById('list');

//Counter state
let count = 0;
let isPaused = false;

//Likes tracking
let likes = {};

//Timer auto-increment every second
let timer = setInterval(() => {
    if (!isPaused) {
        count++;
        counter.textContent = count;
    }
}, 1000);

//Plus / Minus buttons
plusBtn.addEventListener('click', () => {
    count++;
    counter.textContent = count;
});

minusBtn.addEventListener('click', () => {
    count--;
    counter.textContent = count;
});

//Heart(like) button
heartBtn.addEventListener('click', () => {
    let currentNumber = counter.textContent;


    if (!likes[currentNumber]) {
        likes[currentNumber] = 0;
    }

    likes[currentNumber]++;

    //check if number already has a like
    let existing = document.querySelector(
        `.likes li[data-num="${currentNumber}"]`
    );

    if (existing) {
        existing.textContent = `${currentNumber} has been liked ${likes[currentNumber]} times`;
    } else {
        let li = document.createElement('li');
        li.dataset.num = currentNumber;
        li.textContent = `${currentNumber} has been liked 1 time`;
        likesList.appendChild(li);
    }
});

//Pause/Resume button
pauseBtn.addEventListener('click', () => {
    isPaused = !isPaused;

    if (isPaused) {
        pauseBtn.textContent = 'resume';

        //disable buttons
        plusBtn.disabled = true;
        minusBtn.disabled = true;
        heartBtn.disabled = true;
    } else {
        pauseBtn.textcontent = 'pause';

        //enable buttons
        plusBtn.disabled = false;
        minusBtn.disabled = false;
        heartBtn.disabled = false;
    }
});

//COMMENTS

commentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let commentText = commentInput.value 

    let p = document.createElement('p');
    p.textContent = commentText;

    commentsList.appendChild(p);

    commentInput.value = '';
});

