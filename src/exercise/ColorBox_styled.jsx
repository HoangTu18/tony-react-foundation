import { useState } from 'react';
import styled from 'styled-components';

const colors = ['#1B1A17','#F0A500', '#E45826','#E6D5B8']


const StyledDiv = styled.div`
    padding: 4rem;
    color: black;
    float: left;
    background: ${(props) => 
        {
            if(props.reset) {
                return props.defaultbg
            }
            return props.broadcastbg
        }}}
`

const ColorApp = () => {
    const [broadcastbg, setBroadcastbg ] = useState('');
    const [reset, setReset] = useState(true);
    const emitBg = (color)  => {
        setBroadcastbg(color);
        setReset(prevState => !prevState);
    }
    return (
        <div className='colorBox'>
            {colors.map((color) => (
                <StyledDiv
                    key={color} 
                    broadcastbg={broadcastbg} 
                    defaultbg={color} 
                    reset={reset}
                    onClick={() => emitBg(color)}/>
            ))}
        </div>
    )
}


export default ColorApp;