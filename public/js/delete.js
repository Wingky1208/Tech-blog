const postId = document.querySelector('input[name="post-id"]').value;

const deleteHandler = async function () {
    await fetch(`/api/post/${postId}`, {
        method: 'DELETE'
    });

    document.location.replace('/dashboard');
};


document
    .querySelector('#delete-btn')
    .addEventListener('click', deleteHandler);