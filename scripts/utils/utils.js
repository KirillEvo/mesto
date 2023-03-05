import { valueTitile, valueDesc } from "./constants.js"

export function addInputText (items){
  valueTitile.value = items.name;
  valueDesc.value = items.info;
}
