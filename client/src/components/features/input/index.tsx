import * as C from './styles'
type inputType = {
    placeholder: string
    type: string
    value?: string | number
    required?: boolean
    onChangeHandler?: (e:any)=>void
}
export const Input = ({placeholder, type, onChangeHandler, required=false, value}:inputType)=>{
    
    return(
        <C.Input
            required={required}
            onChange={onChangeHandler}
            placeholder={placeholder}
            type={type}
            value={value}
        />
    )
}