export interface IApplicationUser {
  id?: number;
  mobile?: string;
  intro?: string;
  profile?: any;
}

export class ApplicationUser implements IApplicationUser {
  constructor(public id?: number, public mobile?: string, public intro?: string, public profile?: any) {}
}
