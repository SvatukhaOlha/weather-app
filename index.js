window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimeZone = document.querySelector('.location-timezone');
    let temperatureSection = document.querySelector('.temperature-section');
    let temperatureSpan = document.querySelector('.temperature-section span');
    let location = document.querySelector('.location');
    
    let iconEl = document.createElement('img');
    iconEl.classList.add('icon');
    location.appendChild(iconEl);



    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            //console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;


            fetch(`http://localhost:3000/?q=${lat},${long}`)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);

                    const { temp_c } = data.current;
                    const { icon, text } = data.current.condition;
                    const { tz_id } = data.location;

                    // Set DOM Elements from the API
                    temperatureDegree.textContent = temp_c;
                    locationTimeZone.textContent = tz_id;
                    temperatureDescription.textContent = text;
                    iconEl.src = 'https://' + icon.slice(2);
                    console.log(iconEl.src)

                    //Change temperature to Celsium/Fahrenheit
                    temperatureSection.addEventListener('click', () => {
                        if (temperatureSpan.textContent === 'F') {
                            temperatureSpan.textContent = 'C';
                            temperatureDegree.textContent = temp_c;
                        } else {
                            temperatureSpan.textContent = 'F';
                            temperatureDegree.textContent = Math.floor(fahrenheit);
                        }
                    });

                    // Formula for Fahrenheit
                    let fahrenheit = (temp_c - 32) * (5 / 9)
                })
        });



    }
});