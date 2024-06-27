document.addEventListener('DOMContentLoaded', function () {
  let count = 1; // перемотка событий

  function updateState() {
    const states = [
      {class: 'bt', transformX: '33vw', rotate: '-1deg', header: 'БАБЛ-ТАЙМ'},
      {class: 'meditation', transformX: '-1vw', rotate: '-95deg', header: 'МЕДИТАЦИИ'},
      {class: 'fluid_art', transformX: '-35vw', rotate: '-190deg', header: 'ФЛЮИД-АРТ'},
      {class: 'gadaniya', transformX: '-69vw', rotate: '-276deg', header: 'ГАДАНИЯ'}
    ];
    let state = states[count % states.length];

    ['bt', 'meditation', 'fluid_art', 'gadaniya'].forEach(event => {
      let elements = document.querySelectorAll(`.${event}`);
      elements.forEach(el => el.style.animationPlayState = 'paused');
    });

    let darkens = document.querySelectorAll('.darken');
    darkens.forEach(darken => darken.style.opacity = '1');

    let activeElements = document.querySelectorAll(`.${state.class}`);
    activeElements.forEach(el => el.style.animationPlayState = 'running');
    let activeDarken = document.querySelector(`.${state.class} .darken`);
    if (activeDarken) activeDarken.style.opacity = '0';

    document.querySelector('.event_cards').style.transform = `translateX(${state.transformX})`;
    document.querySelector('.event_text').style.transform = `rotate(${state.rotate})`;
    document.querySelector('.reg_head').innerHTML = state.header;
  }

  document.querySelector('.next').addEventListener('click', function () {
    count += 1;
    updateState();
    resetRegButton();
  });

  document.querySelector('.previous').addEventListener('click', function () {
    count -= 1;
    if (count < 0) count = 3;
    updateState();
    resetRegButton();
  });


  let formamoya = document.querySelector(".reg_form"); 
  let zapis = document.querySelector(".zapis"); 
  let close = document.querySelector(".close"); 

  zapis.addEventListener("click", function(){
    formamoya.style.display = "block";
  });

  close.addEventListener("click", function(){
    formamoya.style.display = "none";
  });

  $(".reg_btn").click(function(){
    $(".reg_btn").html("Ты записан(а)!");
    $(".reg_btn").css("background-color","#AC6AFF");
  });


});
