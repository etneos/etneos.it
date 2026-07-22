 var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {        
        window.open('thanks.html','_top');        
        form.reset()
      }).catch(error => {
        status.innerHTML = "'Mbare ci sunu problemi ! "
      });
    }
    form.addEventListener("submit", handleSubmit)