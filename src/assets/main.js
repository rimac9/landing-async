
const content = null || document.getElementById("content");

options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '32203d97fbmsh9daf853f73aa492p1caba8jsnbc98ba9944e6',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  },
};
//Lógica de async: ir por los datos, luego esperar por ellos y finalmente retornarlos hacia el usuario
async function fetchData(urlAPI) {
  const response = await fetch(urlAPI, options);
  const data = await response.json(); ///nos entrega el objeto
  return data; //retorna la información de la API que estamos solicitando
}

// funcion q se invoca asi mismo
(async () => {
  try {
    const videos = await fetchData(API); // vieos es la rspuesta
    let view = `
    ${videos.items
      .map(
        (video) =>
          `
  <div class="group relative">
    <div
      class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
      <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
    </div>
    <div
    
    class="mt-4 flex justify-between">
      <h3 class="text-sm text-gray-700">
         <span aria-hidden="true" class="absolute inset-0"></span>
        ${video.snippet.title}
      </h3>
     </div>
    </div>

  `
      )
      .slice(0, 8)
      .join("")} 
  
  `;
    content.innerHTML = view;
  } catch (error) {
    // console.log(error);
  }
})();
