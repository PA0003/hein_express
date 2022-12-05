const { con } = require("./conectSQL")

// get all user
exports.Users = (cb) => {
    con.query("SELECT * FROM users ORDER BY id DESC", function (err, result, fields) {
        if (err) throw err;
        cb(null, result);
    });
}

// LIMIT 5 OFFSET 2

// // order by
//     con.query("SELECT * FROM users ORDER BY fullName", function (err, result) {
//         if (err) throw err;
//         console.log(result);
//     });




// insert into
exports.UserCreate = (data, cb) => {
    var sql = `INSERT INTO users (fullName, username, password, email, phone) VALUES ('${data.fullName}','${data.username}', '${data.password}', '${data.email}','${data.phone}')`;
    con.query(sql, function (err, result) {
        if (err) {
            cb(err, null)
        } else {
            con.query(`SELECT * FROM users WHERE id = "${result.insertId}"`, function (err, r) {
                if (r.length == 1) {
                    cb(null, r)
                }
                else {
                    cb(r)
                }
            });
        }
    });
}
// //whare
//     con.query("SELECT * FROM users WHERE id = '2'", function (err, result) {
//         if (err) throw err;
//         console.log(result);
//     });
exports.findUserByUP = (params, cb) => {
    con.query(`SELECT id,username, fullName, email, phone, role FROM users WHERE username = "${params.username}" AND password = "${params.password}"`, function (err, result) {
        if (result.length == 1) {
            cb(null, result[0])
        }
        else {
            cb(result)
        }
    });
}

// update
exports.UserUpdate = (parms, cb) => {
    var sql = `UPDATE users SET fullName='${parms.fullName}', password='${parms.password}', email='${parms.email}', phone='${parms.phone}' WHERE id = '${parms.id}'`;
    con.query(sql, function (err, result) {
        if (err) {
            cb(err)
        } else {
            con.query(`SELECT * FROM users WHERE id = "${parms.id}"`, function (err, r) {
                if (r.length == 1) {
                    cb(null, r)
                }
                else {
                    cb(r)
                }
            });
        }
        // console.log(result.affectedRows + " record(s) updated");
    });
}

//delete
exports.UserDelete = (params, cb) => {
    var sql = `DELETE FROM users WHERE id = '${params.id}'`;
    con.query(sql, function (err, result) {
        if (err) {
            cb(err)
        } else {
            cb(null, result)
        };
    });
}



// // join table
// // https://www.w3schools.com/nodejs/nodejs_mysql_join.asp
// con.connect(function (err) {
//     if (err) throw err;
//     var sql = "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log(result);
//     });
// });