// sql.js

// 전체조회
let boardList =
`SELECT no
        , title
        , writer
        , content
        , created_date
        , updated_date
FROM t_board_board
order by no`;

// 단건조회
let boardInfo =
`SELECT no
        , title
        , writer
        , content
        , created_date
        , updated_date
FROM t_board_board
WHERE no = ?`;

// 등록
let boardInsert =
`INSERT INTO t_board_board
SET ?`;

// 수정
let boardUpdate =
`UPDATE t_board_board
SET ?
WHERE no = ?`;

module.exports = {
        boardList,
        boardInfo,
        boardInsert,
        boardUpdate
}