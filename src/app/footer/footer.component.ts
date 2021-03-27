import { Component, OnInit } from '@angular/core';
import { HowItWorksService } from "../how-it-works.service"
import { CleanData } from "./footerInterFaces"

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {

  $cleanData: CleanData;

  constructor(
    private howitworksService: HowItWorksService
  ) { }

  /**
   * Fetch data from api, sort and reduce for UI
   */
  ngOnInit(): void {
    this.howitworksService.fetchData().subscribe(res => {
      this.$cleanData = this.sortReduceForUI(res)
      console.log(this.$cleanData)
    })
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

}
