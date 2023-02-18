import { useEffect, useRef, useState } from "react"
import Card from '../../components/Card'
import './style.css'


function Content() {

    // PROPS

    // const listCourse = [
    //     {
    //         'course': 'Programming Laravel',
    //         'price': 200000,
    //         'isAvailable': true
    //     },
    //     {
    //         'course': 'Programming React',
    //         'price': 300000,
    //         'isAvailable': false
    //     },
    //     {
    //         'course': 'Programming Flutter',
    //         'price': 400000,
    //         'isAvailable': true
    //     }
    // ]

    // return (
    //     <div>
    //         <h2>Content</h2>
    //         {
    //             listCourse.map(item => {
    //                 return (
    //                     <Card course={item.course} price={item.price} isAvailable={item.isAvailable} />
    //                 )                    
    //             })
    //         }            
    //     </div>
    // )


    // useState useEffect
    // const [count, setCount] = useState(0)

    // useEffect(() => {
    //     console.log('render first')
    // }, [])

    // useEffect(() => {
    //     console.log(`count ${count}`)
    // }, [count])

    // console.log('render terus')

    // function handleClick() {
    //     setCount(count + 1)
    // }

    // return (
    //     <>
    //         <h2>Content</h2>
    //         <p>Nilai Count: {count}</p>
    //         <button onClick={handleClick}>Tambah Count</button>
    //     </>
    // )


    // useRef

    const[value, setValue] = useState('')
    const inputRef = useRef()

    function onFocus() {
        inputRef.current.setAttribute('class', 'highlight')
    }

    function onBlur() {
        inputRef.current.setAttribute('class', '')
    }

    function onChange(event) {
        console.log(event.target.value)
        setValue(event.target.value)
    }

    return(
        <>
            <h2>Content</h2>
            <h3>{value}</h3>
            <input type='text' ref={inputRef} onFocus={onFocus} onBlur={onBlur} onChange={onChange}/>
        </>
    )


}

export default Content