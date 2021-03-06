import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiDataUtils } from 'ng-jhipster';

import { IApplicationUser } from 'app/shared/model/application-user.model';

@Component({
  selector: 'jhi-application-user-detail',
  templateUrl: './application-user-detail.component.html',
})
export class ApplicationUserDetailComponent implements OnInit {
  applicationUser: IApplicationUser | null = null;

  constructor(protected dataUtils: JhiDataUtils, protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ applicationUser }) => (this.applicationUser = applicationUser));
  }

  byteSize(base64String: string): string {
    return this.dataUtils.byteSize(base64String);
  }

  openFile(contentType = '', base64String: string): void {
    this.dataUtils.openFile(contentType, base64String);
  }

  previousState(): void {
    window.history.back();
  }
}
