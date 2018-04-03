var db = require("../models");

//hole data
db.Course.findAndCountAll({}).then(function(result) {
    if(result.count === 0) {
        db.Hole.create({
            hole_number: 1,
            par: 3,
            distance: 358,
            CourseId: 1
        });
        db.Hole.create({
            hole_number: 2,
            par: 3,
            distance: 230,
            CourseId: 1
        });
        db.Hole.create({
            hole_number: 3,
            par: 3,
            distance: 265,
            CourseId: 1
        });
        db.Hole.create({
            hole_number: 4,
            par: 3,
            distance: 420,
            CourseId: 1
        });
        db.Hole.create({
            hole_number: 5,
            par: 4,
            distance: 535,
            CourseId: 1
        });
        db.Hole.create({
            hole_number: 6,
            par: 3,
            distance: 276,
            CourseId: 1
        });
        db.Hole.create({
            hole_number: 7,
            par: 3,
            distance: 356,
            CourseId: 1
        });
        db.Hole.create({
            hole_number: 8,
            par: 3,
            distance: 247,
            CourseId: 1
        });
        db.Hole.create({
            hole_number: 9,
            par: 4,
            distance: 394,
            CourseId: 1
        });
        db.Hole.create({
            hole_number: 10,
            par: 3,
            distance: 328,
            CourseId: 1
        });
        db.Hole.create({
            hole_number: 11,
            par: 3,
            distance: 228,
            CourseId: 1
        });
        db.Hole.create({
            hole_number: 12,
            par: 3,
            distance: 177,
            CourseId: 1
        });
        db.Hole.create({
            hole_number: 13,
            par: 3,
            distance: 277,
            CourseId: 1
        });
        db.Hole.create({
            hole_number: 14,
            par: 3,
            distance: 273,
            CourseId: 1
        });
        db.Hole.create({
            hole_number: 15,
            par: 3,
            distance: 234,
            CourseId: 1
        });
        db.Hole.create({
            hole_number: 16,
            par: 3,
            distance: 215,
            CourseId: 1
        });
        db.Hole.create({
            hole_number: 17,
            par: 3,
            distance: 226,
            CourseId: 1
        });
        db.Hole.create({
            hole_number: 18,
            par: 3,
            distance: 300,
            CourseId: 1
        });
        db.Hole.create({
            hole_number: 1,
            par: 3,
            distance: 260,
            CourseId: 2
        });
        db.Hole.create({
            hole_number: 2,
            par: 3,
            distance: 240,
            CourseId: 2
        });
        db.Hole.create({
            hole_number: 3,
            par: 3,
            distance: 288,
            CourseId: 2
        });
        db.Hole.create({
            hole_number: 4,
            par: 4,
            distance: 538,
            CourseId: 2
        });
        db.Hole.create({
            hole_number: 5,
            par: 5,
            distance: 656,
            CourseId: 2
        });
        db.Hole.create({
            hole_number: 6,
            par: 3,
            distance: 317,
            CourseId: 2
        });
        db.Hole.create({
            hole_number: 7,
            par: 3,
            distance: 202,
            CourseId: 2
        });
        db.Hole.create({
            hole_number: 8,
            par: 3,
            distance: 329,
            CourseId: 2
        });
        db.Hole.create({
            hole_number: 9,
            par: 4,
            distance: 593,
            CourseId: 2
        });
        db.Hole.create({
            hole_number: 10,
            par: 3,
            distance: 260,
            CourseId: 2
        });
        db.Hole.create({
            hole_number: 11,
            par: 4,
            distance: 640,
            CourseId: 2
        });
        db.Hole.create({
            hole_number: 12,
            par: 4,
            distance: 715,
            CourseId: 2
        });
        db.Hole.create({
            hole_number: 13,
            par: 3,
            distance: 274,
            CourseId: 2
        });
        db.Hole.create({
            hole_number: 14,
            par: 4,
            distance: 550,
            CourseId: 2
        });
        db.Hole.create({
            hole_number: 15,
            par: 3,
            distance: 252,
            CourseId: 2
        });
        db.Hole.create({
            hole_number: 16,
            par: 3,
            distance: 215,
            CourseId: 2
        });
        db.Hole.create({
            hole_number: 17,
            par: 4,
            distance: 425,
            CourseId: 2
        });
        db.Hole.create({
            hole_number: 18,
            par: 4,
            distance: 530,
            CourseId: 2
        });
        db.Hole.create({
            hole_number: 1,
            par: 3,
            distance: 270,
            CourseId: 3
        });
        db.Hole.create({
            hole_number: 2,
            par: 3,
            distance: 264,
            CourseId: 3
        });
        db.Hole.create({
            hole_number: 3,
            par: 4,
            distance: 486,
            CourseId: 3
        });
        db.Hole.create({
            hole_number: 4,
            par: 3,
            distance: 318,
            CourseId: 3
        });
        db.Hole.create({
            hole_number: 5,
            par: 3,
            distance: 258,
            CourseId: 3
        });
        db.Hole.create({
            hole_number: 6,
            par: 3,
            distance: 385,
            CourseId: 3
        });
        db.Hole.create({
            hole_number: 7,
            par: 4,
            distance: 585,
            CourseId: 3
        });
        db.Hole.create({
            hole_number: 8,
            par: 3,
            distance: 290,
            CourseId: 3
        });
        db.Hole.create({
            hole_number: 9,
            par: 3,
            distance: 161,
            CourseId: 3
        });
        db.Hole.create({
            hole_number: 10,
            par: 3,
            distance: 384,
            CourseId: 3
        });
        db.Hole.create({
            hole_number: 11,
            par: 3,
            distance: 312,
            CourseId: 3
        });
        db.Hole.create({
            hole_number: 12,
            par: 3,
            distance: 283,
            CourseId: 3
        });
        db.Hole.create({
            hole_number: 13,
            par: 3,
            distance: 314,
            CourseId: 3
        });
        db.Hole.create({
            hole_number: 14,
            par: 4,
            distance: 640,
            CourseId: 3
        });
        db.Hole.create({
            hole_number: 15,
            par: 3,
            distance: 354,
            CourseId: 3
        });
        db.Hole.create({
            hole_number: 16,
            par: 3,
            distance: 347,
            CourseId: 3
        });
        db.Hole.create({
            hole_number: 17,
            par: 4,
            distance: 510,
            CourseId: 3
        });
        db.Hole.create({
            hole_number: 18,
            par: 3,
            distance: 373,
            CourseId: 3
        });
    };
});
module.exports = function(app) {

};