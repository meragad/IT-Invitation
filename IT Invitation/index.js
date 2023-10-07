const byAnime = document.getElementById('byAnime');
 const numofboxes = 400;

 for(let i = 0; i < numofboxes; i++) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('colorBox');
    byAnime.append(colorBox)
 }