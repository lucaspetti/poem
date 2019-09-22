function displayPoem (){
  clearImage();
  fetch(`data/${query}-poems.json`)
    .then(response => response.json())
    .then((data) => {
      let number = Math.floor(Math.random()*data.length);
      poemImage.src = data[number].imgSource;
      poemAuthor.innerHTML = data[number].name;
      poemImage.height = data[number].imgHeight;
      poemImage.width = data[number].imgWidth;
      poem.innerHTML = data[number].poem.join('<br />\ ');
    });
}

function changeLanguage () {
  event.preventDefault();
  clearImage();
  poemAuthor.innerHTML = '';
  poem.innerHTML = '';
}
