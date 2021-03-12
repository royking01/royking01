// Animate Smooth Scroll
$('#view-work').on('click', ()=>{
  const images = $('#hed').position().top;

  $('html, body').animate(
    {
      scrollTop: images
    },
    800
  );
});
