// ERROR

function error() {
    const title = document.createElement('title');
    title.textContent('Error 404, page not found');
    return title;
}

export default error;