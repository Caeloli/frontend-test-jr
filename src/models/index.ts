export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string
            lng: string
        }
    },
    phone: string
    website: string
    company: {
        name: string
        catchPhrase: string
        bs: string
    }
}

export interface Post{
    userId: number,
    id: number,
    title: string,
    body: string,
    comments: PostComment[]
}

export interface PostComment{
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

export interface ToDos{
    userId: number,
    id: number,
    title: string,
    completed: boolean
}