import s from './SuperButton.module.css'

type PropsType ={
    name?:string
    onClick:()=> void
    color?:string
    children?:React.ReactNode
    disabled?:boolean
}

export const SuperButton:React.FC<PropsType>=(props)=>{

    const{name,onClick,children,color, disabled,...restProps} = props
    const onclickHandler=()=>{
        onClick()
    }

    // const finalClassName = `${s.button} ${s.defalt}`
    // const finalClassName = `${s.button} ${color?s.red:s.defalt}`
    // --------------- тернарники -------------
    // --------------- способ 1 ---------------------------
    // const finalClassName = `${s.button} ${color?s.red:s.defalt} ${disabled ?s.disable:s.defalt}`
    //  // --------------- способ 2 тоже самое с 2 тернарниками  ---------------------------
    const finalClassName = ` 
    ${s.button} 
    ${color === 'red'  ? s.red:color === 'blue'?s.blue:s.defalt}`

    return(<div >
    <button className={finalClassName}onClick={onclickHandler}>{children}</button>
</div>)}
