const loadData = () =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayResult(data));
}
// loadData();

const displayResult = comments => {
    const commentContainer = document.getElementById('comments');
    comments.forEach(comment => {
        console.log(comment)
        const div = document.createElement('div');
        div.innerHTML = `
            <h4>${comment.email}</h4>
            <p>${comment.body}</p>
            <button onclick ="loadCommentById('${comment.id}')">Details</button>
        `;
        commentContainer.appendChild(div);
    });
}

const loadCommentById = id => {
    const url = `https://jsonplaceholder.typicode.com/comments/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayDetail(data));
}

const displayDetail = comment => {
    const detailContainer = document.getElementById('comment-detail');
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    commentDiv.innerHTML = `
        <h5>id: ${comment.id}</h5>
        <p>name: ${comment.name}</p>
        <p>email: ${comment.email}</p>
        <p>body: ${comment.body}</p>
    `;
    detailContainer.appendChild(commentDiv);
}