import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Player} from "../models/player-interface";
import {PlayerService} from "../service/player.service";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  playerGroup$: Observable<Player[]>;
  player$: Observable<Player>;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerGroup$ = this.playerService.getPlayerGroupObservable();
  }

}
