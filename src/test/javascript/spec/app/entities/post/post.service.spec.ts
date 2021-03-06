import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { PostService } from 'app/entities/post/post.service';
import { IPost, Post } from 'app/shared/model/post.model';

describe('Service Tests', () => {
  describe('Post Service', () => {
    let injector: TestBed;
    let service: PostService;
    let httpMock: HttpTestingController;
    let elemDefault: IPost;
    let expectedResult: IPost | IPost[] | boolean | null;
    let currentDate: moment.Moment;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(PostService);
      httpMock = injector.get(HttpTestingController);
      currentDate = moment();

      elemDefault = new Post(0, 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', currentDate, 'AAAAAAA');
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign(
          {
            publishedAt: currentDate.format(DATE_TIME_FORMAT),
          },
          elemDefault
        );

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a Post', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
            publishedAt: currentDate.format(DATE_TIME_FORMAT),
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            publishedAt: currentDate,
          },
          returnedFromService
        );

        service.create(new Post()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a Post', () => {
        const returnedFromService = Object.assign(
          {
            title: 'BBBBBB',
            metaTitle: 'BBBBBB',
            slug: 'BBBBBB',
            summary: 'BBBBBB',
            publishedAt: currentDate.format(DATE_TIME_FORMAT),
            content: 'BBBBBB',
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            publishedAt: currentDate,
          },
          returnedFromService
        );

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of Post', () => {
        const returnedFromService = Object.assign(
          {
            title: 'BBBBBB',
            metaTitle: 'BBBBBB',
            slug: 'BBBBBB',
            summary: 'BBBBBB',
            publishedAt: currentDate.format(DATE_TIME_FORMAT),
            content: 'BBBBBB',
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            publishedAt: currentDate,
          },
          returnedFromService
        );

        service.query().subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a Post', () => {
        service.delete(123).subscribe(resp => (expectedResult = resp.ok));

        const req = httpMock.expectOne({ method: 'DELETE' });
        req.flush({ status: 200 });
        expect(expectedResult);
      });
    });

    afterEach(() => {
      httpMock.verify();
    });
  });
});
