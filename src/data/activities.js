const activities = [
    {
        type: "Caminha",
        // id of who created
        author_id: 1,
        description: "Leve caminhada",
        date: {
            day: 5,
            month: 12,
            year: 2019,
        },
        moment: {
            hour: "10:00",
            part_day: "AM"
        },
        place: {
            city: "Rio de Janeiro",
            coordinates: {
                latitude: 22.9749107,
                longitude: -43.6736966
            }
        }
    },
    {
        type: "Futebol",
        // id of who created
        author_id: 2,
        description: "Futebol com alguns amigos, precisamos de mais pessoas!",
        date: {
            day: 15,
            month: 12,
            year: 2019
        },
        moment: {
            hour: "05:00",
            part_day: "PM"
        },
        place: {
            city: "Rio de Janeiro",
            coordinates: {
                latitude: 22.9749107,
                longitude: -43.6736966
            }
        }
    }
]

export default activities;