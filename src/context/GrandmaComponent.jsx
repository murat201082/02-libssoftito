import { MommyComponent } from "./MommyComponent "

export const GrandmaComponent = () => {
    const quantity = 3;
    return(
        <div>
            
            <h1>Nine</h1>
            Nine Nicelik :
            <MommyComponent quantity = {quantity} />
            
        </div>
    )
}