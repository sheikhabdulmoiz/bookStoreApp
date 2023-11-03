const GetBooks = async () => {
  try {
    const response = await fetch('https://books-list-api.vercel.app/books', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-api-key': '#b0@6hX8YasCq6^unOaPw1tqR',
      },
    });
    const json = await response.json();
    //   BooksCtx.getAllBook(json.data);
    return json.data;
  } catch (error) {
    console.log('Error in load Books from api.js');
  } 

};

export default GetBooks;
