function createCard(name, description, pictureUrl) {
    return `
    <div class="card m-4">
        <div class="card shadow">
        <img src="${pictureUrl}" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${description}</p>
        </div>
    </div>
    `;
}



window.addEventListener('DOMContentLoaded', async () => {
    const url = 'http://localhost:8000/api/conferences/';

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Error getting data from API.');

        } else {
            const data = await response.json();

            let index = 0;
            for (let conference of data.conferences) {
                const detailUrl = `http://localhost:8000${conference.href}`;
                const detailResponse = await fetch(detailUrl);
                if (detailResponse.ok) {
                    const details = await detailResponse.json();
                    const title = details.conference.name;
                    const description = details.conference.description
                    const pictureUrl = details.conference.location.picture_url;
                    // const location = details.conference.location.name;
                    // const starts = details.conference.starts;
                    // const ends = details.conference.ends;
                    const html = createCard(title, description, pictureUrl);
                    const column = document.querySelector(`#col-${index}`);
                    column.innerHTML += html;
                    index += 1;
                    if (index > 2) {
                        index = 0;
                    }

                }
            }
        }
    } catch (e) {
        console.error(e)

    }


});
