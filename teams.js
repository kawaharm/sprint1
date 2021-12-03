const {
    Team,
    School,
    Conference
} = require('./models');

// Add Team
Team.create({
    ranking: 1,
    school: 'Georgia',
    record: 1.00
})
    .then(function (newTeam) {
        console.log('NEW TEAM', newTeam.toJSON());
        // Add Team
        newTeam.createSchool({
            name: 'University of Georgia',
            location: 'Athens, Georgia'
        })
            .then(function (newSchool) {
                console.log('NEW SCHOOL', newSchool.toJSON());
                // Add Conference
                newSchool.createConference({
                    name: 'SEC'
                })
                    .then(function (newConference) {
                        console.log('NEW CONFERENCE', newConference.toJSON());
                    })
            })
    })
    .catch(function (error) {
        console.log(error);
    });

// Album.create({
//     title: 'Certified Lover Boy',
//     year: 2021,
//     length: 86,
//     tracks: 21
// })
//     .then(function (newAlbum) {
//         console.log('NEW ALBUM', newAlbum.toJSON());
//     })
//     .catch(function (error) {
//         console.log('ERROR', error);
//     })

// // find Drake in DB
// Artist.findOne({
//     where: { name: 'Drake' }
// })
//     .then(function (artist) {
//         console.log('FOUND ARTIST', artist.toJSON());
//         // find the album in the database (Certified Lover Boy)
//         // --------------------------------------------
//         Album.findOne({
//             where: { title: 'Certified Lover Boy' }
//         })
//             .then(function (album) {
//                 console.log('FOUND ALBUM', album.toJSON());
//                 artist.addAlbum(album); // artistId will get added to the album
//                 artist.save(); // tell the SQL data to save the information as such....

//             })
//             .catch(function (err) {
//                 console.log('ERROR', err);
//             })
//         // --------------------------------------------
//     })
//     .catch(function (err) {
//         console.log('ERROR', err);
//     })