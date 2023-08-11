import { sequelize, Admin, Etablissement, Service, Users, Cart } from './app/models/initModels.js';

try {
    await sequelize.drop({ force: true });
    await sequelize.sync({ force: true });

    await Admin.create({
        mail: 'admin@admin.com',
        role: 'admin',
        password: 'admin',
    });

    const etablissement = await Etablissement.create({
        name: "Etablissement1",
        address: "4 rue de l'établissement",
        phone: "0680907008",
        image: "/uploads/timetravel.png",
    })

    await Service.create({
        name: "Degustation",
        price: 100,
        description: `Une superbe dégustation de whiskey`,
        guest: "20",
        extras:[
            {
                "nomExtra": "Billard",
                "prixExtra": 15
            }
        ],
        startDate: "2023-08-20",
        endDate: "2023-09-25",
        image: "/uploads/house.png",
        etablissementId: etablissement.id,
        durationNumber: "4",
        durationUnit: "Jour",
    });
    await Service.create({
        name: "VR",
        price: 25,
        description: `Description`,
        guest: "2",
        extras:[
            {
                "nomExtra": "Tapis de course",
                "prixExtra": 80
            }
        ],
        startDate: "2023-08-15",
        endDate: "2023-08-29",
        image: "/uploads/virtualroom.png",
        etablissementId: etablissement.id,
    });
    await Service.create({
        name: "SPA",
        price: 80,
        description: `Description`,
        guest: "2",
        extras:[
            {
                "nomExtra": "Massage",
                "prixExtra": 50
            }
        ],
        startDate: "2023-08-14",
        endDate: "2023-08-12",
        image: "/uploads/spaclarins.png",
        etablissementId: etablissement.id,
    });
    await Service.create({
        name: "Visite tour Eiffel",
        price: 70,
        description: `Description`,
        guest: "2",
        extras:[
            {
                "nomExtra": "Visite en tuk-tuk de la ville",
                "prixExtra": 25,
            },
            {
                "nomExtra": "Trocadero",
                "prixExtra": 10,
            }
        ],
        startDate: "2023-08-08",
        endDate: "2023-09-15",
        image: "/uploads/museum.png",
        etablissementId: etablissement.id,
    });

    // await Cart.create({
    //     date: "2023-08-16",
    //     userId: 1,
    //     serviceId: 1,
    //     tookPlace: 1,
    // })

    // await Users.create({
    //     mail: "osef@placeholder.com",
    //     address: "non",
    //     role: "client",
    //     lastname: "To",
    //     firstname: "To",
    //     number: "0604050807",
    //     password: "Samalekoum",
    // })
    
} catch (error) {
    console.error(error);
}
