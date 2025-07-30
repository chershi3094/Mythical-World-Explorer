const map = L.map('map').setView([20, 0], 2);

// 🎨 Use a parchment-style fantasy tile layer
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; Fantasy World Explorer',
  maxZoom: 18
}).addTo(map);

// Load mythical places from JSON
fetch('places.json')
  .then(res => res.json())
  .then(places => {
    places.forEach(place => {
      const marker = L.marker([place.lat, place.lng]).addTo(map);
      marker.bindPopup(`
        <div style="
          padding: 10px;
          max-width: 250px;
          font-family: 'Georgia', serif;
          background: #fff8e1;
          border-radius: 10px;
          box-shadow: 2px 2px 6px rgba(0,0,0,0.2);
          border: 1px solid #c1a35b;
        ">
          <h3 style="margin:0; color:#6d4c41;">${place.symbol} ${place.name}</h3>
          <p style="margin:5px 0; font-weight:bold;">🌍 ${place.origin}</p>
          <p style="margin:5px 0;">${place.description}</p>
        </div>
      `);
    });
  });
