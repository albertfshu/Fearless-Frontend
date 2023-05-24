window.addEventListener('DOMContentLoaded', async () => {
    const url = 'http://localhost:8000/api/states/';
    try {

      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();


        const selectTag = document.getElementById("state");
        for (let state of data.state) {
          const option = document.createElement("option");
          option.value = state.abbreviation;
          option.innerHTML = state.name + " (" + state.abbreviation + ")";
          selectTag.appendChild(option);
        }
      }

      const formTag = document.getElementById("create-location-form");
      formTag.addEventListener("submit", async event => {
        event.preventDefault();
        const formData = new FormData(formTag);
        const json = JSON.stringify(Object.fromEntries(formData.entries()));
        console.log(json);

        const locationURL = "http://localhost:8000/api/locations/";
        const fetchConfig = {
          method: "POST",
          body: json,
          headers: {
            "Content-Type": "application/json",
          },
        };
        const response = await fetch(locationURL, fetchConfig);
        if (response.ok) {
          formTag.reset();
          const newLocation = await response.json();

        }
      });
    } catch (e) {
      console.error(e);
    }
  });
