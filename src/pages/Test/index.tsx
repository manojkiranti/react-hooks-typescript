import cx from "classnames"
import React from "react"

export const Test = () => {
    const [count, setCount] = React.useState(100)
    const sx = {
        border: '1px solid gray',
        backgroundColor: 'rgba(0,0,0,0.1)',
        padding: '0.5rem 1rem',
        borderRadius: '0',
        color: 'gray',
        "&:hover":{
            backgroundColor: 'red'
        },
        '.like': {
            backgroundColor: 'blue',
            color: 'white',
        },
        '& span':{
            color: 'green'
        }
    }
    const btnClass = cx({
        btn: true,
        'like': count > 100
    })
    const handleButtonClick = () => {
        console.log('d')
        if(count > 100){
            setCount((val) => val - 1)
        } else {
            setCount((val) => val + 1)
        }
    }
    
    return (
        <>
            <style>{`
    .like-button {
        font-size: 1rem;
        padding: 5px 10px;
        color:  #585858;
    }
   .liked {
        font-weight: bold;
        color: #1565c0;
   }
`}</style>
            <button style={sx} className={btnClass} onClick={handleButtonClick}>Like | <span>{count}</span></button>
        </>
    )
}