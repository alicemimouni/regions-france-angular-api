import { Component, OnInit } from '@angular/core';
import { RegionsService } from 'src/services/regions.service';
import { Region } from 'src/model/region';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit {

    regions: Array<Region> = [];
    selectedCodeRegion: string = '';

  constructor(private RegionsService: RegionsService) { }

  ngOnInit(): void {
    this.RegionsService.getRegions().subscribe((regions) => {
      this.regions = regions;
    });
  }

}
