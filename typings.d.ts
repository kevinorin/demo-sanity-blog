export interface Post {
    _id: string;
    _createdAt: string;
    title: string;
    description: string;
    mainImage: {
        asset: {
            url: string;
        };
    };
    slug: {
        current: string;
    };
    author: {
        name: string;
        image: string;
    };
    body: [object];
}