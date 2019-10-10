import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class TechnologyService {

  constructor(private db: AngularFireDatabase) {
  }

  public getTechnologies() {
    return this.db.list<Technology>('technologies').valueChanges();
  }

}
