import { useState, useEffect } from 'react'

const Decrypt = () => {
    const [show, setShow] = useState(false)
    const handleDecrypt = () => {
        setShow(!show)
    }

    useEffect(() => {
        setShow(show)
    })

    return (
        <div>
            <button
                onClick={handleDecrypt}

            >Decriptar </button>
            {show ? "true" : "false"}
        </div>

    )
}

export default Decrypt