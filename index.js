window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimeZone = document.querySelector('.location-timezone');
    let iconImg = document.querySelector('.icon');
    let temperatureSection = document.querySelector('.temperature-section');
    let temperatureSpan = document.querySelector('.temperature-section span');
    
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
                    const { country, tz_id } = data.location;

                    // Set DOM Elements from the API
                    temperatureDegree.textContent = temp_c;
                    locationTimeZone.textContent = country;
                    temperatureDescription.textContent = text;
                    // iconImg.src = icon;
                    // console.log(icon)

                    //Change temperature to Celsium/Fahrenheit
                    temperatureSection.addEventListener('click', () => {
                        if(temperatureSpan.textContent === 'F') {
                            temperatureSpan.textContent = 'C';
                            temperatureDegree.textContent = temp_c;
                        }else{
                            temperatureSpan.textContent = 'F';
                            temperatureDegree.textContent =  Math.floor(fahrenheit);
                        }
                    });

                    // Formula for Fahrenheit
                    let fahrenheit = (temp_c - 32)*(5/9) 
                })
                // function setIcons(icon, code) {
                //     const iconFromApi =  data.current.condition.icon;
                //     console.log(iconFromApi)
                // };
        });

       

    }
});