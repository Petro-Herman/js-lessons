const URL = "https://66891f790ea28ca88b870795.mockapi.io/books";


/**
 * Read (GET)
 */

function fetchBooks() {
    return fetch(`${URL}/books`).then(res => {
        if (!res.ok) {
            throw new Error(res.status);
        };
        return res.json();
    });
}

// fetchBooks().then((books) => console.log("Books:", books)).catch(err => console.error(err));



function fetchBookById(bookId) {
return fetch(`${URL}/books/${bookId}`).then((res) => {
  if (!res.ok) {
    throw new Error(res.status);
  }

  return res.json();
});
}

// fetchBookById(2).then(console.log).catch(console.error);
// fetchBookById(3).then(console.log).catch(console.error);
// fetchBookById(4).then(console.log).catch(console.error);

// fetchBookById(2).then(console.log).catch(console.error);
// fetchBookById(3).then(console.log).catch(console.error);
// fetchBookById(4)
//   .then(console.log)
//   .catch((_) => console.log("Такої книжки не існує"));// (_) коли не використовується

// /**
//  * Create (POST) - створює новий ресурс на сервері
//  */

function addBook(book) {

}
/*
    method: "POST", - описує HTTP метод який зараз буде передаватись
    body: JSON.stringify(book), - описує тіло запиту, тобто ті дані які ми хочемо передати на сервер (у фрматі JSON)
    header: { - список заголовків, тобто технічної інфонмації
    "Content-Type": "application/json", - один з заголовків який вказує тип контенту який ми передаємо на сервер, список усіх MIME типів можна вивчити за наступним посиланням: 
    https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
    Список всіх можливих заголовків: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers 
  */
//   const options = {
//     method: "POST",
//     body: JSON.stringify(book),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   return fetch(`${URL}/books`, options).then((res) => {
//     if (!res.ok) {
//       throw new Error(res.status);
//     }

//     return res.json();
//   });
// }

// // addBook({
// //   title: "Тестова книга з CSS",
// //   author: "Я",
// //   genres: ["CSS"],
// //   rating: 9,
// // })
// //   .then((book) => {
// //     console.log("Прийшла відповідь від бекенда можна малювати");
// //     console.log(book);
// //   })
// //   .catch((error) => console.log(error));

// // addBook({
// //   title: "Тестова книга з HTML",
// //   author: "Я",
// //   genres: ["HTML"],
// //   rating: 7,
// // })
// //   .then((book) => {
// //     console.log("Прийшла відповідь від бекенда можна малювати");
// //     console.log(book);
// //   })
// //   .catch((error) => console.log(error));

// /**
//  * Update (PUT/PATCH)
//  */

// /*
// в базі є обʼєкт:
// {
//     title: "Тестова книга з CSS",
//     author: "Я",
//     genres: ["CSS"],
//     rating: 9,
//     id: "1"
// }
// ці два методи оновлюють вже існуючі дані на сервері

// * PUT - повне оновлення даних (також цей метод може створити дані на сервері якщо їх не було, наприклад, коли ви намагаєтесь оновити неіснуючі дані)
// body: {
//   title: "Оновлена тестова книга по CSS",
//   author: "Оновлений автор я"
// }

// Отримаємо наступну відповідь від серверу:

// {
//   title: "Оновлена тестова книга по CSS",
//   author: "Оновлений автор я",
//   id: "1"
// }


// * PATCH - часткове оновлення даних
// body: {
//   title: "Оновлена тестова книга по CSS",
//   author: "Оновлений автор я"
// }

// Отримаємо наступну відповідь від серверу:
// {
//   title: "Оновлена тестова книга по CSS",
//   author: "Оновлений автор я",
//   genres: ["CSS"],
//   rating: 9,
//   id: "1"
// }


// */

// function updateBookById(update, bookId) {
//   const options = {
//     method: "PATCH",
//     body: JSON.stringify(update),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   return fetch(`${URL}/books/${bookId}`, options).then((res) => {
//     if (!res.ok) {
//       throw new Error(res.status);
//     }

//     return res.json();
//   });
// }
// //* Екстеншн для розблоковки корсів локалхосту: https://chromewebstore.google.com/detail/moesif-origincors-changer/digfbfaphojjndkpccljibejjbppifbc

// // updateBookById({ title: "Велика нова книга по NODEJS" }, 4)
// //   .then((res) => {
// //     console.log("Успішно оновлено книгу!");
// //     console.log("Response:", res);
// //   })
// //   .catch(console.log);

// // updateBookById({ rating: 1 }, 5)
// //   .then((res) => {
// //     console.log("Успішно оновлено книгу!");
// //     console.log("Response:", res);
// //   })
// //   .catch(console.log);

// // updateBookById({ rating: 4, author: "Манго" }, 6)
// //   .then((res) => {
// //     console.log("Успішно оновлено книгу!");
// //     console.log("Response:", res);
// //   })
// //   .catch(console.log);

// /**
//  * Delete (DELETE) - видаляє дані з серверу по id
//  */

// function removeBook(bookId) {
//   const options = {
//     method: "DELETE",
//   };

//   return fetch(`${URL}/books/${bookId}`, options).then((res) => {
//     if (!res.ok) {
//       throw new Error(res.status);
//     }

//     return res.json();
//   });
// }

// removeBook(5)
//   .then((res) => {
//     console.log("Успішно видалено книжку!");
//     console.log(res);
//   })
//   .catch(console.log);

// removeBook(8)
//   .then((res) => {
//     console.log("Успішно видалено книжку!");
//     console.log(res);
//   })
//   .catch(console.log);
