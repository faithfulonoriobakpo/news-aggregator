export interface HeadlinePayload {
    category?: string,
    country?: string,
    q?: string,
    pageSize?: number,
    page?: number
};

export interface EverythingPayload {
    language?: string,
    q?: string,
    pageSize?: number,
    page?: number,
    from?: string,
    to?: string
};

export interface NewAPIResponse {
    status: string,
    totalResults: number,
    articles: Article[]
}

export interface Article {
    source: {
        id: any,
        name: string
    },
    author: string | null,
    title: string,
    description: string,
    url: string,
    urlToImage: string | null,
    publishedAt: string,
    content: string
}