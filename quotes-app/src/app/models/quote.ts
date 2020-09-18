// {
//     id: 123,
//     body: "Sed porttitor lectus nibh. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
//     user: {
//         id: 123,
//         age: 20
//     },
//     upVotes: 0,
//     toAge: 13
// },
import { User } from "./user";

export class Quote {
    id: number;
    body: string;
    user: User;
    upVotes: number;
    toAge: number;
}
