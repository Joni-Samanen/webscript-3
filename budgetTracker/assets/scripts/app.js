(function(){
  function Start()
  {
    console.log("Started");
    let deleteButtons = document.querySelectorAll(".btn-danger");
  for(button of deleteButtons)
  {
    button.addEventListener("click",(event)=>{
      if(!confirm("Are you sure?"))
      {
        event.preventDefault();
        window.location.assign("/budget");
      }
    });
  }
  }
  window.addEventListener("load",Start);

})();
