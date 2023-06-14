let fetchRes= fetch("https://jsonplaceholder.typicode.com/posts/1/comments");
     fetchRes.then(res =>res.json())
        .then(d => console.log(d))











