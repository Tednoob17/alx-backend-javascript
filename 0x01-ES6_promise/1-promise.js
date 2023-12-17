export default function getFullResponseFromAPI(success) {
  if (success === true) {
    return new Promise((resolve) => {
      resolve({
        status: 200,
        body: 'Success',
      });
    });
  }

}
