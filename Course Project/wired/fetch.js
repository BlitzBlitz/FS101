const fetchData = (url, doAfterGetDate, doAfterGetError) => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      doAfterGetDate(data);
    })
    .catch((error) => {
      doAfterGetError(error);
    });
};

export default fetchData;
