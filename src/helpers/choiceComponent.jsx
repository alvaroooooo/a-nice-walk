import Alternative from "./../components/Alternative";
import Favorite from "./../components/Favorite";
import Activity from "./../components/Activity";

function selectComponent(type, props) {
  let selectedComponent = null;
  switch (type) {
    case 'Alternative':
      selectedComponent = <Alternative props={props}/>
      break;
    case 'Favorite':
      selectedComponent = <Favorite props={props}/>
      break
    case 'Activity':
      selectedComponent = <Activity props={props}/>
    default:
      break;
  }

  return selectedComponent;
}

export default selectComponent