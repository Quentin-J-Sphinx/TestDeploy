import './style.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function BackChevron(){
    return(
        <>
            <a className='backchevron' aria-label='page précédente' href="javascript:window.history.back()"><FontAwesomeIcon icon={faChevronLeft} /></a>
        </>
    )
}

export default BackChevron;