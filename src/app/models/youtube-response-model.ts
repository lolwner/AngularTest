import { YoutubeResponceItemModel } from './youtube-response-item-model';

class Id {
    public videoId: string;
}

export class YoutubeResponseModel {
    public items: YoutubeResponceItemModel[];
    public id: Id;
}
