export function sortReduceForUI(data){
  let sortedAndReduced = data.map(el => {
    if(el.versionContent.length > 1){
        let mostRecentDate = el.versionContent.reduce( (a,b) => a.effectiveDate > b.effectiveDate ? a : b)
        el.versionContent = [mostRecentDate];
      return el
    } else { return el}
  })
  return sortedAndReduced.sort((a, b) => a.stepNumber-b.stepNumber);
}