export interface Ipost {

    _id: string;
    likes: string[];
    text: string;
    userId: {
        _id: string;
        themes: string[];
        posts: string[];
        tel: string;
        email: string;
        username: string;
        password: string;
        created_at: string;
        updatedAt: string;
        __v: number;
    }
    themeId: {
        _id: string;
        subscribers: string[];
        posts: string[];
        themeName: string;
        userId: string;
        created_at: string;
        updatedAt: string;
        __v: number;
    }
    created_at: string;
    updatedAt: string;
    __v: number;
}