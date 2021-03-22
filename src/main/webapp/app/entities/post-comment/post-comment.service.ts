import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IPostComment } from 'app/shared/model/post-comment.model';

type EntityResponseType = HttpResponse<IPostComment>;
type EntityArrayResponseType = HttpResponse<IPostComment[]>;

@Injectable({ providedIn: 'root' })
export class PostCommentService {
  public resourceUrl = SERVER_API_URL + 'api/post-comments';

  constructor(protected http: HttpClient) {}

  create(postComment: IPostComment): Observable<EntityResponseType> {
    return this.http.post<IPostComment>(this.resourceUrl, postComment, { observe: 'response' });
  }

  update(postComment: IPostComment): Observable<EntityResponseType> {
    return this.http.put<IPostComment>(this.resourceUrl, postComment, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IPostComment>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IPostComment[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
