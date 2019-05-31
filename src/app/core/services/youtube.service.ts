import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration } from '../api-confuguration';
import { YoutubeResponseModel } from 'src/app/models/youtube-response-model';
import { Observable } from 'rxjs';

@Injectable()
export class YoutubeService {

    private youtubeUrl: string;

    constructor(private http: HttpClient, private config: ApiConfiguration) { }

    getYoutubeData(): Observable<YoutubeResponseModel> {
        this.youtubeUrl = this.config.youtubeEndpoint;
        return this.http.get<YoutubeResponseModel>(this.youtubeUrl);
    }
}
