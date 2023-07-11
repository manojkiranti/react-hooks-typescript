import { forwardRef } from "react";
type MyInputType ={
    label:string
}
type RefType = HTMLInputElement
const MyInput = forwardRef<RefType,MyInputType >((props,ref) =>(
        <label>
            {props.label}
            <input ref={ref} />
        </label>
))


export default MyInput;