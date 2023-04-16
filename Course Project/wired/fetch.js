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

const postData = (url, body, doAfterGetDate, doAfterGetError) => {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      Accept: "application.json",
    },
  })
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
export { postData };
