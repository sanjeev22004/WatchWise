
const url=" https://api.tvmaze.com/search/shows?q="
const form=document.getElementById("search_bar");
const grid=document.getElementById("movieGrid");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let search_text=document.getElementById("searchBox").value;
    
   remove();

    console.log("search_text");
    show_movie(search_text);
    
})
function remove() {
    // Remove all child nodes from the grid
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}


function show_movie(m){
    axios.get(`${url}${m}`)
    .then((res)=>{
        for(let i of res.data){
            if(i.show.image != null){
            let image=document.createElement("img");
            image.setAttribute("src",i.show.image.medium);
            grid.append(image);
            }
        }
    })
    .catch((err)=>{
        console.log(err);
    })
};
