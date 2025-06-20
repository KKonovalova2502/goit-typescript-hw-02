export interface Image {
    id: string;
    created_at: string;
    alt_description: string | undefined;
    urls: {
        small: string;
        regular: string;
    };
    likes: number;
    user: {
        name: string;
        username: string;
    }
}

export interface FetchImagesResponse {
    results: Image[];
    total_pages: number;
  }
  