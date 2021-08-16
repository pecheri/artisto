export function seedDatabase(firebase) {
    const photos = [
        {
            caption: 'first photo',
            comments: [
                {
                    comment: 'WOW',
                    displayName: 'ryo',
                    userId: '4DpcvYMkMZbCh4GntnwtFyikrlw2',
                },
                {
                    comment: 'cool',
                    displayName: 'kevin',
                    userId: 'S9UCWrf5IUX34n7mhBcWrZ8MIdT2',
                },
            ],
            dateCreated: 1628632279607,
            imageSrc:
                'https://images.pexels.com/photos/7763205/pexels-photo-7763205.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            like: ['S9UCWrf5IUX34n7mhBcWrZ8MIdT2'],
            photoId: '1',
            userId: 'eyRhMHRZR5TP4sADd0q277y7GdR2',
            userLatitude: 34.0522,
            userLongitude: -118.2437,
        },
        {
            caption: 'test',
            comments: [
                {
                    comment: 'aaa',
                    displayName: 'ryo',
                    userId: '4DpcvYMkMZbCh4GntnwtFyikrlw2',
                },
            ],
            dateCreated: 1628632279700,
            imageSrc:
                'https://images.pexels.com/photos/5325842/pexels-photo-5325842.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            like: ['4DpcvYMkMZbCh4GntnwtFyikrlw2'],
            photoId: '2',
            userId: 'S9UCWrf5IUX34n7mhBcWrZ8MIdT2',
            userLatitude: 34.0522,
            userLongitude: -118.2437,
        },
        {
            caption: 'hello',
            comments: [
                {
                    comment: '',
                    displayName: '',
                    userId: '',
                },
            ],
            dateCreated: 1628632279800,
            imageSrc:
                'https://images.pexels.com/photos/5271640/pexels-photo-5271640.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            like: [],
            photoId: '3',
            userId: '4DpcvYMkMZbCh4GntnwtFyikrlw2',
            userLatitude: 34.0522,
            userLongitude: -118.2437,
        },
        {
            caption: 'test 4',
            comments: [
                {
                    comment: 'tete',
                    displayName: 'ryo',
                    userId: '4DpcvYMkMZbCh4GntnwtFyikrlw2',
                },
            ],
            dateCreated: 1628632279900,
            imageSrc:
                'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            like: ['4DpcvYMkMZbCh4GntnwtFyikrlw2'],
            photoId: '4',
            userId: 'eyRhMHRZR5TP4sADd0q277y7GdR2',
            userLatitude: 34.0522,
            userLongitude: -118.2437,
        },
        {
            caption: 'last photo',
            comments: [
                {
                    comment: 'hahaha',
                    displayName: 'kagaya',
                    userId: '4DpcvYMkMZbCh4GntnwtFyikrlw2',
                },
            ],
            dateCreated: 1628632279900,
            imageSrc:
                'https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            like: ['4DpcvYMkMZbCh4GntnwtFyikrlw2'],
            photoId: '5',
            userId: 'eyRhMHRZR5TP4sADd0q277y7GdR2',
            userLatitude: 34.0522,
            userLongitude: -118.2437,
        },
    ];
    for (let i = 0; i < photos.length; i++) {
        firebase.firestore().collection('photos').add(photos[i]);
    }
}
