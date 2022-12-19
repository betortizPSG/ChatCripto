import { useState } from 'react'

const Decrypt = () => {
    const [show, setShow] = useState(false)
    const handleDecrypt = () => {
        setShow(!show)

    }

    return (
        <div>
            <button
                onClick={handleDecrypt}
            >Decriptar</button>
        </div>

    )
}

export default Decrypt