const { con } = require("./conectSQL");

// get all user
exports.Posts = (cb) => {

    con.query(`    
    SELECT 
        p.title,
        p.body,
        p.create_time, 
        u.id AS user_id, 
        u.fullName AS user_fullName
    FROM
        posts p
    LEFT JOIN 
        users u 
    on 
        u.id = p.user_id 
    ORDER BY 
        p.id DESC
    `, function (err, result, fields) {
        if (err) throw err;
        cb(null, result);
    });
}

// LIMIT 5 OFFSET 2

// // order by
//     con.query("SELECT * FROM posts ORDER BY fullName", function (err, result) {
//         if (err) throw err;
//         console.log(result);
//     });




// insert into
exports.PostCreate = (data, cb) => {
    var sql = `INSERT INTO posts (user_id,title, body) VALUES ('${data.user_id}','${data.title}','${data.body}')`;
    con.query(sql, function (err, result) {
        if (err) {
            cb(err, null)
        } else {
            con.query(`
            SELECT 
                p.title,
                p.body,
                p.create_time, 
                u.id AS user_id, 
                u.fullName AS user_fullName
            FROM
                posts p
            LEFT JOIN 
                users u 
            on 
                u.id = p.user_id  
            WHERE p.id = "${result.insertId}"
            `, function (err, r) {
                if (r.length == 1) {
                    cb(null, r[0])
                }
                else {
                    cb(r)
                }
            });
        }
    });
}