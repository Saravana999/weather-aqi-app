document.addEventListener("DOMContentLoaded", function () {
    if (pollutionData) {
        let pollutionLevels = pollutionData.list[0].components;

        new Chart(document.getElementById("pollutionChart"), {
            type: "bar",
            data: {
                labels: ["PM2.5", "PM10", "CO", "NO2", "SO2", "O3"],
                datasets: [{
                    label: "Pollutant Concentration (µg/m³)",
                    data: [
                        pollutionLevels.pm2_5, 
                        pollutionLevels.pm10, 
                        pollutionLevels.co, 
                        pollutionLevels.no2, 
                        pollutionLevels.so2, 
                        pollutionLevels.o3
                    ],
                    backgroundColor: ["red", "orange", "yellow", "green", "blue", "purple"]
                }]
            }
        });
    }

    if (temperatureForecast) {
        let hourlyTemp = temperatureForecast.hourly.temperature_2m;
        let labels = Array.from({ length: hourlyTemp.length }, (_, i) => i + ":00");

        new Chart(document.getElementById("temperatureChart"), {
            type: "line",
            data: {
                labels: labels,
                datasets: [{
                    label: "Temperature (°C)",
                    data: hourlyTemp,
                    borderColor: "blue",
                    fill: false
                }]
            }
        });
    }
});
