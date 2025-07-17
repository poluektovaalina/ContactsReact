import IconSearch from '../assets/iconmonstr-magnifier-4.svg?react';
import useContactStore from '../store/useContactStore';

export default function ContactSearch(){
    const setSearchTerm = useContactStore((state) => state.setSearchTerm)

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }
    return(
        <div className="contact_search">
            <div className="ico">
                <IconSearch/>
            </div>
            <input type="text" onChange={handleChange} placeholder='Поиск...'/>
        </div>
    )
}