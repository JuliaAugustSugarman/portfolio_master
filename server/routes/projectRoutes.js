//server/routes/project.router.js
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM projects';
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing SELECT project query', err);
            res.sendStatus(500);
        });
});

router.get('/details/:id', (req, res) => {
    const queryText = 'SELECT * FROM projects WHERE id=$1';
    pool.query(queryText, [req.params.id])
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing SELECT project query', err);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    const newProject = req.body;
    const queryText = `INSERT INTO "projects" ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id")
                    VALUES ($1, $2, $3, $4, $5, $6, $7)`;
    const queryValues = [
        newProject.name,
        newProject.description,
        newProject.thumbnail,
        newProject.website,
        newProject.github,
        newProject.date_completed,
        newProject.tag_id,
    ];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(201); })
        .catch((err) => {
            console.log('Error completing SELECT project query', err);
            res.sendStatus(500);
        });
});

// router.put('/', (req, res) => {
//     const updatedPlant = req.body;

//     const queryText = `UPDATE table_name
//   SET "name" = $1, 
//   "kingdom" = $2, 
//   "clade" = $3, 
//   "order" = $4, 
//   "family" = $5, 
//   "subfamily" = $6, 
//   "genus" = $7
//   WHERE id=$8;`;

//     const queryValues = [
//         updatedPlant.name,
//         updatedPlant.kingdom,
//         updatedPlant.clade,
//         updatedPlant.order,
//         updatedPlant.family,
//         updatedPlant.subfamily,
//         updatedPlant.genus,
//         updatedPlant.id,
//     ];

//     pool.query(queryText, queryValues)
//         .then(() => { res.sendStatus(200); })
//         .catch((err) => {
//             console.log('Error completing SELECT plant query', err);
//             res.sendStatus(500);
//         });
// });

router.delete('/:id', (req, res) => {

console.log(req.params);

    const queryText = 'DELETE FROM projects WHERE id=$1';
    pool.query(queryText, [req.params.id])
        .then(() => { res.sendStatus(200); })
        .catch((err) => {
            console.log('Error completing DELETE projects query', err);
            res.sendStatus(500);
        });
});

module.exports = router;
