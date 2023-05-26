window.addEventListener('DOMContentLoaded', async () => {
    const url = 'http://localhost:8000/api/conferences/';

    try {
      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();

        const selectTag = document.getElementById("conference");
        for (let conference of data.conferences) {
          const option = document.createElement("option");
          option.value = conference.id;
          option.innerHTML = conference.name;
          selectTag.appendChild(option);
        }
      }

      const formTag = document.getElementById("create-presentation-form");
      formTag.addEventListener("submit", async (event) => {
        event.preventDefault();
        const formData = new FormData(formTag);
        const dictionary = Object.fromEntries(formData)
        const json = JSON.stringify(dictionary);

        const conferenceId = document.getElementById("conference").value;
        const presentationURL = `http://localhost:8000/api/conferences/${conferenceId}/presentations/`;

        try {
          const response = await fetch(presentationURL, {
            method: "POST",
            body: json,
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (response.ok) {
            formTag.reset();
            const newPresentation = await response.json();
            console.log(newPresentation);
          } else {
            throw new Error('Failed to create presentation.');
          }
        } catch (error) {
        //   console.error(error);
        }
      });
    } catch (error) {
    //   console.error(error);
    }
  });
