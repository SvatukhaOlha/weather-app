window.addEventListener('load', ()=> {
    let long;
    let lat;

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
            long = position.coords.longitude;
            lat = position.coords.longitude;

            const api = `http://api.weatherapi.com/v1/current.json?key=fb8624aa56924102878134923210605LIVE`;
        });
    }
})