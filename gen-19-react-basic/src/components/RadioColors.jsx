

function RadioColors(props) {
    const {warna} = props
    return (
        <span className="flex items-center gap-x-2">
            <input type="radio" name="" {...props}  className={`w-10 h-10 ${warna}`}/>
            <label {...props} className={`w-10 h-10 ${warna}`}></label>
        </span>        
    )
}

export default RadioColors;