// sql.js

let list =
`SELECT no
        , title
        , writer
        , content
        , created_date
        , updated_date
FROM t_board_board`;

let info =
`SELECT no
        , title
        , writer
        , content
        , created_date
        , updated_date
FROM t_board_board
WHERE no = ?`;

let insert =
`INSERT INTO t_board_board
SET ?`;

let update =
`UPDATE t_board_board
SET ?
WHERE no = ?`;

module.exports = {
    list,
    info,
    insert,
    update
}