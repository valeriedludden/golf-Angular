import { Injectable } from '@angular/core';
import {Company} from "../../../../angularfire-example/src/app/models/company";
import {AngularFireDatabase, AngularFireList, AngularFireObject, SnapshotAction} from "@angular/fire/database";
import {Player} from "../models/player-interface";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  // private playerRef: AngularFireObject<Player>;
  // private playerGroupRef: AngularFireList<Player>;


  // constructor(private db: AngularFireDatabase) {
  // this.playerRef = this.db.object<Player>(`player`);
  // this.playerGroupRef = this.db.list<Player>(`playerGroup`);
  // }

  // getPlayerGroupObservable(): Observable<Player[]>{
  //   return this.playerGroupRef.snapshotChanges()
  //     .pipe(
  //       map((items: SnapshotAction<Player>[]): Player[] => {
  //         return items.map((item: SnapshotAction<Player>): Player => {
  //           return {
  //             name: item.payload.val().name,
  //             id: item.payload.val().id,
  //           } as Player;
  //         });
  //       })
  //     );
  //
  // }

  // savePlayer(player: Player) {
  //   return this.playerGroupRef.push(player)
  //     .then(_ => console.log('Success on set'));
  // }
  //
  // removePlayer(name: string) {
  //   this.playerGroupRef.remove()
  //     .then(_ => console.log('Success on remove'))
  //     .catch(error => console.log('remove', error));
  //   return this.playerGroupRef.remove(name)
  // }

}
