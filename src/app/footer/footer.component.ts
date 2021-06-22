import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { HowItWorksService } from "../how-it-works.service"
import { ServicesFacade } from '../services.facade';
import { CleanData } from "./footerInterFaces"

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {

  $cleanData: CleanData;
  newData$: Observable<any> = this.servicesFacade.allData$;
  UIDatat$: Observable<any> = this.servicesFacade.selectedData$;

  constructor(
    private howitworksService: HowItWorksService,
    private servicesFacade: ServicesFacade
  ) { }

  /**
   * Fetch data from api, sort and reduce for UI
   */
  ngOnInit(): void {
    this.howitworksService.fetchData().subscribe(res => {
      this.saveUpdatedData(res);
    })
    this.reset();
  }

  /**
   * Created this function to do a simple unit test that the data was being sorted and Reduced correctly
   * @param res is the return from the api call
   */
  saveUpdatedData(res){
    this.$cleanData = this.sortReduceForUI(res);
    console.log('How it Works Data', this.$cleanData);
  }

  /**
   * @param data is the resturn from the data fetch
   * @returns sorted items with the versionContent reduced to the most recent date/time
   */
  sortReduceForUI(data){
    let sortedAndReduced = data.map(el => {
      if(el.versionContent.length > 1){
          let mostRecentDate = el.versionContent.reduce( (a,b) => a.effectiveDate > b.effectiveDate ? a : b)
          el.versionContent = [mostRecentDate];
        return el
      } else { return el}
    })
    return sortedAndReduced.sort((a, b) => a.stepNumber-b.stepNumber);
  }

  reset(){
    this.loadData();
  }

  loadData(){
    this.servicesFacade.loadData();
  }

}
