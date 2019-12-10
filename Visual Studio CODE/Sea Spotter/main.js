document.addEventListener("DOMContentLoaded", function(){
    loadmap();
});

const loadmap = async function(){
    const mymap = L.map('mymap').setView([48.5, -123], 7);
    const attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    const tiles = L.tileLayer(tileUrl, { attribution });
    tiles.addTo(mymap);

    var api_url = "http://hotline.whalemuseum.org/api.json?species=orca&limit=50";
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);

    var layerGroup = L.layerGroup().addTo(mymap);

    for(i=0; i<50; i++){
        var marker = L.marker([data[i].latitude, data[i].longitude]).addTo(layerGroup);

        var popup = L.popup().setContent(`<p><span class="titel_beschrijving">Location:</span> ${data[i].location}<br/><span class="titel_beschrijving">Desciption:</span> ${data[i].description}<br/><span class="titel_beschrijving">Sighted at:</span> ${data[i].sighted_at.slice(0,10)}</p>`)
        marker.bindPopup(popup);
    }

    document.getElementById("gray_whale").onclick = async function(){
        var api_url = "http://hotline.whalemuseum.org/api.json?species=gray whale&limit=50";
        const response = await fetch(api_url);
        const data = await response.json();
        console.log(data);

        layerGroup.clearLayers();

        for(i=0; i<50; i++){
            var marker = L.marker([data[i].latitude, data[i].longitude]).addTo(layerGroup);
    
            var popup = L.popup().setContent(`<p><span class="titel_beschrijving">Location:</span> ${data[i].location}<br/><span class="titel_beschrijving">Desciption:</span> ${data[i].description}<br/><span class="titel_beschrijving">Sighted at:</span> ${data[i].sighted_at.slice(0,10)}</p>`)
            marker.bindPopup(popup);
        }
    }

    document.getElementById("dolphin").onclick = async function(){
        var api_url = "http://hotline.whalemuseum.org/api.json?species=pacific white-sided dolphin&limit=50";
        const response = await fetch(api_url);
        const data = await response.json();
        console.log(data);

        layerGroup.clearLayers();
        
        for(i=0; i<50; i++){
            var marker = L.marker([data[i].latitude, data[i].longitude]).addTo(layerGroup);
    
            var popup = L.popup().setContent(`<p><span class="titel_beschrijving">Location:</span> ${data[i].location}<br/><span class="titel_beschrijving">Desciption:</span> ${data[i].description}<br/><span class="titel_beschrijving">Sighted at:</span> ${data[i].sighted_at.slice(0,10)}</p>`)
            marker.bindPopup(popup);
        }
    }

    document.getElementById("orca").onclick = async function(){
        var api_url = "http://hotline.whalemuseum.org/api.json?species=orca&limit=50";
        const response = await fetch(api_url);
        const data = await response.json();
        console.log(data);

        layerGroup.clearLayers();
        
        for(i=0; i<50; i++){
            var marker = L.marker([data[i].latitude, data[i].longitude]).addTo(layerGroup);
    
            var popup = L.popup().setContent(`<p><span class="titel_beschrijving">Location:</span> ${data[i].location}<br/><span class="titel_beschrijving">Desciption:</span> ${data[i].description}<br/><span class="titel_beschrijving">Sighted at:</span> ${data[i].sighted_at.slice(0,10)}</p>`)
            marker.bindPopup(popup);
        }
    }
}



