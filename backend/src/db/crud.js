const db = require("./firebase.js");

// Obtener todos los usuarios
function getUsers(callback) {
    return db.collection("users").get()
        .then((docs) => {
            var arrayUsers = []
            docs.forEach((user) => {
                const obj = user.data();
                obj.uid = user.id;
                arrayUsers.push(obj);
            })
            // CUANDO LLEGAMOS ACÁ, SE DEBE ENVIAR LA RESPUESTA AL GET REQUEST
            callback(arrayUsers);
        }).catch((error) => {
            callback(`Error to get users ${error}`);
        })
}

// Obtener un usuario específico
function getUser(uid, callback) {
    return db.collection("users").doc(uid).get()
        .then((refDoc) => {
            callback(refDoc.data())
        })
        .catch((error) => {
            callback(`Error to get users ${error}`);
        })
}

// Crear un usuario
function addUser(user, callback) {
    return db.collection("users").add(user)
        .then(() => {
            callback("Success");
        })
        .catch((error) => {
            callback(`Error to add users ${error}`);
        })
}

//Actualizar los datos completos de un usuario
function updateUserTotally(uid, user, callback) {
    return db.collection("users").doc(uid).set(user)
        .then(() => {
            callback("Success");
        })
        .catch((error) => {
            callback(`Error to update user ${error}`);
        })
}

//Actualizar pacialmente los datos de un usuario
function updateUserPartially(uid, user, callback) {
    return db.collection("users").doc(uid).update(user)
        .then(() => {
            callback("Success");
        })
        .catch((error) => {
            callback(`Error to get users ${error}`);
        })
}

//Borrar los datos de un usuario
function deleteUser(uid, callback) {
    return db.collection("users").doc(uid).delete()
        .then(() => {
            callback("Success");
        })
        .catch((error) => {
            callback(`Error to get users ${error}`);
        })
}

//Buscar los datos de un usuario
function searchUser(name, callback) {
    return db.collection('users').where("name", "==", name).get()
        .then((refDoc) => {
            var arrayUsers = [];
            refDoc.forEach(doc => {
                //doc.id --> El id del documento         
                arrayUsers.push(doc.data());
            })
            callback(arrayUsers);
        })
        .catch((err) => {
            callback("Error to search expert ", err)
        })
}

module.exports = {
    getUsers,
    getUser,
    addUser,
    updateUserPartially,
    updateUserTotally,
    deleteUser, searchUser
}


// PARA PROBAR LOS METODOS
// correr node crudExperts.js

/*
// Obtener un doc, pasando un id
getExpert("aqui-va-id",(result) =>{
    console.log(result);
})

// Crear un nuevo documento
const expert = {
    "name": "Ciro",
    "location": "Bucaramanga, Colombia",
    "occupation": "Programador"
}

addExpert(expert, (status)=>{
    console.log(status);
})


const expert = {
    "location" : "Cartagena",
    "occupation": "Artista"
}

// Actualizar totalmente un documento
updateExpertTotally("Ellz8i4XbcwwlDhujAdO", expert, function(status){
    console.log(status);
})

// Actualizar parcialmente un documento
updateExpertPartially("Ellz8i4XbcwwlDhujAdO", expert, function(status){
    console.log(status);
})

// Borrar documento usando el id
deleteExpert("kH9pnrlHoFCuruwDv9a5", (status) =>{
    console.log(status);
})
*/


