function onSubmit(e) {
  e.preventDefault();
  document.querySelector(".msg").textContent = '';
  document.querySelector("#image").src = '';

  const prompt = document.querySelector("#prompt").value;
  const size = document.querySelector("#size").value;
  const variation = document.querySelector("#variation").value;

  if (prompt === "") {
    alert("Please enter some text");
    return;
  }
  generateImageRequest(prompt, size, variation);
}
//Generating Image with openai api. 
async function generateImageRequest(prompt, size, variation) {
  try {
    showSpinner();
  await fetch("openai/generateimage", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        prompt,
        size,
        variation
      }),
    })
    .then(response => response.json())
    .then(data => {
      if(data.data.length >= 1){       
        const url = data.data  
        url.forEach(element => {
          const img = document.createElement('img')
          img.src = element.url
          document.querySelector('.image-container').appendChild(img)
          removeSpinner();         
        });
      }     
    })      
  } catch (error) {
    document.querySelector(".msg").textContent = error;
  }
}

function showSpinner() {
  document.querySelector(".spinner").classList.add("show");
}

function removeSpinner() {
  document.querySelector(".spinner").classList.remove("show");
}
document.querySelector("#image-form").addEventListener("submit", onSubmit);
