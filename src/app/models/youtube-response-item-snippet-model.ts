class Default {
    public url: string;
}

class Thumbnail {
    public default: Default;
    }

export class YoutubeResponseItemSnippetModel {
    public description: string;
    public publishedAt: string;
    public title: string;
    public videoLink: string;
    public thumbnails: Thumbnail;
}

// export class YoutubeResponseItemSnippetModelItem {
//     public description: string;
//     public publishedAt: string;
//     public title: string;
//     public thumbnail: string;
// }
