const axios = require("axios");

// GET方法模糊查询repository
//https://api.github.com/search/repositories?q=${要查询的repo名}&client_id=undefined&client_secret=undefined&sort=stars&order=desc
function searchRepo(repoName) {
    axios.get(`https://api.github.com/search/repositories?q=${repoName}&client_id=undefined&client_secret=undefined&sort=stars&order=desc`)
    .then(data => {
        console.log(data.data);
    });
}

// searchRepo("angular");

// GET方法模糊查询users
function searchUsers(userName) {
    axios.get(`https://api.github.com/search/users?q=${userName}&client_id=undefined&client_secret=undefined`)
        .then(data => {
            console.log(data.data);
        });
}
// searchUsers("YellowBean"); 

//GET方法查询具体的一个user
function getUserDetail(userName) {
    axios.get(`https://api.github.com/users/${userName}?client_id=undefined&client_secret=undefined`)
        .then(data => {
            console.log(data.data);
        });
}
// getUserDetail("Bean19940228");

//GET方法查询具体的一个user的所有repo信息
// 这条url返回的数据可以在上一个方法的返回数据中的一个url中获取到
// 但这个增加了一些排序等条件
function fetchUserRepo(userName) {
    axios.get(`https://api.github.com/users/${userName}/repos?per_page=300&sort=updated:asc&client_id=undefined&client_secret=undefined`)
        .then(data => {
            console.log(data.data);
        });
}

fetchUserRepo("Sy7777");