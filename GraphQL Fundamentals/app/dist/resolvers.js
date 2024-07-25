import db from './db.js';
export const resolvers = {
    Query: {
        games: () => {
            return db.games;
        },
        game: (_, args) => {
            return db.games.find((game) => game.id === args.id);
        },
        authors: () => {
            return db.authors;
        },
        author: (_, args) => {
            return db.authors.find((author) => author.id === args.id);
        },
        reviews: () => {
            return db.reviews;
        },
        review: (_, args) => {
            return db.reviews.find((review) => review.id === args.id);
        }
    },
    Game: {
        reviews: (parent) => {
            return db.reviews.filter((review) => review.game_id === parent.id);
        }
    },
    Mutation: {
        deleteGame: (_, args) => {
            return db.games.filter((game) => game.id !== args.id);
        },
        addGame: (_, args) => {
            // create an instance of game
            let game = {
                ...args.game,
                id: Date.now()
            };
            // add game to "database"
            db.games.push(game);
            return game;
        }
    }
};
