// Henter data fra albums(3).json filen.
fetchData("data/albums (3).json").then((data) => {
 
    // Refererer til tablen, så vi kan indsætte data i selve tabel.
    let tableContent = document.getElementById("table");
    
    console.log(tableContent, 'Tjekker om tabllen er hentet')
    
    // Et for-loop til indsætningen af data.
    for (let i = 0; i < data.length; i++) {

        // Opretter en ny række for hvert album med albummets data.
        //Tilføjer også <a> tag til at linke hjemmesiderne, og target="_blank" åbner linket i en ny fane.
        let nyAlbum = 

             "<tr>" +
                "<td>" + data[i].albumName + "</td>" +
                "<td>" + data[i].artistName + "</td>" +
                "<td>" + data[i].productionYear + "</td>" +
                "<td>" + data[i].trackList.length + "</td>" +
                "<td><a href='" + data[i].artistWebsite + "' target='_blank'>" + data[i].artistWebsite + "</a></td>" +
            "</tr>";

        // Tilføjer den nye række til tabelens indhold
        tableContent.innerHTML += nyAlbum;
    }
});
//Taget fra Thomas eksempel på github
async function fetchData(url) {
    let request = await fetch(url);
    let json = await request.json();
    return json;
}