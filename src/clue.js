// ITERATION 1

// Suspects Collection
const suspectsArray = [
        {
        firstName: 'Jacob',
        lastName: 'Green',
        occupation: 'Entrepreneur',
        age: 45,
        description: 'He has a lot of connections',
        image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
        color: 'green'
        },
        {
        firstName: 'Doctor',
        lastName: 'Orchid',
        occupation: 'Scientist',
        age: 26,
        description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
        image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
        color: 'white',
        },
        {
        firstName: 'Victor',
        lastName: 'Plum',
        occupation: 'Designer',
        age: 22,
        description: 'Billionaire video game designer',
        image: 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg' ,
        color: 'purple',
        },
        {
        firstName: 'Kasandra',
        lastName: 'Scarlet',
        occupation: 'Actor',
        age: 31,
        description: 'She is an A-list movie star with a dark past',
        image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
        color: 'red',
        },
        {
        firstName: 'Eleanor',
        lastName: 'Peacock',
        occupation: 'Socialité',
        age: 36,
        description: 'She is from a wealthy family and uses her status and money to earn popularity',
        image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
        color: 'blue',
        },
        {
        firstName: 'Jack',
        lastName: 'Mustard',
        occupation: 'Retired Football player',
        age: 62,
        description: 'He is a former football player who tries to get by on his former glory',
        image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
        color: 'yellow',
    }
];

// Rooms Collection
const roomsArray = [
{room: 'Dining Room'},
{room:  'Conservatory'},
{room:  'Kitchen'},
{room:  'Study'},
{room:  'Library'},
{room:  'Billiard Room'},
{room:  'Lounge'},
{room:  'Ballroom'},
{room:  'Hall'},
{room:  'Spa'},
{room:  'Living Room'},
{room:  'Observatory'},
{room:  'Theater'},
{room:  'Guest House'},
{room:  'Patio'},
];

// Weapons Collection
const weaponsArray = [
{weapon: 'rope', weight: 10},
{weapon: 'knife', weight: 8},
{weapon: 'candlestick', weight: 2},
{weapon: 'dumbbell', weight: 30},
{weapon: 'poison', weight: 2},
{weapon: 'axe', weight: 15},
{weapon: 'bat', weight: 13},
{weapon: 'trophy', weight: 25},
{weapon: 'pistol', weight: 20},
];

function selectRandom(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}

function pickMystery(){
    return {
        suspect: selectRandom(suspectsArray),
        weapon: selectRandom(weaponsArray),
        room: selectRandom(roomsArray)

    }

function revealMystery(envelope){
    return(`${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.weapon} in the ${envelope.room.room!`)
}