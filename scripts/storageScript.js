function play(type, number) {
  localStorage.clear();

  localStorage.setItem('type', type);
  localStorage.setItem('number', number);

  location.href = 'level.html';
}
