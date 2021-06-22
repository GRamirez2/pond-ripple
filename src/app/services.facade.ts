import { HowItWorksService } from './how-it-works.service';
import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { sortReduceForUI } from './libs/helperFunctions';

/**
 * created by running ng g class Service --type facade
 */
@Injectable({
  providedIn: 'root'
})
export class ServicesFacade {
  // initial data
  private setInitialData = {
    "ss" : {
      "id": "",
      "stepNumber": "",
      "versionContent": [
        {
          "title": "",
          "body": "",
          "effectiveDate": ""
        }
      ]
    },
    "msi": {}
  }
  // Query => state flows out
  private allData = new BehaviorSubject(this.setInitialData);
  private selectedData = new BehaviorSubject(this.setInitialData);
  private mutations = new BehaviorSubject(null);

  public allData$ = this.allData.asObservable();
  public selectedData$ = this.selectedData.asObservable();
  public mutations$ = this.mutations.asObservable();

  constructor( private howItWorks: HowItWorksService){};

  // Command => Event flow in

  public loadData() {
    this.howItWorks.fetchData()
      .subscribe(data => {
        const ssData = { "ss": data, "msi": ""}
        this.allData.next(ssData)
        this.UiData(data);
        this.addNewData();
      });
    
  }

  private UiData(data){
    const newData = JSON.parse(JSON.stringify(data))
    this.selectedData.next(sortReduceForUI(newData))
  }


  public addNewData(){
    this.howItWorks.fetchMSI()
    .subscribe(data => {
      const currentState = this.allData.getValue();
      const partialState = data;
      // const nextState = Object.assign({}, currentState, partialState)
      const nextState = {
        ...currentState,
        'msi': partialState
      }
      this.allData.next(nextState)

    })
  }

}
