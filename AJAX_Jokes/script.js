document.getElementById('generate').addEventListener('click', loadJokes);

function loadJokes(e) {
    const number = Math.abs(document.getElementById('number').value);

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onprogress = function () {
        document.getElementById('output').innerHTML = "<h3>Loading Please Wait.....</h3>";
    }

    xhr.onload = function () {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);

            let output = '';

            if (response.type = 'success') {
                response.value.forEach(function (joke) {
                    output += `
            <ul>
              <li>Joke Id : ${joke.id}</li>
              <li>${joke.joke}</li>
              <br>
            </ul>
            `;
                });
            } else {
                output += `
          <ul>
            <li>Something went wrong</li>
          </ul>
            `;
            }
            document.getElementById('output').innerHTML = output;
        }
    }


    xhr.send();

    e.preventDefault();
}