import { HttpClient, HttpEvent, HttpEventType, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.local';

interface Artwork {
  /**
   * class artworkSchema(BaseModel):
    title: str
    description: str
    artist_id: int
    tags: List[int]
    text_content_location: str
    
   */

  title: string;
  description: string;
  artist_id: number;
  tags: number[];
  text_content_location: string;
}

interface Event {
  /**
    title: str
    creator: str
    creator_slug: str
    image: str
    tags : List[str]
    description: str
    date: strng
    significant_views: int
    start_date: string;
    end_date: string;
   */
  title: string;
  creator: string;
  creator_slug: string;
  image: string;
  tags: string[];
  description: string;
  date: string;
  significant_views: number;

  start_date: string;
  end_date: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArtshowService {
  post_file_url = environment.baseUrl + '/upload';

  constructor(private http: HttpClient) { }

  upload(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    console.log("Uploading to", this.post_file_url, formData);

    const req = new HttpRequest('POST', this.post_file_url, formData, {
      reportProgress: true
    });

    return this.http.request(req).pipe(
      map((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            return { status: 'progress', message: Math.round((100 * event.loaded) / event.total!) };
          case HttpEventType.Response:
            return event.body;
          default:
            return `Unhandled event: ${event.type}`;
        }
      })
    );
  }

  publishArtwork(artwork: Artwork): Observable<any> {
    // if (event_slug && event_slug !== '') {
    //   return this.http.post(environment.baseUrl + '/artwork?event_slug=' + event_slug, artwork);
    // } else {

    // }
    return this.http.post(environment.baseUrl + '/artwork', artwork);
  }



  getExploreArtworks(): Observable<any> {
    return this.http.get(environment.baseUrl + '/artwork');
  }

  getArtwork(slug: string, email: string | undefined): Observable<any> {
    if (email) {
      // So it returns if there is the permission for using it or not.
      return this.http.get(environment.baseUrl + '/artwork/' + slug + '?user_email=' + email);
    }
    return this.http.get(environment.baseUrl + '/artwork/' + slug);
  }

  toggleFavorite(slug: string, email: string): Observable<any> {

    // return this.http.get(environment.baseUrl + '/toggle_avorite', { artwork_slug: slug, user_email: email });
    return this.http.get(environment.baseUrl + '/toggle_favorite?artwork_slug=' + slug + '&user_email=' + email);
  }

  createTag(tag: string): Observable<any> {
    return this.http.post(environment.baseUrl + '/tag', { tag: tag });
  }

  getEvents(): Observable<any> {
    return this.http.get(environment.baseUrl + '/events');
  }

  getEventDetails(slug: string, email: string): Observable<any> {
    return this.http.get(environment.baseUrl + '/event/' + slug + '?user_email=' + email);
  }

  createEvent(event: Event): Observable<unknown> {
    return this.http.post(environment.baseUrl + '/event', event);
  }

  getFavoritedArtworks(email: string): Observable<any> {
    return this.http.get(environment.baseUrl + '/favorites?user_email=' + email);
  }

  getProfileByEmail(email: string): Observable<any> {
    return this.http.get(environment.baseUrl + `/profile?email=${email}`)
  }

  getProfileBySlug(slug_name: string): Observable<any> {
    return this.http.get(environment.baseUrl + `/profile/${slug_name}`)
  }

  deleteWorkBySlug(slug: string): Observable<any> {
    return this.http.delete(environment.baseUrl + `/work/${slug}`)

  }


  saveWorkUpdates(slug: string, model_data: any): Observable<any> {
    console.log("Calling ", environment.baseUrl, 'With Slug', slug, 'Model', model_data)
    return this.http.patch(environment.baseUrl + '/work/' + slug, model_data);

  }


  //   // 
  // @router.post('/event/join/{slug}')
  // async def join_event(competitionslug: str, user_email: str):

  toggleJoinEvent(slug: string, email: string): Observable<any> {
    return this.http.get(environment.baseUrl + '/event/join/' + slug + '?user_email=' + email);
  }







}
