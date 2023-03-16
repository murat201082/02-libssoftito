import { DautherComponent } from "./DautherComponent"

export const MommyComponent = ({quantity}) => {
    return(
        <div>
            
            <h3>Anne</h3>
            Anne Nicelik : {quantity}
            <DautherComponent quantity = {quantity}/>
            
        </div>
    )
}