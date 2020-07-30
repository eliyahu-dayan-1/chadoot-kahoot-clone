// import httpService from './httpService'
// import socketService from './socketService'
import Axios from 'axios';

const BASE_URL = (process.env.NODE_ENV !== 'development') ? '/api/collection' : '//localhost:3000';
const axios = Axios.create({
    withCredentials: true
});


export default {
    // login,
    // logout,
    // signup,
    getQuizs,
    saveQuiz,
    getEmptyQuiz,
    getQuizById,
    deleteQuizById,
    // remove,
    // update,
    // getUserFromSession,
    // clearNotifications
}

async function getQuizs() {
    const quizs = await Axios.get(`${BASE_URL}/quizs`)
    // console.log(quizs.data)
    return quizs.data
}

async function getQuizById(quizId) {
    const quizs = await Axios.get(`${BASE_URL}/quizs/${quizId}`)
    // console.log(quizs.data)
    return quizs.data
}

async function deleteQuizById(quizId) {
    console.log(quizId)
    try {
        await Axios.delete(`${BASE_URL}/quizs/${quizId}`)
        console.log(`sucsess in delete quiz ${id}`)
    } catch (err) {
        console.log(err, 'cant delete quiz')
    }
}


async function saveQuiz(quiz) {
    let quizReturn = null;

    try {
        if (quiz.id) quizReturn = await Axios.put(`${BASE_URL}/quizs/${quiz.id}`, quiz)
        else quizReturn = await Axios.post(`${BASE_URL}/quizs`, quiz)

        console.log("save", quizReturn.data)
        return quizReturn.data
    } catch (error) {
        console.log(`cant save quiz ${quiz.id}`)
    }
}


function getEmptyQuiz() {
    return {
        "volumeInfo": {
            "title": "",
            "authors": [
                ""
            ],
            "publisher": "",
            "publishedDate": "",
            "description": "",
            "pageCount": 202,
            "printType": "QUIZ",
            "categories": [
                ""
            ],
            "imageLinks": {
                "smallThumbnail": "",
                "thumbnail": ""
            },
            "language": "ja",
        },
        "saleInfo": {
            "country": "",
            "saleability": "",
            "isEquiz": null,
            "listPrice": {
                "amount": null,
                "currencyCode": null
            },
            "retailPrice": {
                "amount": null,
                "currencyCode": ""
            },
        }
    }
}

// function getById(quizId) {
//     return httpService.get(`quiz/${quizId}`)
// }

// function remove(quizId) {
//     return httpService.delete(`quiz/${quizId}`)
// }

// async function login(quizCred) {
//     const quiz = await httpService.post('auth/login', quizCred)
//     return _handleLogin(quiz)
// }

// async function signup(quizCred) {
//     const quiz = await httpService.post('auth/signup', quizCred)
//     return _handleLogin(quiz)
// }

// async function logout(quiz) {
//     quiz.isLogIn = false
//     await update(quiz)
//     socketService.off(`quiz-invite-${quiz._id}`)
//     socketService.off(`quiz-card-assign-${quiz._id}`)
//     let res = await httpService.post('auth/logout');
//    sessionStorage.clear();
//     return res
// }

// function clearNotifications(quiz) {
//     quiz.notifications.map(notifi => notifi.isRead = true)
//     update(quiz)
// }

// function _handleLogin(quiz) {
//     quiz.isLogIn = true ;
//     update(quiz)
//     socketService.emit('quiz login')
//     sessionStorage.setItem('quiz', JSON.stringify(quiz))
//     return quiz;
// }

// async function getUserFromSession() {


//     const session = await httpService.get('auth/session');

//     return session