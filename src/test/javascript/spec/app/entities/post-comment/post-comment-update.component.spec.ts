import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { BloggerTestModule } from '../../../test.module';
import { PostCommentUpdateComponent } from 'app/entities/post-comment/post-comment-update.component';
import { PostCommentService } from 'app/entities/post-comment/post-comment.service';
import { PostComment } from 'app/shared/model/post-comment.model';

describe('Component Tests', () => {
  describe('PostComment Management Update Component', () => {
    let comp: PostCommentUpdateComponent;
    let fixture: ComponentFixture<PostCommentUpdateComponent>;
    let service: PostCommentService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [BloggerTestModule],
        declarations: [PostCommentUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(PostCommentUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(PostCommentUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(PostCommentService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new PostComment(123);
        spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.update).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));

      it('Should call create service on save for new entity', fakeAsync(() => {
        // GIVEN
        const entity = new PostComment();
        spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.create).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));
    });
  });
});
